import React from 'react';
import ModalBlank from '../../components/ModalBlank';
import { useForm } from 'react-hook-form';
import DatePicker from '../../components/Datepicker';

function ModalCalendar({ setOpenModalCalendar, openModalCalendar }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ModalBlank
      id='success-modal'
      modalOpen={openModalCalendar}
      SetModalOpen={setOpenModalCalendar}
    >
      <div className='pt-[20px] pr-[7px] pb-[20px] pl-[24px] border-slate-200'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-slate-800 text-[24px]'>
            Agregar dia no laborable
          </div>
          <button
            className='text-slate-400 hover:text-slate-500 mt-3'
            onClick={(e) => {
              e.stopPropagation();
              setOpenModalCalendar(false);
            }}
          >
            <div className='sr-only'>Close</div>
            <svg width='32' height='32' viewBox='0 0 24 24'>
              <path d='M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z' />
            </svg>
          </button>
        </div>
      </div>
      <div className='px-5 pt-4 pb-1'>
        <div className='text-sm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-2 mb-5'>
              <label
                htmlFor='gName'
                className='text-[14px] font-semibold leading-[17px]'
              >
                Descripción
              </label>
              <input
                type='text'
                className='w-full form-input'
                {...register('gName')}
              />
            </div>
            <div className='space-y-2 mb-5'>
              <DatePicker />
            </div>
            <div>
              <button
                type='submit'
                className='bg-primary text-white w-full h-[51px] rounded mb-6 font-semibold'
              >
                Agregar dia no laborable
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalBlank>
  );
}

export default ModalCalendar;
