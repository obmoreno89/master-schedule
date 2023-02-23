import React from 'react';
import ModalBlank from '../../components/ModalBlank';
import icons from '../../images/icon/icons';

function ModalOracleExport({ modalOracleExport, setModalOracleExport }) {
  return (
    <ModalBlank
      id='success-modal'
      modalOpen={modalOracleExport}
      setModalOpen={setModalOracleExport}
    >
      <div className='p-5 flex space-x-4 justify-center'>
        <div className='w-full'>
          {/* Modal header */}
          <div className='mb-8 flex justify-between items-center'>
            <p className='text-lg font-bold text-slate-800 w-[300px]'>
              Exportar archivos de sincronización a Oracle
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalOracleExport(false);
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
          <article className='flex flex-col space-y-7 mb-5'>
            <section className='flex space-x-3'>
              <div className='mt-1'>
                <a
                  href='http://35.174.106.95/api/reports/export-csv?doc_type=SSD'
                  target='_blank'
                >
                  <img className='w-8' src={icons.download} alt='Descargar' />
                </a>
              </div>
              <div>
                <h2 className='text-black font-semibold text-lg'>SSD Update</h2>
                <p className='text-sm text-textTableHeader'>
                  Actualiza la Schedule Ship Date de Open Orders en Oracle
                </p>
              </div>
            </section>

            <section className='flex space-x-3'>
              <div className='mt-1'>
                <a
                  href='http://35.174.106.95/api/reports/export-csv?doc_type=IR'
                  target='_blank'
                >
                  <img className='w-8' src={icons.download} alt='Descargar' />
                </a>
              </div>
              <div>
                <h2 className='text-black font-semibold text-lg'>
                  IR creation
                </h2>
                <p className='text-sm text-textTableHeader'>
                  Crear las Internal Requisition en Oracle
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </ModalBlank>
  );
}

export default ModalOracleExport;
