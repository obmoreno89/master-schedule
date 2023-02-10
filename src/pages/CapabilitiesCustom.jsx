import React, { useState } from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import CapabilitiesCustomTable from '../partials/capabilitiesCustom/CapabilitiesCustomTable';
import CapabilitiesCustomCreatePanel from '../partials/capabilitiesCustom/CapabilitiesCustomCreatePanel';
import ModalCapabilitiesCustomDelete from './component/ModalCapabilitiesCustomDelete';

function CapabilitiesCustom() {
  const [
    capabilitiesCustomCreateOpenPanel,
    setCapabilitiesCustomCreateOpenPanel,
  ] = useState(false);

  const [
    openModalCapabilitiesCustomDelete,
    setOpenModalCapabilitiesCustomDelete,
  ] = useState(false);

  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={'Planeación'}
        nameSubRoute={'Capacidades Custom'}
      >
        <section className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-6'>
          <section className='lg:px-8'>
            <CapabilitiesCustomTable
              setCapabilitiesCustomCreateOpenPanel={
                setCapabilitiesCustomCreateOpenPanel
              }
              setOpenModalCapabilitiesCustomDelete={
                setOpenModalCapabilitiesCustomDelete
              }
            />
          </section>
        </section>
      </Layout>
      <section>
        <CapabilitiesCustomCreatePanel
          capabilitiesCustomCreateOpenPanel={capabilitiesCustomCreateOpenPanel}
          setCapabilitiesCustomCreateOpenPanel={
            setCapabilitiesCustomCreateOpenPanel
          }
        />
      </section>
      <section>
        <ModalCapabilitiesCustomDelete
          openModalCapabilitiesCustomDelete={openModalCapabilitiesCustomDelete}
          setOpenModalCapabilitiesCustomDelete={
            setOpenModalCapabilitiesCustomDelete
          }
        />
      </section>
    </>
  );
}

export default CapabilitiesCustom;
