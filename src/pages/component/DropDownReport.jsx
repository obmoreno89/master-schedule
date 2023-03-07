import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectReportFilter,
  getReportFilter,
  selectValueFilter,
  setValueFilter,
  getDataFilter,
  setDataReload,
  selectDataReload,
  getReportList,
} from '../../store/slice/reportSlice';

function DropdownReport({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const filterList = useSelector(selectReportFilter);
  const valueFilter = useSelector(selectValueFilter);
  const load = useSelector(selectDataReload);

  useEffect(() => {
    dispatch(getReportFilter());
  }, []);

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

  const onChangeIdValueFilter = (optionId) => {
    if (valueFilter === optionId) {
      dispatch(setValueFilter(null));
    } else {
      dispatch(setValueFilter(optionId));
    }
  };

  return (
    <div className='relative inline-flex'>
      <button
        ref={trigger}
        className='border w-10 h-10 flex justify-center items-center border-borderInput hover:border-slate-300 rounded'
        aria-haspopup='true'
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className='sr-only'>Filter</span>
        <wbr />
        <svg className='w-4 h-4 fill-current' viewBox='0 0 16 16'>
          <path d='M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z' />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag='div'
        className={`origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === 'right' ? 'right-0' : '-left-60 -top-1'
        }`}
        enter='transition ease-out duration-200 transform'
        enterStart='opacity-0 -translate-y-2'
        enterEnd='opacity-100 translate-y-0'
        leave='transition ease-out duration-200'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'
      >
        <div ref={dropdown}>
          <div className='text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4'>
            Filtro por grupo
          </div>
          <ul className='mb-4'>
            <li className='py-1 px-3'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  className='form-checkbox'
                  value={0}
                  checked={valueFilter === null}
                  onChange={() => {
                    onChangeIdValueFilter(null);
                  }}
                />
                <span className='text-sm font-medium ml-2'>Mostrar todas</span>
              </label>
            </li>
            {filterList.map((group, index) => (
              <li key={index} className='py-1 px-3'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    value={group.group}
                    checked={valueFilter === group.group}
                    onChange={() => {
                      onChangeIdValueFilter(group.group);
                    }}
                  />
                  <span className='text-sm font-medium ml-2'>
                    {group.group}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <div className='py-2 px-3 border-t border-slate-200 bg-slate-50'>
            <ul className='flex items-center justify-between'>
              <li>
                <button
                  className='btn-xs bg-primary hover:bg-green-500 text-white'
                  onClick={() => {
                    setDropdownOpen(false);
                    dispatch(getDataFilter(valueFilter));
                  }}
                  onBlur={() => setDropdownOpen(false)}
                >
                  Aplicar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownReport;
