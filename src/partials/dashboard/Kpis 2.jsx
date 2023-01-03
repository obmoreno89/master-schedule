import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import KpiSkeletonLoading from '../../pages/component/KpiSkeletonLoading';
import {
  getKpiNumberOfOrders,
  getKpiAmountOfOrders,
  getOrdersProgrammed,
  getExcessInventory,
  selectTotalNumberOfOrders,
  selectTotalAmountOfOrders,
  selectOrdersProgrammed,
  selectExcessInventory,
  selectSkeletonNumberOrders,
  selectSkeletonAmountOrders,
  selectSkeletonOrdersProgrammed,
  selectSkeletonExcessInventoy,
} from '../../store/slice/kpiSlice';

function Kpis() {
  const dispatch = useDispatch();
  const kpiTotalNumberOfOrders = useSelector(selectTotalNumberOfOrders);
  const kpiTotalAmountOfOrders = useSelector(selectTotalAmountOfOrders);
  const kpiOrdersProgrammed = useSelector(selectOrdersProgrammed);
  const kpiExcessInventory = useSelector(selectExcessInventory);
  const LoadingNumberOrders = useSelector(selectSkeletonNumberOrders);
  const loadingAmountOrders = useSelector(selectSkeletonAmountOrders);
  const loadingOrdersProgrammed = useSelector(selectSkeletonOrdersProgrammed);
  const loadingExcessInventory = useSelector(selectSkeletonExcessInventoy);

  useEffect(() => {
    dispatch(getKpiNumberOfOrders());
    dispatch(getKpiAmountOfOrders());
    dispatch(getOrdersProgrammed());
    dispatch(getExcessInventory());
  }, []);

  return (
    <div className='px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto'>
      <div className='max-w-full mx-4 py-0 sm:mx-auto sm:px-6 lg:px-0'>
        <div className='sm:flex sm:space-x-4'>
          {!LoadingNumberOrders ? (
            <section className='inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8'>
              <div className='bg-white p-5'>
                <div className='sm:flex sm:items-start'>
                  <div className='text-center sm:mt-0 sm:ml-2 sm:text-left'>
                    <h3 className='text-sm leading-6 font-medium text-gray-400'>
                      Número de Órdenes en PastDue
                    </h3>
                    {!kpiTotalNumberOfOrders.length ? (
                      <p className='text-3xl font-bold text-black'>
                        {kpiTotalNumberOfOrders.orders_in_past_due}
                      </p>
                    ) : (
                      <p className='text-3xl font-bold text-black'>Sin datos</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <KpiSkeletonLoading />
          )}

          {!loadingAmountOrders ? (
            <section className='inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8'>
              <div className='bg-white p-5'>
                <div className='sm:flex sm:items-start'>
                  <div className='text-center sm:mt-0 sm:ml-2 sm:text-left'>
                    <h3 className='text-sm leading-6 font-medium text-gray-400'>
                      Monto de ordenes en PastDue
                    </h3>
                    {!kpiTotalAmountOfOrders.length ? (
                      <p className='text-3xl font-bold text-black'>
                        {kpiTotalAmountOfOrders.total_amount_orders_in_past_due}
                      </p>
                    ) : (
                      <p className='text-3xl font-bold text-black'>Sin datos</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <KpiSkeletonLoading />
          )}

          {!loadingOrdersProgrammed ? (
            <section className='inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8'>
              <div className='bg-white p-5'>
                <div className='sm:flex sm:items-start'>
                  <div className='text-center sm:mt-0 sm:ml-2 sm:text-left'>
                    <h3 className='text-sm leading-6 font-medium text-gray-400'>
                      Ordenes por programar
                    </h3>
                    {!kpiOrdersProgrammed.length ? (
                      <p className='text-3xl font-bold text-black'>
                        {kpiOrdersProgrammed.orders_without_ship_date}
                      </p>
                    ) : (
                      <p className='text-3xl font-bold text-black'>Sin datos</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <KpiSkeletonLoading />
          )}

          {!loadingExcessInventory ? (
            <section className='inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8'>
              <div className='bg-white p-5'>
                <div className='sm:flex sm:items-start'>
                  <div className='text-center sm:mt-0 sm:ml-2 sm:text-left'>
                    <h3 className='text-sm leading-6 font-medium text-gray-400'>
                      Excesos de inventario
                    </h3>
                    {!kpiExcessInventory?.length > 0 ? (
                      <p className='text-3xl font-bold text-black'>
                        {kpiExcessInventory.excess_inventory} <span>pz</span>
                      </p>
                    ) : (
                      <p className='text-3xl font-bold text-black'>Sin datos</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <KpiSkeletonLoading />
          )}
        </div>
      </div>
    </div>
  );
}

export default Kpis;
