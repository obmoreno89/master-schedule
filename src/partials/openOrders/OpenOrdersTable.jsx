import { useEffect, useState } from 'react';
import OpenOrdersFilter from './OpenOrdersFilter';
import icons from '../../images/icon/icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOpenOrdersList,
  selectOpenOrdersList,
  selectLoading,
  selectNotFound,
  selectOpenOrdersDataFilter,
  selectOpenOrSearch,
  setSearch,
  revertSearch,
  getOpenOrdersFile,
} from '../../store/slice/openOrdersSlice.js';
import Loading from '../../pages/component/Loading';
import OpenOrdersTableItem from './OpenOrdersTableItem';

const OpenOrdersTable = ({ setModalOpenOrdersExportOpen }) => {
  const dispatch = useDispatch();
  const openOrdersList = useSelector(selectOpenOrdersList);
  const loading = useSelector(selectLoading);
  const notFound = useSelector(selectNotFound);
  const openOrdersDataFilter = useSelector(selectOpenOrdersDataFilter);
  const searchItems = useSelector(selectOpenOrSearch);

  const [list, setList] = useState(useSelector(selectOpenOrdersList));
  const [startSearch, setStartSearch] = useState(false);

  useEffect(() => {
    dispatch(getOpenOrdersList());
  }, []);

  useEffect(() => {
    setList(openOrdersList);
  }, [openOrdersList]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = openOrdersList.filter((element) => {
        if (
          element.Customer.toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          element.Order.toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          element.Org.toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return element;
        }
      });
      dispatch(setSearch(result));
    } else {
      dispatch(revertSearch());
      setStartSearch(false);
    }
  };

  const formatCurrency = (num) => {
    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);

    return numberFormat.format(num);
  };

  return (
    <>
      {!loading ? (
        <>
          <header className='flex flex-1 justify-between mb-3'>
            <div>
              <h2 className='text-3xl font-semibold text-black my-auto'>
                Órdenes a planear
              </h2>

              <p className='my-auto mb-1 font-medium'>
                Total de órdenes:{' '}
                {!openOrdersDataFilter.length > 0 ? (
                  <span className='font-bold text-primary'>
                    {openOrdersList.length}
                  </span>
                ) : (
                  <span className='font-bold text-primary'>
                    {openOrdersDataFilter.length}
                  </span>
                )}
              </p>
            </div>
            <div className='flex space-x-3 h-10 relative top-5 z-20'>
              <OpenOrdersFilter />

              <input
                className='form-input w-72'
                placeholder='Buscar...'
                type='search'
                //onChange={handleSearch}
                onKeyUp={handleSearch}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpenOrdersExportOpen(true);
                  dispatch(getOpenOrdersFile());
                }}
                type='button'
                className='btn bg-primary text-white w-54 space-x-2'
              >
                <img className='w-4' src={icons.file} alt='Archivo' />
                <span>Exportar reporte (CSV) </span>
              </button>
            </div>
          </header>
          {list?.length > 0 ? (
            <div className='border border-slate-300 rounded-xl orders-table overflow-x-auto'>
              {!startSearch ? (
                <OpenOrdersTableItem
                  data={openOrdersList}
                  openOrdersDataFilter={openOrdersDataFilter}
                />
              ) : startSearch && searchItems.length > 0 ? (
                <OpenOrdersTableItem
                  data={searchItems}
                  openOrdersDataFilter={openOrdersDataFilter}
                />
              ) : (
                <section className='justify-center items-center flex orders-table'>
                  <h2 className='font-semibold text-2xl'>
                    Sin datos para mostrar
                  </h2>
                </section>
              )}
            </div>
          ) : (
            <Loading />
          )}
        </>
      ) : notFound ? (
        <section className='justify-center items-center flex orders-table'>
          <h2 className='font-semibold text-2xl'>Sin datos para mostrar</h2>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default OpenOrdersTable;
