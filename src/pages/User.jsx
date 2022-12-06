import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import icons from '../images/icon/icons';
import UserFilter from '../partials/user/UserFilter';
import UserTable from '../partials/user/UserTable';

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
          icon={icons.administratorIcon}
          nameRoute='Administración'
          nameSubRoute='Crear cuenta'
        />

        <main className='bg-white h-screen'>
          <div className='px-4 sm:px-6 lg:px-0 py-8 w-full max-w-9xl mx-auto'>
            {/* Page header */}
            <div className='sm:flex sm:justify-between sm:items-center mb-4 md:mb-2'>
              {/* Left: Title */}
              <div className='mb-4 sm:mb-0 lg:px-8'>
                <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                  Usuarios
                </h1>
              </div>
            </div>

            {/* Table */}
            <section className='lg:px-8'>
              <UserFilter />
            </section>

            <section className='lg:px-8 mt-5'>
              <UserTable />
            </section>

            {/* Pagination */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Management;
