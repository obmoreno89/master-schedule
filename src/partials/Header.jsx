import React, { useState } from 'react';
import icons from '../images/icon/icons';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';

function Header({
  sidebarOpen,
  setSidebarOpen,
  icon,
  nameRoute,
  nameSubRoute,
}) {
  return (
    <>
      <header className='sticky top-0 bg-white border-b  border-slate-200 z-30'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 -mb-px'>
            <figure className='flex space-x-3'>
              <img src={icon} alt='Caja' />
              <h5 className='capitalize font-semibold text-gray-400 flex space-x-3 tracking-tight'>
                {nameRoute}
                <img
                  className='ml-3'
                  src={icons.smallArrowRight}
                  alt='Flecha derecha'
                />
                <p className='text-primary font-semibold tracking-tight'>
                  {nameSubRoute}
                </p>
              </h5>
            </figure>

            <div className='flex'>
              {/* Hamburger button */}
              <button
                className='text-slate-500 hover:text-slate-600 lg:hidden'
                aria-controls='sidebar'
                aria-expanded={sidebarOpen}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  className='w-6 h-6 fill-current'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect x='4' y='5' width='16' height='2' />
                  <rect x='4' y='11' width='16' height='2' />
                  <rect x='4' y='17' width='16' height='2' />
                </svg>
              </button>
            </div>

            {/* Header: Right side */}
            <div className='flex items-center space-x-3'>
              <Help align='right' />

              <UserMenu align='right' />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
