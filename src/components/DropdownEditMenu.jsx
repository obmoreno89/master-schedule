import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function DropdownEditMenu({
  setDropdownOpen,
  dropdownOpen,
  children,
  align,
  isWeekendDay,
  ...rest
}) {
  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
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

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div {...rest}>
      <button
        ref={trigger}
        className={`${isWeekendDay ? 'text-slate-400 hover:text-slate-500' : 'text-white hover:text-slate-200'}  rounded-full -mt-2 ${
          dropdownOpen && ' text-white'
        }`}
        aria-haspopup='true'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className='sr-only'>Menu</span>
        <svg className='w-8 h-8 fill-current' viewBox='0 0 32 32'>
          <circle cx='16' cy='16' r='2' />
          <circle cx='10' cy='16' r='2' />
          <circle cx='22' cy='16' r='2' />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag='div'
        className={` origin-top-right z-10 absolute top-full w-28 bg-white h-14 border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden -mt-4 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        enter='transition ease-out duration-200 transform'
        enterStart='opacity-0 -translate-y-2'
        enterEnd='opacity-100 translate-y-0'
        leave='transition ease-out duration-200'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'
      >
        <ul
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          {children}
        </ul>
      </Transition>
    </div>
  );
}

export default DropdownEditMenu;
