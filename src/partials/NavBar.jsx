import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import icons from '../images/icon/icons.js';
import DropDownPlanning from '../components/DropDownPlanning.jsx';
import DropDownManagement from '../components/DropDownManagement.jsx';

import SidebarLinkGroup from './SidebarLinkGroup';

function NavBar({ sidebarOpen, setSidebarOpen }) {
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
        className={`fixed inset-0 bg-slate-900  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden='true'
      ></div>

      {/* Sidebar */}
      <div
        id='sidebar'
        ref={sidebar}
        className={`flex flex-col absolute lg:relative z-40 lg:z-10  left-0 top-0 lg:translate-x-0 transform md:h-screen lg:h-16 no-scrollbar lg:w-full bg-slate-800 lg:bg-white p-4 transition-all duration-200 ease-in-out lg:mb-10 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className='mb-10 lg:mb-0 sm:px-2'>
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
        </div>

        {/* Links */}
        <div>
          {/* Pages group */}
          <div className='lg:flex lg:space-x-10'>
            <ul className='lg:flex lg:items-center'>
              {/* Dashboard */}

              <section className='flex md:invisible lg:visible'>
                <NavLink
                  className='font-medium text-sm flex items-center justify-center py-1 px-3 text-slate-600 hover:text-slate-800 space-x-2 '
                  to='/mp-pro/'
                >
                  {({ isActive }) => (
                    <>
                      <figure className='flex items-center'>
                        <svg className='shrink-0 h-6 w-6' viewBox='0 0 24 24'>
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
                      <span>Dashboard</span>
                    </>
                  )}
                </NavLink>
              </section>

              <SidebarLinkGroup
                activecondition={
                  pathname === '/mp-pro/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        to='#0'
                        className={` text-slate-200 lg:text-slate-900 hover:text-white lg:hover:text-slate-400 truncate transition duration-150 ${
                          (pathname === '/mp-pro/' ||
                            pathname.includes('dashboard')) &&
                          'hover:text-slate-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between '>
                          <div className='flex items-center'>
                            <svg
                              className='shrink-0 h-6 w-6'
                              viewBox='0 0 24 24'
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes('ecommerce') &&
                                  'text-indigo-300'
                                }`}
                                d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z'
                              />
                              <path
                                className={`fill-current text-slate-700 ${
                                  pathname.includes('ecommerce') &&
                                  '!text-indigo-600'
                                }`}
                                d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z'
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes('ecommerce') &&
                                  'text-primary'
                                }`}
                                d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Dashboard
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
                      </Link>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400  lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Main
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dashboard/analytics'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Analytics
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dashboard/fintech'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Fintech
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
            {/* PLANNING */}
            <ul className='lg:flex lg:items-center space-x-10'>
              <section className='flex md:invisible lg:visible'>
                <DropDownPlanning
                  nameDropDown='Planeación'
                  opcion1='Planeaciones'
                  opcion2='Capacidades'
                  opcion3='Grupos'
                  opcion4='Calendario'
                />
              </section>
              <SidebarLinkGroup
                activecondition={
                  pathname === '/mp-pro/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        to='#0'
                        className={` text-slate-200 lg:text-slate-900 hover:text-white lg:hover:text-slate-400 truncate transition duration-150 ${
                          (pathname === '/mp-pro/' ||
                            pathname.includes('dashboard')) &&
                          'hover:text-slate-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between '>
                          <div className='flex items-center'>
                            <svg
                              className='shrink-0 h-6 w-6'
                              viewBox='0 0 24 24'
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  (pathname === '/mp-pro/' ||
                                    pathname.includes('dashboard')) &&
                                  '!text-primary'
                                }`}
                                d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z'
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  (pathname === '/mp-pro/' ||
                                    pathname.includes('dashboard')) &&
                                  'text-secondary'
                                }`}
                                d='M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z'
                              />
                              <path
                                className={`fill-current text-slate-400 ${
                                  (pathname === '/mp-pro/' ||
                                    pathname.includes('dashboard')) &&
                                  'text-white'
                                }`}
                                d='M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Aministración
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
                      </Link>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400  lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Main
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dashboard/analytics'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Analytics
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dashboard/fintech'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Fintech
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
            <ul className='lg:flex lg:items-center space-x-10'>
              <section className='flex md:invisible lg:visible'>
                <DropDownManagement
                  nameDropDown='Administración'
                  opcion1='Usuarios'
                  opcion2='Crear cuenta'
                />
              </section>
              <SidebarLinkGroup
                activecondition={
                  pathname === '/mp-pro/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        to='#0'
                        className={` text-slate-200 lg:text-slate-900 hover:text-white lg:hover:text-slate-400 truncate transition duration-150 ${
                          (pathname === '/mp-pro/' ||
                            pathname.includes('dashboard')) &&
                          'hover:text-slate-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between '>
                          <div className='flex items-center'>
                            <svg
                              className='shrink-0 h-6 w-6'
                              viewBox='0 0 24 24'
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes('ecommerce') &&
                                  'text-indigo-300'
                                }`}
                                d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z'
                              />
                              <path
                                className={`fill-current text-slate-700 ${
                                  pathname.includes('ecommerce') &&
                                  '!text-indigo-600'
                                }`}
                                d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z'
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes('ecommerce') &&
                                  'text-primary'
                                }`}
                                d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Dashboard
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
                      </Link>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400  lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Main
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dashboard/analytics'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Analytics
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dashboard/fintech'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Fintech
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* E-Commerce */}
            </ul>
            <ul className='lg:flex lg:items-center space-x-10'>
              {/* Dashboard */}
              <section className='flex md:invisible lg:visible'>
                <NavLink
                  className='font-medium text-sm flex items-center justify-center py-1 px-3 text-slate-600 hover:text-slate-800 space-x-2 '
                  to='/mp-pro/state-system/'
                >
                  {({ isActive }) => (
                    <>
                      <figure className='flex items-center'>
                        <svg className='shrink-0 h-6 w-6' viewBox='0 0 24 24'>
                          <svg className='shrink-0 h-6 w-6' viewBox='0 0 24 24'>
                            <path
                              className={
                                `fill-current text-slate-400 ` +
                                (isActive ? '!text-primary' : '')
                              }
                              d='M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z'
                            />
                            <path
                              className={
                                `fill-current text-slate-400 ` +
                                (isActive ? '!text-green-200' : '')
                              }
                              d='M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z'
                            />
                            <path
                              className={
                                `fill-current text-slate-400 ` +
                                (isActive ? '!text-green-700' : '')
                              }
                              d='M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z'
                            />
                          </svg>
                        </svg>
                      </figure>
                      <span>Estado del sistema</span>
                    </>
                  )}
                </NavLink>
              </section>
              <SidebarLinkGroup
                activecondition={
                  pathname === '/mp-pro/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        to='#0'
                        className={` text-slate-200 lg:text-slate-900 hover:text-white lg:hover:text-slate-400 truncate transition duration-150 ${
                          (pathname === '/mp-pro/' ||
                            pathname.includes('dashboard')) &&
                          'hover:text-slate-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className='flex items-center justify-between '>
                          <div className='flex items-center'>
                            <svg
                              className='shrink-0 h-6 w-6'
                              viewBox='0 0 24 24'
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes('ecommerce') &&
                                  'text-indigo-300'
                                }`}
                                d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z'
                              />
                              <path
                                className={`fill-current text-slate-700 ${
                                  pathname.includes('ecommerce') &&
                                  '!text-indigo-600'
                                }`}
                                d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z'
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes('ecommerce') &&
                                  'text-primary'
                                }`}
                                d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z'
                              />
                            </svg>
                            <span className='text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                              Dashboard
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
                      </Link>
                      <div className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/mp-pro/'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400  lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Main
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dashboard/analytics'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Analytics
                              </span>
                            </NavLink>
                          </li>
                          <li className='mb-1 last:mb-0'>
                            <NavLink
                              end
                              to='/dashboard/fintech'
                              className={({ isActive }) =>
                                'block text-slate-400 hover:text-slate-200 lg:hover:text-slate-400 lg:text-slate-500 transition duration-150 truncate ' +
                                (isActive ? '!text-primary' : '')
                              }
                            >
                              <span className='text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200'>
                                Fintech
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* E-Commerce */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
