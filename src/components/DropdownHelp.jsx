import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';
import icons from '../images/icon/icons';

function DropdownHelp({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    <div className='relative inline-flex'>
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center hover:bg-slate-200 transition duration-150 rounded-full ${
          dropdownOpen && 'bg-slate-200'
        }`}
        aria-haspopup='true'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className='sr-only'>Necesitas ayuda?</span>
        <img src={icons.alertCircle} alt='Circulo alerta' />
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
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
          <div className='text-xs font-semibold text-slate-600 uppercase pt-1.5 pb-2 px-4'>
            Necesitas ayuda?
          </div>
          <ul>
            <li>
              <Link
                className='font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3'
                to='#0'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg
                  className='w-3 h-3 fill-current text-slate-500 shrink-0 mr-2'
                  viewBox='0 0 12 12'
                >
                  <rect y='3' width='12' height='9' rx='1' />
                  <path d='M2 0h8v2H2z' />
                </svg>
                <span>Documentación</span>
              </Link>
            </li>
            <li>
              <Link
                className='font-medium text-sm text-gray hover:text-textHover flex items-center py-1 px-3'
                to='#0'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg
                  className='w-3 h-3 fill-current text-slate-500 shrink-0 mr-2'
                  viewBox='0 0 12 12'
                >
                  <path d='M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z' />
                </svg>
                <span>Soporte</span>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownHelp;
