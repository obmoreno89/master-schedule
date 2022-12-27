import React from 'react';

function KpiSkeletonLoading() {
  return (
    <>
      <section className='animate-pulse inline-block align-bottom rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8 bg-slate-100'>
        <div className='p-7'>
          <div className='sm:flex sm:items-start'>
            <div className='text-center sm:mt-0 sm:ml-2 sm:text-left space-y-3'>
              <div className='h-3 w-[200px] bg-slate-500 rounded text-sm leading-6 font-medium text-gray-400'></div>
              <div className='h-3 w-[150px] bg-slate-500 rounded text-sm leading-6 font-medium text-gray-400'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KpiSkeletonLoading;
