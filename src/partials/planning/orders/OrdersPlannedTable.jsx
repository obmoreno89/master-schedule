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
            className='font-medium text-sm bg-white text-primary w-54 space-x-2 border border-primary rounded px-2 flex justify-center items-center hover:text-green-500 hover:border-green-500'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='19'
              height='19'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#009B4A'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='stroke-current text-gray-500'
            >
              <path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'></path>
              <polyline points='13 2 13 9 20 9'></polyline>
            </svg>
            <span class='hover:text-green-600'>Exportar reporte (CSV) </span>
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
