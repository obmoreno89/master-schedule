import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../helpers/ButtonLoading';
import CapabilitiesCustomDatePicker from './CapabilitiesCustomDatePicker';
import {
  selectPLines,
  getProductLines,
} from '../../store/slice/capabilitiesSlice';

function CapabilitiesCustomCreateForm({
  capabilitiesPanelOpen,
  setCapabilitiesOpenPanel,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const distpatch = useDispatch();
  const ProductLineList = useSelector(selectPLines);

  const onSubmit = (data) => {
    console.log(data);
  };

  const loading = true;

  const handleButtonCreate = () => {
    return loading ? (
      <button className='btn bg-primary hover:bg-secondary hover:text-primary text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]'>
        <span className='ml-3 align-baseline'>Crear capacidad custom</span>
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

  useEffect(() => {
    distpatch(getProductLines());
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className='grid gap-5 md:grid-cols-1'>
          {/* PRODUCT LINE */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='product_line'
            >
              Lista de producto y grupo
            </label>
            <select
              className='form-select w-full'
              {...register('product_line', {
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
            {errors.product_line && (
              <span className='text-red-500 text-sm'>
                {errors.product_line.message}
              </span>
            )}
          </div>
          {/* NAME */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='name'>
              Nombre
            </label>
            <input
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('name', {
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
            {errors.name && (
              <span className='text-red-500 text-sm'>
                {errors.name.message}
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
                  value: true,
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
          {/* PLANNER CODE */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='planner_code'
            >
              Código del planificador
            </label>
            <input
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('planner_code', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.planner_code && (
              <span className='text-red-500 text-sm'>
                {errors.planner_code.message}
              </span>
            )}
          </div>
          {/* Description */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='description'
            >
              Descripción
            </label>
            <input
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('description', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
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
          {/* START DATE */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='piece_per_day'
            >
              Fecha Inicio
            </label>
            <div className=''>
              <CapabilitiesCustomDatePicker />
            </div>
          </div>
          {/* FINAL DATE */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='piece_per_day'
            >
              Fecha final
            </label>
            <div className=''>
              <CapabilitiesCustomDatePicker />
            </div>
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
      </form>
    </>
  );
}

export default CapabilitiesCustomCreateForm;
