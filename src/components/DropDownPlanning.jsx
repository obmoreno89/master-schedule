import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Transition from '../utils/Transition';

function DropDownPlanning({
  align,
  nameDropDown,
  opcion1,
  opcion2,
  opcion3,
  opcion4,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const history = useLocation();

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const handdleDropDown = () => setDropdownOpen(!dropdownOpen);

  const handleIsActive = () => {
    const pathname = history.pathname;
    if (pathname === '/mp-pro/planning/') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    handleIsActive();
  }, []);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <div className='relative inline-flex'>
        <figure className='flex items-center'>
          <svg className='shrink-0 h-6 w-6' viewBox='0 0 24 24'>
            <path
              className={
                `fill-current text-slate-600 ` +
                (isActive ? '!text-green-200' : '')
              }
              d='M1 1h22v23H1z'
            />
            <path
              className={
                `fill-current text-slate-400 ` +
                (isActive ? '!text-slate-500' : '')
              }
              d='M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z'
            />
          </svg>
        </figure>
        <button
          ref={trigger}
          className='inline-flex justify-center items-center group'
          aria-haspopup='true'
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
          {/* <img
          className='w-8 h-8 rounded-full'
          src={UserAvatar}
          width='32'
          height='32'
          alt='User'
        /> */}
          <div className='flex items-center truncate'>
            <span className='truncate ml-2 text-sm font-medium group-hover:text-slate-800'>
              {nameDropDown}
            </span>
            <svg
              className='w-3 h-3 shrink-0 ml-1 fill-current text-slate-400'
              viewBox='0 0 12 12'
            >
              <path d='M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z' />
            </svg>
          </div>
        </button>

        <Transition
          className={`origin-top-right z-10 absolute top-full min-w-auto bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
          show={dropdownOpen}
          enter='transition ease-out duration-200 transform'
          enterStart='opacity-0 -translate-y-2'
          enterEnd='opacity-100 translate-y-0'
          leave='transition ease-out duration-200'
          leaveStart='opacity-100'
          leaveEnd='opacity-0'
        >
          <div
            ref={dropdown}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            <ul>
              <li>
                <Link
                  className='font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3'
                  to='/mp-pro/planning/'
                  onClick={handdleDropDown}
                >
                  {opcion1}
                </Link>
              </li>
              <li>
                <Link
                  className='font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3'
                  to=''
                  onClick={handdleDropDown}
                >
                  {opcion2}
                </Link>
              </li>
              <li>
                <Link
                  className='font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3'
                  to=''
                  onClick={handdleDropDown}
                >
                  {opcion3}
                </Link>
              </li>
              <li>
                <Link
                  className='font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3'
                  to=''
                  onClick={handdleDropDown}
                >
                  {opcion4}
                </Link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </>
  );
}

export default DropDownPlanning;
