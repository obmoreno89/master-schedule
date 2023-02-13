import React from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import OrdersPlannedTable from '../partials/planning/orders/OrdersPlannedTable';

const OrdersPlanning = () => {
  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={'Planeación'}
      nameSubRoute={'Demand MinMax'}
    >
      <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
        <div className='lg:px-8 mt-5'>
          <OrdersPlannedTable />
        </div>
      </div>
    </Layout>
  );
};

export default OrdersPlanning;
