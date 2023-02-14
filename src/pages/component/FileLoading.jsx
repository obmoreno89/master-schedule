import React from 'react';

function FileLoading(props) {
  return (
    <div
      className='animate-spin inline-block w-8 h-8 border-[6px] border-current border-t-transparent text-primary rounded-full'
      role='status'
      ariaLabel='loading'
    >
      <span className='sr-only'>Generando...</span>
    </div>
  );
}

export default FileLoading;
