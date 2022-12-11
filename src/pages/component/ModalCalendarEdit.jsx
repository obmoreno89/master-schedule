import React, { useState, useEffect } from 'react';
import ModalAction from '../../components/ModalAction';
import ButtonLoading from '../../helpers/ButtonLoading';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { editHoliday, selectLoading } from '../../store/slice/calendarSlice';
import { useParams } from 'react-router-dom';

function ModalCalendarEdit({
  setOpenModalCalendarEdit,
  openModalCalendarEdit,
  description,
}) {
  const dispatch = useDispatch();
  const holiday = description;

  const loading = useSelector(selectLoading);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const json = {
      description: data.description,
    };

    dispatch(editHoliday(json, reset, setOpenModalCalendarEdit));
  };

  useEffect(() => {
    let defaultValues = {};
    defaultValues.description = `${holiday}`;
    reset({ ...defaultValues });
  }, [reset]);

  return (
    <ModalAction
      id='success-modal'
      modalOpen={openModalCalendarEdit}
      setModalOpen={setOpenModalCalendarEdit}
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
              setOpenModalCalendarEdit(false);
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
                htmlFor='description'
                className='text-[14px] font-semibold leading-[17px] text-black'
              >
                Descripción
              </label>
              <input
                type='text'
                className='w-full form-input'
                {...register('description', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /[a-zA-Z]/,
                    message: 'El formato no es correcto',
                  },
                })}
              />
              {errors.description && (
                <span className='text-red-500 text-sm'>
                  {errors.description.message}
                </span>
              )}
            </div>
            <div>
              {!loading ? (
                <button
                  type='submit'
                  className='bg-primary text-white w-full h-[51px] rounded mb-6 font-semibold'
                >
                  Editar dia no laborable
                </button>
              ) : (
                <div className=' mb-6'>
                  <ButtonLoading loading='Enviando' />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </ModalAction>
  );
}

export default ModalCalendarEdit;
