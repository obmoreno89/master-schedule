import { useState } from 'react';
import icons from '../images/icon/icons';
import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';

function Layout({ icon, nameRoute, nameSubRoute, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white'>
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          icon={icon}
          nameRoute={nameRoute}
          nameSubRoute={nameSubRoute}
        />

        <main className='h-screen bg-white'>
          <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
            <div className='lg:px-8 mt-5'>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
