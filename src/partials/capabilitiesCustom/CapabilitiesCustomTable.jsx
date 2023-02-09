import React, { useEffect } from 'react';
import CapabilitesCustomTableItem from './CapabilitesCustomTableItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCapabilitiesCustom,
  getCapabilitiesCustom,
} from '../../store/slice/capabilitiesCustomSlice';

function CapabilitiesCustomTable() {
  const dispatch = useDispatch();
  const capabilitiesCustomList = useSelector(selectCapabilitiesCustom);

  useEffect(() => {
    dispatch(getCapabilitiesCustom());
  }, []);

  return (
    <>
      <div className='bg-white'>
        <div className='mt-6'>
          <section className='flex justify-between mb-5'>
            <div className='mb-4 sm:mb-0'>
              <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                Capacidades Custom
              </h1>
            </div>
            <div className='flex space-x-3'>
              <input
                className='form-input w-72'
                placeholder='Buscar...'
                type='search'
              />
              <button
                type='button'
                className='btn bg-primary text-white w-54 space-x-2'
              >
                <svg
                  className='w-4 h-4 fill-current opacity-50 shrink-0'
                  viewBox='0 0 16 16'
                >
                  <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                </svg>
                <span>Crear capacidad custom</span>
              </button>
            </div>
          </section>
          <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
            <CapabilitesCustomTableItem
              capabilitiesCustomList={capabilitiesCustomList}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CapabilitiesCustomTable;
