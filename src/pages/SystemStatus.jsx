import React, { useState } from 'react';
import icons from '../images/icon/icons';
import Status from '../partials/systemStatus/Status';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function SystemStatus() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const [openModalUserDelete, setOpenModalUserDelete] = useState(false);
  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          icon={icons.administratorIcon}
          nameRoute='Administración'
          nameSubRoute='Usuario'
        />

        <main className='bg-white h-screen'>
          <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
            {/* Page header */}
            <div className='sm:flex sm:justify-between sm:items-center mb-4 md:mb-2'>
              {/* Left: Title */}
            </div>

            <section className='lg:px-8 mt-3'>
              <Status />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SystemStatus;
