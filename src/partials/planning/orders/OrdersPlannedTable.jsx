import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, lazy, Suspense } from 'react';
import icons from '../../../images/icon/icons';
import OrdersDropdownFilter from './OrdersDropdownFilter';
import Loading from '../../../pages/component/Loading';
import {
  getOrders,
  revertSearch,
  selectLoadData,
  selectOrders,
  selectOrdersSearch,
  setSearch,
} from '../../../store/slice/ordersPlannedSlice';
import { getMinMaxExport } from '../../../store/slice/ordersPlannedSlice';
const OrdersTableItems = lazy(() => import('./OrdersTableItems'));

function OrdersPlannedTable({ setModalMinMaxExportOpen }) {
  const dispatch = useDispatch();
  const ordersList = useSelector(selectOrders);
  const load = useSelector(selectLoadData);
  const searchItems = useSelector(selectOrdersSearch);
  const [list, setList] = useState(useSelector(selectOrders));

  const [startSearch, setStartSearch] = useState(false);
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    setList(ordersList);
  }, [ordersList]);

  useEffect(() => {
    setLoadData(load);
  }, [load]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = list.filter((element) => {
        if (
          element.item
            .toString()
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

  return (
    <>
      <section className='mb-5 flex justify-between'>
        <div className='mb-4 sm:mb-0'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            MinMax
          </h1>
        </div>
        <div className='flex space-x-3'>
          <OrdersDropdownFilter />
          <input
            className='form-input w-72'
            placeholder='Buscar por Item...'
            type='search'
            onChange={handleSearch}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setModalMinMaxExportOpen(true);
              dispatch(getMinMaxExport());
            }}
            type='button'
            className='btn bg-primary text-white w-54 space-x-2'
          >
            <img className='w-4' src={icons.file} alt='Archivo' />
            <span>Exportar archivo </span>
          </button>
        </div>
      </section>
      {loadData ? (
        list?.length > 0 ? (
          <section>
            <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
              {!startSearch ? (
                <Suspense fallback={<Loading />}>
                  <OrdersTableItems
                    data={list}
                    ordersList={ordersList}
                    setList={setList}
                  />
                </Suspense>
              ) : startSearch && searchItems.length > 0 ? (
                <Suspense fallback={<Loading />}>
                  <OrdersTableItems
                    data={searchItems}
                    ordersList={ordersList}
                    setList={setList}
                  />
                </Suspense>
              ) : (
                <section className='justify-center items-center flex h-96'>
                  <h2 className='font-semibold text-2xl'>
                    Sin datos que mostrar
                  </h2>
                </section>
              )}
            </div>
          </section>
        ) : (
          <Loading />
        )
      ) : (
        <section className='justify-center items-center flex h-96'>
          <h2 className='font-semibold text-2xl'>Sin datos que mostrar</h2>
        </section>
      )}
    </>
  );
}

export default OrdersPlannedTable;
