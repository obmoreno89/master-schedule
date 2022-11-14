import React from 'react';

function WelcomeBanner() {
  return (
    <div className='relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8'>
      <div className='relative'>
        <h1 className='text-2xl md:text-3xl text-slate-800 font-bold mb-1'>
          Bienvenido 👋
        </h1>
        <p>Sistema master schedule</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
