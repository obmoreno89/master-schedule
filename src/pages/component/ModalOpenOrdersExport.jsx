import React from 'react';
import ModalBlank from '../../components/ModalBlank';
import icons from '../../images/icon/icons';
import FileLoading from './FileLoading';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOpenOrdersFile,
  selectToggleOpenOrdersFile,
  setToggleOpenOrdersFile,
} from '../../store/slice/openOrdersSlice';

function ModalOpenOrdersExport({
  modalOpenOrdersExportOpen,
  setModalOpenOrdersExportOpen,
}) {
  const dispatch = useDispatch();
  const fileDownload = useSelector(selectOpenOrdersFile);
  const handleFile = useSelector(selectToggleOpenOrdersFile);

  console.log(fileDownload);

  return (
    <ModalBlank
      id='success-modal'
      modalOpen={modalOpenOrdersExportOpen}
      setModalOpen={setModalOpenOrdersExportOpen}
    >
      <div className='p-5 flex space-x-4 justify-center'>
        <div className='w-full'>
          {/* Modal header */}

          {handleFile && (
            <div className='mb-8 flex justify-between items-center'>
              <div className='text-lg font-bold text-slate-800'>
                Reporte Open Orders
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpenOrdersExportOpen(false);
                  dispatch(setToggleOpenOrdersFile(false));
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
          )}

          {/* Modal content */}
          {handleFile ? (
            <figure className='space-y-2 flex flex-col justify-center items-center mb-10'>
              <img
                className='w-20 animate-bounce'
                src={icons.fileText}
                alt='Archivo'
              />
            </figure>
          ) : (
            <div className='text-sm mb-10'>
              <div className='space-y-2 flex flex-col justify-center items-center mt-10'>
                <FileLoading />
                <p>Generando archivo...</p>
              </div>
            </div>
          )}

          {/* Modal footer */}

          {handleFile && (
            <div className='flex justify-center items-center'>
              <a href={fileDownload.doc} target='_blank'>
                {' '}
                <button className='btn-lg bg-primary font-semibold text-white'>
                  Descargar archivo
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </ModalBlank>
  );
}

export default ModalOpenOrdersExport;
