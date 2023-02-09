import React from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import CapabilitiesCustomTable from '../partials/capabilitiesCustom/CapabilitiesCustomTable';

function CapabilitiesCustom() {
  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={'Planeación'}
        nameSubRoute={'Capacidades Custom'}
      >
        <section className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-6'>
          <section className='lg:px-8'>
            <CapabilitiesCustomTable />
          </section>
        </section>
      </Layout>
    </>
  );
}

export default CapabilitiesCustom;
