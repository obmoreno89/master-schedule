import React from 'react';
import PlanningsTableItems from './PlanningsTableItems';

function PlanningsTable({ setGroupOptionsPanel }) {
  return (
    <>
      <section className='mb-5 flex justify-between'>
        <div className='mb-4 sm:mb-0'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Planeaciones
          </h1>
        </div>
        <div className='flex space-x-3'>
          <input
            className='form-input w-72'
            placeholder='Buscar...'
            type='search'
          />
          <button
            onClick={() => setGroupOptionsPanel(true)}
            type='button'
            className='btn bg-primary text-white w-54 space-x-2'
          >
            <svg
              className='w-4 h-4 fill-current opacity-50 shrink-0'
              viewBox='0 0 16 16'
            >
              <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
            </svg>
            <span>Crear planeación </span>
          </button>
        </div>
      </section>
      <section>
        <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
          <PlanningsTableItems />
        </div>
      </section>
    </>
  );
}

export default PlanningsTable;
