import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../partials/Header';
import icons from '../../images/icon/icons';

function PageNotFound() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            <div className='max-w-2xl m-auto mt-16'>
              <div className='text-center px-4'>
                <div className='inline-flex mb-8'>
                  <img
                    src={icons.error404}
                    width='176'
                    height='176'
                    alt='404 illustration'
                  />
                </div>
                <div className='mb-6'>Hmm... La pagina no existe!</div>
                <Link
                  to='mp-pro/'
                  className='btn bg-primary hover:bg-indigo-600 text-white'
                >
                  Regresar
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PageNotFound;
