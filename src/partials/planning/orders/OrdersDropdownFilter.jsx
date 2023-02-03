import { useState, useRef, useEffect } from 'react';
import Transition from '../../../utils/Transition';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDataFiltered,
  getFilterOptions,
  selectFilterOptions,
  selectOrgFiltered,
  setDataFiltered,
  setOrgFiltered,
} from '../../../store/slice/ordersPlannedSlice';

function OrdersDropdownFilter({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterOptions);
  const orgFiltered = useSelector(selectOrgFiltered);

  useEffect(() => {
    dispatch(getFilterOptions());
  }, []);

  const handleChange = (org) => {
    if (orgFiltered === org) {
      dispatch(setOrgFiltered(null));
    } else {
      dispatch(setOrgFiltered(org));
    }
  };

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
            Filtrar por org
          </div>
          <ul className='mb-4'>
            {filter?.map((org, index) => (
              <li className='py-1 px-3' key={index}>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                    value={org.org}
                    checked={orgFiltered === org.org}
                    onChange={() => handleChange(org.org)}
                  />
                  <span className='text-sm font-medium ml-2'>{org?.org}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className='py-2 px-3 border-t border-slate-200 bg-slate-50'>
            {orgFiltered !== null ? (
              <ul className='flex items-center justify-between'>
                <li>
                  <button
                    className='btn-xs bg-primary hover:bg-slate-400 text-white'
                    onClick={() => {
                      dispatch(setDataFiltered([]));
                      dispatch(getDataFiltered(orgFiltered));
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
                      dispatch(setDataFiltered([]));
                      dispatch(setOrgFiltered(null));
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

export default OrdersDropdownFilter;