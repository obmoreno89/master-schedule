import React from 'react';
import DemandPlanningReportTableItem from './DemandPlanningReportTableItem';
import icons from '../../../images/icon/icons';

function DemandPlanningReportTable() {
  return (
    <>
      <section className='mb-5 flex justify-between'>
        <div className='mb-4 sm:mb-0'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Informes de planificación de la demanda
          </h1>
        </div>
      </section>
      <section className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
        <DemandPlanningReportTableItem />
      </section>
      <div className='flex justify-end py-5'>
        <button className='border border-slate-300 rounded w-64 h-12 text-base font-semibold mr-6'>
          Cancelar
        </button>
        <button
          className={`w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary `}
        >
          <span className='my-auto'>Continuar</span>

          <img
            src={icons.arrowRight}
            alt='icon-arrow-right'
            className='my-auto ml-3 text-white'
          />
        </button>
      </div>
    </>
  );
}

export default DemandPlanningReportTable;
