import React from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import OldVersionPlanningsTable from '../partials/planning/plannings/OldVersionPlanningsTable';

const OrdersPlanning = () => {
  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={'Planeación'}
      nameSubRoute={'Planeación version anterior'}
    >
      <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
        <div className='lg:px-8 mt-5'>
          <OldVersionPlanningsTable />
        </div>
      </div>
    </Layout>
  );
};

export default OrdersPlanning;
