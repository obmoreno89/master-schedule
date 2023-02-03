import { useEffect } from 'react';
import OpenOrdersFilter from './OpenOrdersFilter';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOpenOrdersList,
  selectOpenOrdersList,
  selectLoading,
  selectNotFound,
  selectOpenOrdersDataFilter,
} from '../../store/slice/openOrdersSlice.js';
import Loading from '../../pages/component/Loading';
import OpenOrdersTableItem from './OpenOrdersTableItem';

const OpenOrdersTable = () => {
  const dispatch = useDispatch();
  const openOrdersList = useSelector(selectOpenOrdersList);
  const loading = useSelector(selectLoading);
  const notFound = useSelector(selectNotFound);
  const openOrdersDataFilter = useSelector(selectOpenOrdersDataFilter);

  useEffect(() => {
    dispatch(getOpenOrdersList());
  }, []);

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
            <div className='flex space-x-3 h-10 relative top-5'>
              <OpenOrdersFilter />

              <input
                className='form-input w-72'
                placeholder='Buscar order customer y org...'
                type='search'
              />
            </div>
          </header>
          <div className='border border-slate-300 rounded-xl orders-table overflow-x-auto'>
            <OpenOrdersTableItem
              data={openOrdersList}
              openOrdersDataFilter={openOrdersDataFilter}
            />
          </div>
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