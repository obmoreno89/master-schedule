import { useEffect } from 'react';
import OpenOrdersFilter from './OpenOrdersFilter';
import { useSelector, useDispatch } from 'react-redux';
import {
  getOpenOrdersList,
  selectOpenOrdersList,
  selectLoading,
  selectNotFound,
} from '../../store/slice/openOrdersSlice.js';
import Loading from '../../pages/component/Loading';

const OpenOrdersTable = () => {
  const dispatch = useDispatch();
  const openOrdersList = useSelector(selectOpenOrdersList);
  const loading = useSelector(selectLoading);
  const notFound = useSelector(selectNotFound);

  useEffect(() => {
    dispatch(getOpenOrdersList());
  }, []);

  console.log(openOrdersList);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES');
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
                <span className='font-bold text-primary'>
                  {openOrdersList.length}
                </span>
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
            <table className='table-auto w-full table rounded-xl'>
              <thead className='text-[14px] text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
                <tr>
                  <th className='px-2 first:pl-5 w-1/4'>
                    <div className='flex items-center space-x-10'>
                      <div className='font-semibold text-left'>Order</div>
                    </div>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                    <p className='font-semibold text-center'>Line No.</p>
                  </th>

                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>Order Type</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>Inventory Item</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>Quantity</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>total Order</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                    <p className='font-semibold text-center'>Request Date</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                    <p className='font-semibold text-center'>
                      Schedule Ship Date
                    </p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5'>
                    <p className='font-semibold text-center'>Promise Date</p>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-slate-200'>
                {openOrdersList?.map((data, index) => (
                  <tr key={index}>
                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5'>
                      <div className='flex flex-col'>
                        <p className='font-medium capitalize text-slate-400 text-sm'>
                          {data.Order}
                        </p>
                        <p className='text-textTableItem font-medium capitalize text-base'>
                          {data.Customer}
                        </p>
                        <p className='text-primary font-medium capitalize text-sm'>
                          {data.Org}
                        </p>
                      </div>
                    </td>
                    <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                      <p className='font-semibold text-sm'>{data.LineNo}</p>
                    </td>

                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                      <p className='text-sm text-center'>{data.Order_Type}</p>
                    </td>
                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                      <p className='text-center text-sm'>
                        {data.Inventory_Item}
                      </p>
                    </td>
                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                      <p className='text-center text-sm'>{data.OrdQty}</p>
                    </td>
                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                      <p className='text-center text-sm'>{data.TotalOrder}</p>
                    </td>
                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                      <p className='text-center text-sm'>
                        {formatDate(data.Request_Date)}
                      </p>
                    </td>
                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400'>
                      <p className='text-center text-sm'>
                        {formatDate(data.Schedule_Ship_Date)}
                      </p>
                    </td>
                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium'>
                      <p className='text-center text-sm'>
                        {formatDate(data.Promise_Date)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
