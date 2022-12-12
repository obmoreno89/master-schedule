import React, { useState } from 'react';
import icons from '../images/icon/icons';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          icon={icons.dashboardIcon}
          nameRoute='Dashobard'
          nameSubRoute='Dashboard'
        />

        <main className='bg-white h-screen'>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* Welcome banner */}
            <WelcomeBanner />
            {/* Cards */}
              {/* <AnalyticsCard01 /> */}
              <div class="max-w-full mx-4 py-0 sm:mx-auto sm:px-6 lg:px-0">
                <div class="sm:flex sm:space-x-4">
                    <div class="inline-block align-bottom bg-white rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
                        <div class="bg-white p-5">
                            <div class="sm:flex sm:items-start">
                                <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 class="text-sm leading-6 font-medium text-gray-400">Número de Órdenes en PastDue</h3>
                                    <p class="text-3xl font-bold text-black">2003</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inline-block align-bottom bg-white rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
                        <div class="bg-white p-5">
                            <div class="sm:flex sm:items-start">
                                <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 class="text-sm leading-6 font-medium text-gray-400">Monto en PastDue</h3>
                                    <p class="text-3xl font-bold text-black">16MDD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inline-block align-bottom bg-white rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
                        <div class="bg-white p-5">
                            <div class="sm:flex sm:items-start">
                                <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 class="text-sm leading-6 font-medium text-gray-400">Órdenes por programar</h3>
                                    <p class="text-3xl font-bold text-black">23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inline-block align-bottom bg-white rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
                        <div class="bg-white p-5">
                            <div class="sm:flex sm:items-start">
                                <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 class="text-sm leading-6 font-medium text-gray-400">Exceso de Inventario</h3>
                                    <p class="text-3xl font-bold text-black">30 Pz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
