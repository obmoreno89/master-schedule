import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserFilter,
  selectFilterUser,
  setIdUserFilter,
  selectIdUserFilter,
  getDataFilter,
  setDataFilter,
} from '../store/slice/filterSlice';
import { getListHistory } from '../store/slice/planningSlice';

function DropdownFilter({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const dispatch = useDispatch();
  const filterUserList = useSelector(selectFilterUser);
  const idUserFilter = useSelector(selectIdUserFilter);

  useEffect(() => {
    dispatch(getUserFilter());
  }, []);

  const onChangeIdUserFilter = (optionId) => {
    if (idUserFilter === optionId) {
      dispatch(setIdUserFilter(null));
    } else {
      dispatch(setIdUserFilter(optionId));
    }
  };

  const nameUserFilter = sessionStorage.getItem('first_name');
  const id = sessionStorage.getItem('id');

  const filteredName = filterUserList.filter(
    (obj) => obj.user_id__first_name !== nameUserFilter
  );
  filteredName.unshift({
    user_id__id: id,
    user_id__first_name: 'Mis planeaciones',
  });

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
        className='border w-10 flex justify-center items-center border-borderInput hover:border-slate-300 rounded'
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
          align === 'right' ? 'right-0' : 'left-0'
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
            Filtro
          </div>
          <ul className='mb-4'>
            {filteredName?.map((options, index) => (
              <li className='py-1 px-3' key={index}>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    value={options.user_id__id}
                    checked={idUserFilter === options.user_id__id}
                    onChange={() => {
                      onChangeIdUserFilter(options.user_id__id);
                    }}
                  />
                  <span className='text-sm font-medium ml-2'>
                    {options.user_id__first_name} {options.user_id__last_name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <div className='py-2 px-3 border-t border-slate-200 bg-slate-50'>
            {idUserFilter > 0 ? (
              <ul className='flex items-center justify-between'>
                <li>
                  <button
                    className='btn-xs bg-primary hover:bg-slate-400 text-white'
                    onClick={() => {
                      dispatch(getDataFilter(idUserFilter, id));
                      setDropdownOpen(false);
                    }}
                    onBlur={() => setDropdownOpen(false)}
                  >
                    Aplicar
                  </button>
                </li>
                <li>
                  <button
                    className='btn-xs bg-white hover:text-slate-600 text-slate-500 hover:border-borderInput'
                    onClick={() => {
                      dispatch(getListHistory());
                      dispatch(setDataFilter([]));
                      dispatch(setIdUserFilter(null));
                      setDropdownOpen(false);
                    }}
                    onBlur={() => setDropdownOpen(false)}
                  >
                    Mostrar todas
                  </button>
                </li>
              </ul>
            ) : (
              <ul className='flex items-center justify-between'>
                <li>
                  <button
                    className='btn-xs bg-primary hover:bg-slate-400 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed '
                    disabled
                  >
                    Aplicar
                  </button>
                </li>
                <li>
                  <button
                    className='btn-xs bg-white hover:text-slate-600 text-slate-500 hover:border-borderInput disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed'
                    disabled
                    onClick={() => {
                      dispatch(getListHistory());
                      dispatch(setDataFilter([]));
                      setDropdownOpen(false);
                    }}
                    onBlur={() => setDropdownOpen(false)}
                  >
                    Mostrar todas
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFilter;
