import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../helpers/ButtonLoading';
import {
  selectLoading,
  selectPLines,
  createCapabilities,
  revertError,
  selectErrorCapCreate,
} from '../../store/slice/capabilitiesSlice';

function CapabilitiesCreateForm({
  capabilitiesPanelOpen,
  setCapabilitiesOpenPanel,
}) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const ProductLineList = useSelector(selectPLines);
  const error = useSelector(selectErrorCapCreate);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(revertError());
      }, 4000);
    }
  }, [error]);

  const onSubmit = (data) => {
    dispatch(createCapabilities(data, setCapabilitiesOpenPanel, reset));
  };

  const handleButtonCreate = () => {
    return !loading ? (
      <button className='btn bg-primary hover:bg-secondary hover:text-white text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]'>
        <span className='ml-3 align-baseline'>Crear capacidad</span>
      </button>
    ) : (
      <div>
        <ButtonLoading loading='Creando' update={true} />
      </div>
    );
  };

  useEffect(() => {
    let defaultValues = {};
    defaultValues.p_line_id = '';
    defaultValues.type_name = '';
    defaultValues.piece_per_hour = '';
    defaultValues.shift_per_day = '';
    defaultValues.piece_per_day = '';
    defaultValues.comments = '';
    reset({ ...defaultValues });
  }, [reset, capabilitiesPanelOpen]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className='grid gap-5 md:grid-cols-1'>
          {/* NAME */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='p_line_id'
            >
              Lista de producto y grupo
            </label>
            <select
              className='form-select w-full'
              {...register('p_line_id', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            >
              <option value=''>Selecciona...</option>
              {ProductLineList.map((data, index) => (
                <option key={index} value={data.id}>
                  {data.name} - {data.group.name}
                </option>
              ))}
            </select>
            {errors.p_line_id && (
              <span className='text-red-500 text-sm'>
                {errors.p_line_id.message}
              </span>
            )}
          </div>
          {/* TYPE */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='type_name'
            >
              Tipo
            </label>
            <input
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('type_name', {
                required: {
                  value: false,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.type_name && (
              <span className='text-red-500 text-sm'>
                {errors.type_name.message}
              </span>
            )}
          </div>
          {/* PZ/HOURS */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='piece_per_hour'
            >
              Piezas por hora
            </label>
            <input
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('piece_per_hour', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /[0-9]/,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.piece_per_hour && (
              <span className='text-red-500 text-sm'>
                {errors.piece_per_hour.message}
              </span>
            )}
          </div>
          {/* SHIFT/DAY */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='shift_per_day'
            >
              Turno por dia
            </label>
            <input
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('shift_per_day', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /[0-9]/,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.shift_per_day && (
              <span className='text-red-500 text-sm'>
                {errors.shift_per_day.message}
              </span>
            )}
          </div>
          {/* PIECE/DAY */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='piece_per_day'
            >
              Piezas por dia
            </label>
            <input
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('piece_per_day', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /[0-9]/,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.piece_per_day && (
              <span className='text-red-500 text-sm'>
                {errors.piece_per_day.message}
              </span>
            )}
          </div>

          {/* COMMENTS */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='comments'
            >
              Comentarios
            </label>
            <input
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('comments', {
                required: {
                  value: false,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.comments && (
              <span className='text-red-500 text-sm'>
                {errors.comments.message}
              </span>
            )}
          </div>
        </section>
        <div className='mt-10 flex justify-center'>{handleButtonCreate()}</div>
        {error && (
          <span className='text-red-500 text-sm font-bold'>
            Ocurrió un error. Por favor vuelva a intentarlo.
          </span>
        )}
      </form>
    </>
  );
}

export default CapabilitiesCreateForm;
