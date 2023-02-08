import React from 'react';
import Layout from '../../../components/Layout';
import icons from '../../../images/icon/icons';
import DemandPlanningReportTable from './DemandPlanningReportTable';
import { useSelector } from 'react-redux';
import { selectFullLoading } from '../../../store/slice/planningSlice';

function DemandPlanningReport() {
  const fullLoading = useSelector(selectFullLoading);

  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={'Planeación'}
        nameSubRoute={'Demand Planning Report'}
      >
        <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
          <div className='lg:px-8 mt-5'>
            <DemandPlanningReportTable />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DemandPlanningReport;
