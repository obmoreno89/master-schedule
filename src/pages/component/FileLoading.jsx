import React from 'react';

function FileLoading() {
  return (
    <div
      className='animate-spin inline-block w-8 h-8 border-[6px] border-current border-t-transparent text-primary rounded-full'
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Generando...</span>
    </div>
  );
}

export default FileLoading;
