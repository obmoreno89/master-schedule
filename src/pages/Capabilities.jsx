import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import CapabilitiesTable from '../partials/capabilities/CapabilitiesTable';
import PaginationNumeric from '../components/PaginationNumeric';
import CapabilitiesProductListPanel from '../partials/capabilities/CapabilitiesProductListPanel';
import CabalitiesGroupPanel from '../partials/capabilities/CapabilitiesGroupPanel';
import icons from '../images/icon/icons';
import ModalProductLine from './component/ModalProductLine';
import ModalGroup from './component/ModalGroup';

function Capabilities() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [transactionPanelOpen, setTransactionPanelOpen] = useState(false);
  const [groupPanelOpen, setGroupPanelOpen] = useState(false);
  const [openModalPL, setOpenModalPL] = useState(false);
  const [openModalGroup, setOpenModalGroup] = useState(false);

  return (
    <>
      <div className='flex h-screen overflow-hidden'>
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          {/*  Site header */}
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            icon={icons.planningIcon}
            nameRoute='Planeación'
            nameSubRoute='Capacidades'
          />
          <main className='bg-white h-screen'>
            <div className='px-4 sm:px-6 lg:px-0 py-8 w-full max-w-9xl mx-auto'>
              {/* Page header */}
              <div className='sm:flex sm:justify-between sm:items-center mb-4 md:mb-2'>
                {/* Left: Title */}
                <div className='mb-4 sm:mb-0 lg:px-8'>
                  <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                    Capacidades
                  </h1>
                </div>
              </div>

              {/* Table */}
              <div className='lg:px-8'>
                <CapabilitiesTable
                  setTransactionPanelOpen={setTransactionPanelOpen}
                  setGroupPanelOpen={setGroupPanelOpen}
                />
              </div>
              {/* Pagination */}
              <div className='mt-8'>
                <PaginationNumeric />
              </div>
              <CapabilitiesProductListPanel
                transactionPanelOpen={transactionPanelOpen}
                setTransactionPanelOpen={setTransactionPanelOpen}
                setOpenModalPL={setOpenModalPL}
              />
              <CabalitiesGroupPanel
                groupPanelOpen={groupPanelOpen}
                setGroupPanelOpen={setGroupPanelOpen}
                setOpenModalGroup={setOpenModalGroup}
              />
            </div>
          </main>
        </div>
      </div>

      <ModalProductLine
        openModalPL={openModalPL}
        setOpenModalPL={setOpenModalPL}
      />
      <ModalGroup
        openModalGroup={openModalGroup}
        setOpenModalGroup={setOpenModalGroup}
      />
    </>
  );
}

export default Capabilities;
