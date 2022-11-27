import React, { useState } from 'react';
import NavBar from '../partials/NavBar';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden '>
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div>
            <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          {/* <div className='px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto'>
            <WelcomeBanner />
          </div> */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
