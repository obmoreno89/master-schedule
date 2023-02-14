import React from 'react';
import ModalBlank from '../../components/ModalBlank';
import FileLoading from './FileLoading';
import { useDispatch, useSelector } from 'react-redux';

function ModalMinMaxExport({
  modalMinMaxExportOpen,
  setModalMinMaxExportOpen,
}) {
  const dispatch = useDispatch();

  return (
    <ModalBlank
      id='success-modal'
      modalOpen={modalMinMaxExportOpen}
      setModalOpen={setModalMinMaxExportOpen}
    >
      <div className='p-5 flex space-x-4 justify-center'>
        <div className='w-full'>
          {/* Modal header */}
          <div className='mb-8 flex justify-between items-center'>
            <div className='text-lg font-bold text-slate-800'>hola</div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalMinMaxExportOpen(false);
              }}
            >
              <svg
                className='w-5 h-5 fill-black group-hover:fill-slate-600 pointer-events-none'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
              </svg>
            </button>
          </div>
          {/* Modal content */}
          <div className='text-sm mb-10'>
            <div className='space-y-2 flex flex-col justify-center items-center'>
              <FileLoading />
              <p>Generando archivo...</p>
            </div>
          </div>
          {/* Modal footer */}
          <div className='flex justify-center items-center'>
            <button className='btn-lg bg-red-500 font-semibold text-white w-full'>
              Descargar archivo
            </button>
          </div>
        </div>
      </div>
    </ModalBlank>
  );
}

export default ModalMinMaxExport;
