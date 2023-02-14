import React, { useState } from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import LineRateCustomTable from '../partials/LineRateCustom/LineRateCustomTable';
import LineRateCustomCreatePanel from '../partials/LineRateCustom/LineRateCustomCreatePanel';
import ModalLineRateCustomDelete from './component/ModalLineRateCustomDelete';
import LineRateCustomEditPanel from '../partials/LineRateCustom/LineRateCustomEditPanel';

function LineRateCustom() {
  const [LineRateCustomCreateOpenPanel, setLineRateCustomCreateOpenPanel] =
    useState(false);

  const [openModalLineRateCustomDelete, setOpenModalLineRateCustomDelete] =
    useState(false);

  const [LineRateCustomEditOpenPanel, setLineRateCustomEditOpenPanel] =
    useState(false);

  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={'Planeación'}
        nameSubRoute={'Capacidades Custom'}
      >
        <section className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-6'>
          <section className='lg:px-8'>
            <LineRateCustomTable
              setLineRateCustomCreateOpenPanel={
                setLineRateCustomCreateOpenPanel
              }
              setOpenModalLineRateCustomDelete={
                setOpenModalLineRateCustomDelete
              }
              setLineRateCustomEditOpenPanel={setLineRateCustomEditOpenPanel}
            />
          </section>
        </section>
      </Layout>
      <section>
        <LineRateCustomCreatePanel
          LineRateCustomCreateOpenPanel={LineRateCustomCreateOpenPanel}
          setLineRateCustomCreateOpenPanel={setLineRateCustomCreateOpenPanel}
        />
      </section>
      <section>
        <ModalLineRateCustomDelete
          openModalLineRateCustomDelete={openModalLineRateCustomDelete}
          setOpenModalLineRateCustomDelete={setOpenModalLineRateCustomDelete}
        />
      </section>
      <section>
        <LineRateCustomEditPanel
          LineRateCustomEditOpenPanel={LineRateCustomEditOpenPanel}
          setLineRateCustomEditOpenPanel={setLineRateCustomEditOpenPanel}
        />
      </section>
    </>
  );
}

export default LineRateCustom;
