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

  const onlyAdministrator = sessionStorage.getItem('id');

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
            className='lg:hidden text-slate-500 hover:text-sideBar'
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
                  pathname === '/mp-pro/' || pathname.includes('dashboard')
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
                            (isActive ? '!text-primary' : '')
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
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M21 3H14V10H21V3Z'
                                      stroke='#231F20'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M21 14H14V21H21V14Z'
                                      stroke='#231F20'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar ` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M10 14H3V21H10V14Z'
                                      stroke='#231F20'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
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
                      <Link
                        to='#0'
                        className={`block text-textSidebar hover:text-primary truncate transition duration-150 ${
                          pathname.includes('planning') && ' !text-primary'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <figure className='flex items-center'>
                            <svg
                              className='shrink-0 h-6 w-6'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                className={`stroke-current text-textSidebar ${
                                  pathname.includes('planning') &&
                                  '!text-primary'
                                }`}
                                d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
                                strokeWidth='2'
                              />
                              <path
                                className={`stroke-current text-textSidebar ${
                                  pathname.includes('planning') &&
                                  '!text-primary'
                                }`}
                                d='M3 9H21'
                                strokeWidth='2'
                              />
                              <path
                                className={`stroke-current text-textSidebar ${
                                  pathname.includes('planning') &&
                                  '!text-primary'
                                }`}
                                d='M9 21V9'
                                strokeWidth='2'
                              />
                            </svg>
                            <span className='text-sm font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200  '>
                              Planeación
                            </span>
                          </figure>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-sideBar ${
                                open && 'transform rotate-180'
                              }`}
                              viewBox='0 0 12 12'
                            >
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </Link>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              onClick={() =>
                                sessionStorage.removeItem('planningId')
                              }
                              end
                              to='/mp-pro/planning/plannings/'
                              className={({ isActive }) =>
                                'block text-sideBar hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm'>Planeaciones</span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              onClick={() =>
                                sessionStorage.removeItem('planningId')
                              }
                              end
                              to='/mp-pro/planning/orders-planned/'
                              className={({ isActive }) =>
                                'block text-sideBar hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm'>
                                Demanda de Planning Report
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              onClick={() =>
                                sessionStorage.removeItem('planningId')
                              }
                              end
                              to='/mp-pro/planning/open-orders/'
                              className={({ isActive }) =>
                                'block text-sideBar hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm'>
                                Demanda de Open Orders
                              </span>
                            </NavLink>
                          </li>
                          {/* <li className='mb-1 last:mb-0'>
                            <NavLink
                              onClick={() =>
                                sessionStorage.removeItem('planningId')
                              }
                              end
                              to='/mp-pro/planning/old-version/'
                              className={({ isActive }) =>
                                'block text-sideBar hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm'>
                                Planeación version anterior
                              </span>
                            </NavLink>
                          </li> */}
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/planning/capabilities/'
                              className={({ isActive }) =>
                                'block hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm'>Capacidades Base</span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/planning/capabilities/custom'
                              className={({ isActive }) =>
                                'block hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm'>
                                Capacidades Custom
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/planning/calendar/'
                              className={({ isActive }) =>
                                'block hover:text-primary text-textSidebar transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 '>
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
                      <Link
                        to='#0'
                        className={`block text-textSidebar hover:text-primary truncate transition duration-150 ${
                          pathname.includes('management') && ' !text-primary'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between'>
                          <figure className='flex items-center'>
                            <svg
                              className='shrink-0 h-6 w-6'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                className={`stroke-current text-textSidebar ${
                                  pathname.includes('management') &&
                                  '!text-primary'
                                }`}
                                d='M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21'
                                strokeWidth='2'
                              />
                              <path
                                className={`stroke-current text-textSidebar ${
                                  pathname.includes('management') &&
                                  '!text-primary'
                                }`}
                                d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
                                strokeWidth='2'
                              />
                              <path
                                className={`stroke-current text-textSidebar ${
                                  pathname.includes('management') &&
                                  '!text-primary'
                                }`}
                                d='M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13'
                                strokeWidth='2'
                              />
                              <path
                                className={`stroke-current text-textSidebar ${
                                  pathname.includes('management') &&
                                  '!text-primary'
                                }`}
                                d='M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88'
                                strokeWidth='2'
                              />
                            </svg>
                            <span className='text-sm font-semibold ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Administración
                            </span>
                          </figure>
                          {/* Icon */}
                          <div className='flex shrink-0 ml-2'>
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-sideBar ${
                                open && 'transform rotate-180'
                              }`}
                              viewBox='0 0 12 12'
                            >
                              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
                            </svg>
                          </div>
                        </div>
                      </Link>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/management/user/'
                              className={({ isActive }) =>
                                'block text-textSidebar hover:text-primary transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm  lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 '>
                                Usuarios
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
              <SidebarLinkGroup
                activecondition={
                  pathname === '/mp-pro/system-status/' ||
                  pathname.includes('dashboard')
                }
              >
                {(handleClick) => {
                  return (
                    <Link
                      to='/mp-pro/system-status/'
                      className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                        pathname.includes('/mp-pro/state-system/') &&
                        'hover:text-slate-200'
                      }`}
                      onClick={() => {
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <section className=''>
                        <NavLink
                          to='/mp-pro/system-status/'
                          className={({ isActive }) =>
                            'transition duration-150 truncate font-semibold text-sm flex items-center py-1 px-0 text-textSidebar hover:text-hoverTextSidebar space-x-[11px] ' +
                            (isActive ? '!text-primary' : '')
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
                                      d='M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z'
                                      stroke='#231F20'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z'
                                      stroke='#231F20'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M6 6H6.01'
                                      stroke='#231F20'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                    <path
                                      className={
                                        `stroke-current text-textSidebar ` +
                                        (isActive ? '!text-primary' : '')
                                      }
                                      d='M6 18H6.01'
                                      stroke='#231F20'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                </svg>
                              </figure>
                              <span>Estado del sistema</span>
                            </>
                          )}
                        </NavLink>
                      </section>
                    </Link>
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
