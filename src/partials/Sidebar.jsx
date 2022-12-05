import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import icons from '../images/icon/icons';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden='true'
      ></div>

      {/* Sidebar */}
      <div
        id='sidebar'
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white border-r  border-slate-200 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className='flex justify-between mb-10 pr-3 sm:px-2'>
          {/* Close button */}
          <button
            ref={trigger}
            className='lg:hidden text-slate-500 hover:text-slate-400'
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls='sidebar'
            aria-expanded={sidebarOpen}
          >
            <span className='sr-only'>Close sidebar</span>
            <svg
              className='w-6 h-6 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
            </svg>
          </button>
          {/* Logo */}
          <figure className='block'>
            <img src={icons.logoNide} alt='logo' className='w-32' />
          </figure>
        </div>

        {/* Links */}
        <div className='space-y-8'>
          {/* Pages group */}
          <div>
            <ul className='mt-3'>
              {/* Dashboard */}
              <SidebarLinkGroup
                activecondition={
                  pathname === '/mp-pro/dashboard' ||
                  pathname.includes('dashboard')
                }
              >
                {(handleClick) => {
                  return (
                    <Link
                      to='/mp-pro/'
                      className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                        pathname.includes('/mp-pro/') && 'hover:text-slate-200'
                      }`}
                      onClick={(e) => {
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <section className=''>
                        <NavLink
                          to='/mp-pro/'
                          className={({ isActive }) =>
                            'transition duration-150 truncate font-semibold text-sm flex items-center py-1 px-0 text-textSidebar hover:text-hoverTextSidebar space-x-[11px] ' +
                            (isActive ? '!text-primary !font-bold' : '')
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <figure>
                                <svg
                                  className='shrink-0 h-6 w-6'
                                  viewBox='0 0 24 24'
                                >
                                  <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                  >
                                    <path
                                      className={
                                        `stroke-current text-textSidebar` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M10 3H3V10H10V3Z'
                                      stroke='#231F20'
                                      stroke-width='2'
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M21 3H14V10H21V3Z'
                                      stroke='#231F20'
                                      stroke-width='2'
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M21 14H14V21H21V14Z'
                                      stroke='#231F20'
                                      stroke-width='2'
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar ` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M10 14H3V21H10V14Z'
                                      stroke='#231F20'
                                      stroke-width='2'
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                    />
                                  </svg>
                                </svg>
                              </figure>
                              <span>Dashboard</span>
                            </>
                          )}
                        </NavLink>
                      </section>
                    </Link>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup activecondition={pathname.includes('planning')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                          pathname.includes('/mp-pro/planning/') &&
                          'hover:text-slate-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg
                              className='shrink-0 h-6 w-6'
                              viewBox='0 0 24 24'
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes('planning') &&
                                  'text-indigo-300'
                                }`}
                                d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z'
                              />
                              <path
                                className={`fill-current text-slate-700 ${
                                  pathname.includes('planning') &&
                                  '!text-indigo-600'
                                }`}
                                d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z'
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes('planning') &&
                                  'text-primary'
                                }`}
                                d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z'
                              />
                            </svg>
                            <span className='text-sm font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-textSidebar hover:text-hoverTextSidebar'>
                              Planeación
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                open && 'transform rotate-180'
                              }`}
                              viewBox='0 0 12 12'
                            >
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/ecommerce/customers'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-semibold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-textSidebar hover:text-hoverTextSidebar '>
                                Planeaciones
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/capabilities/'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-semibold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-textSidebar hover:text-hoverTextSidebar'>
                                Capacidades
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/schedule/'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-semibold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-textSidebar hover:text-hoverTextSidebar'>
                                Calendario
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              <SidebarLinkGroup
                activecondition={pathname.includes('management')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href='#0'
                        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                          pathname.includes('management') &&
                          'hover:text-slate-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <svg
                              className='shrink-0 h-6 w-6'
                              viewBox='0 0 24 24'
                            >
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes('management') &&
                                  'text-primary'
                                }`}
                                d='M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z'
                              />
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes('management') &&
                                  'text-secondary'
                                }`}
                                d='M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z'
                              />
                            </svg>
                            <span className='text-sm font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-textSidebar hover:text-hoverTextSidebar'>
                              Administración
                            </span>
                          </div>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                open && 'transform rotate-180'
                              }`}
                              viewBox='0 0 12 12'
                            >
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/management/user/'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-semibold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-textSidebar hover:text-hoverTextSidebar'>
                                Usuarios
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/management/register-user/'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-semibold lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-textSidebar hover:text-hoverTextSidebar'>
                                Crear cuenta
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Finance */}
              <SidebarLinkGroup activecondition={pathname.includes('state')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <section className='flex md:invisible lg:visible'>
                        <NavLink
                          className='font-semibold text-sm flex items-center justify-center  py-1 text-textSidebar hover:text-hoverTextSidebar space-x-2 '
                          to='/mp-pro/state-system/'
                        >
                          {({ isActive }) => (
                            <>
                              <figure className='flex items-center'>
                                <svg
                                  className='shrink-0 h-6 w-6'
                                  viewBox='0 0 24 24'
                                >
                                  <path
                                    className={
                                      `fill-current text-slate-400 ` +
                                      (isActive ? '!text-primary' : '')
                                    }
                                    d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z'
                                  />
                                  <path
                                    className={
                                      `fill-current text-slate-700 ` +
                                      (isActive ? '!text-green-100' : '')
                                    }
                                    d='M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z'
                                  />
                                  <path
                                    className={`fill-current text-slate-400 `}
                                    d='M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z'
                                  />
                                </svg>
                              </figure>
                              <span>Estado sistema</span>
                            </>
                          )}
                        </NavLink>
                      </section>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className='pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto'>
          <div className='px-3 py-2'>
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className='sr-only'>Expand / collapse sidebar</span>
              <svg
                className='w-6 h-6 fill-current sidebar-expanded:rotate-180'
                viewBox='0 0 24 24'
              >
                <path
                  className='text-slate-600'
                  d='M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z'
                />
                <path className='text-slate-600' d='M3 23H1V1h2z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
