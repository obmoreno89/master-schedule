import React from 'react';

function FullLoading() {
  return (
    <>
      <div className='flex justify-center relative top-10'>logo</div>
      <div className='flex flex-col space-y-6 items-center justify-center min-h-screen'>
        <div
          style={{ borderTopColor: 'transparent' }}
          className='w-8 h-8 border-4 border-primary rounded-full animate-spin'
        ></div>
        <div className='flex flex-col justify-center items-center'>
          <p className='ml-2 animate-pulse'>Generando planeación</p>
          <p className=''>Esto puede demorar algunos segundos...</p>
        </div>
      </div>
    </>
  );
}

export default FullLoading;
