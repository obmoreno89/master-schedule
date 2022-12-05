import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import RegisterUser from '../partials/management/RegisterUser';
import icons from '../images/icon/icons';

function Management() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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

        <main>
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
              <RegisterUser />
            </div>
            {/* Pagination */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Management;
