import React from 'react';
import ModalBlank from '../../components/ModalBlank';

function ModalMoveTaskGantt({ setModalMoveTaskOpen, modalMoveTaskOpen }) {
  return (
    <ModalBlank
      id='success-modal'
      modalOpen={modalMoveTaskOpen}
      setModalOpen={setModalMoveTaskOpen}
    >
      <div className='p-5 flex space-x-4'>
        <div>
          {/* Modal header */}
          <div className='mb-2 flex justify-between items-center'>
            <h2 className='text-lg font-bold text-slate-800 w-72'>
              Confirmar reprogramación de ordenes
            </h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalMoveTaskOpen(false);
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
            <div className='space-y-2'>
              <p>
                La acción que has realizado, afecta a la programación futura de
                algunas ordenes, ¿deseas confirmar la acción?
              </p>
            </div>
          </div>
          {/* Modal footer */}
          <div className='flex justify-center items-center space-x-3'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalMoveTaskOpen(false);
              }}
              className='btn-lg bg-red-600 hover:bg-red-500 font-semibold text-white w-full'
            >
              Si, confirmar
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalMoveTaskOpen(false);
              }}
              className='btn-lg bg-green-600 hover:bg-green-500 font-semibold text-white w-full'
            >
              Cancelar reprogramación
            </button>
          </div>
        </div>
      </div>
    </ModalBlank>
  );
}

export default ModalMoveTaskGantt;
