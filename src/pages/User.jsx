import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import icons from '../images/icon/icons';
import UserFilter from '../partials/management/user/UserFilter';
import UserTable from '../partials/management/user/UserTable';

function Management() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const [openModalUserDelete, setOpenModalUserDelete] = useState(false);

  return (
    <>
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

              <section className='lg:px-8 mt-5'>
                <UserTable
                  setUserPanelOpen={setUserPanelOpen}
                  setOpenModalUserDelete={setOpenModalUserDelete}
                  openModalUserDelete={openModalUserDelete}
                  userPanelOpen={userPanelOpen}
                />
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Management;
