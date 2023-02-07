import React from 'react';
import DemandPlanningReportTableItem from './DemandPlanningReportTableItem';

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
    </>
  );
}

export default DemandPlanningReportTable;
