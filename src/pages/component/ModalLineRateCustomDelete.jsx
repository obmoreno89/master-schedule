import React from 'react';
import ModalBlank from '../../components/ModalBlank';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLineRateCustomDeleteData,
  LineRateCustomDelete,
} from '../../store/slice/LineRateCustomSlice';

function ModalLineRateCustomDelete({
  openModalLineRateCustomDelete,
  setOpenModalLineRateCustomDelete,
}) {
  const dispatch = useDispatch();
  const LineRateCustomDeleteData = useSelector(selectLineRateCustomDeleteData);

  return (
    <ModalBlank
      id='success-modal'
      modalOpen={openModalLineRateCustomDelete}
      SetModalOpen={setOpenModalLineRateCustomDelete}
    >
      <div className='p-5 flex space-x-4'>
        <div>
          {/* Modal header */}
          <div className='mb-2 flex justify-between items-center'>
            <div className='text-lg font-bold text-slate-800 w-96'>
              ¿Estas seguro de eliminar la siguiente capacidad{' '}
              {LineRateCustomDeleteData?.product_line?.name} ?
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenModalLineRateCustomDelete(false);
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
                Esta acción no se puede revertir, estás a punto de eliminar el
                la capacidad custom y todos sus datos asociados.
              </p>
            </div>
          </div>
          {/* Modal footer */}
          <div className='flex justify-center items-center'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(LineRateCustomDelete(LineRateCustomDeleteData.id));
                setOpenModalLineRateCustomDelete(false);
              }}
              className='btn-lg bg-red-500 font-semibold text-white w-full'
            >
              Eliminar capacidad custom
            </button>
          </div>
        </div>
      </div>
    </ModalBlank>
  );
}

export default ModalLineRateCustomDelete;
