import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../helpers/ButtonLoading';
import LineRateCustomStartDatePicker from './LineRateCustomStartDatePicker';
import LineRateCustomEndDatePicker from './LineRateCustomEndDatePicker';
import {
  LineRateCustomUpdate,
  selectLoading,
} from '../../store/slice/LineRateCustomSlice';
import {
  selectPLines,
  getProductLines,
} from '../../store/slice/BaseCapabilitiesSlice';
import { selectLineRateCustomEditData } from '../../store/slice/LineRateCustomSlice';

function LineRateCustomEditForm({
  LineRateCustomEditOpenPanel,
  setLineRateCustomEditOpenPanel,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const ProductLineList = useSelector(selectPLines);
  const loading = useSelector(selectLoading);
  const LineRateCustomEditData = useSelector(selectLineRateCustomEditData);
  const [startDate, setStartDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);

  const onSubmit = (data) => {
    const firstDate = new Date(startDate);
    const firstYear = firstDate.getFullYear();
    const firstMonth = firstDate.getMonth();
    const firstDay = firstDate.getDate();

    const endDateDate = new Date(finalDate);
    const endDateYear = endDateDate.getFullYear();
    const endDateMonth = endDateDate.getMonth();
    const endDateDay = endDateDate.getDate();
    const json = {
      start_date: `${firstYear}-${firstMonth + 1}-${firstDay}`,
      end_date: `${endDateYear}-${endDateMonth + 1}-${endDateDay}`,
      name: data.name,
      description: data.description,
      planner_code: data.planner_code,
      product_line: data.product_line,
      type_name: data.type_name,
      piece_per_day: data.piece_per_day,
      shift_per_day: data.shift_per_day,
      piece_per_hour: data.piece_per_hour,
      comments: data.comments,
    };
    dispatch(
      LineRateCustomUpdate(
        LineRateCustomEditData.id,
        json,
        setLineRateCustomEditOpenPanel,
        reset
      )
    );
  };

  const handleButtonCreate = () => {
    return !loading ? (
      <button className='btn bg-primary hover:bg-green-500 text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]'>
        <span className='ml-3 align-baseline'>Editar capacidad custom</span>
      </button>
    ) : (
      <div>
        <ButtonLoading loading='Creando' update={true} />
      </div>
    );
  };

  useEffect(() => {
    let defaultValues = {};
    defaultValues.name = LineRateCustomEditData.name;
    defaultValues.description = LineRateCustomEditData.description;
    defaultValues.planner_code = LineRateCustomEditData.planner_code;
    defaultValues.product_line = LineRateCustomEditData?.product_line?.id;
    defaultValues.type_name = LineRateCustomEditData.type_name;
    defaultValues.piece_per_day = LineRateCustomEditData.piece_per_day;
    defaultValues.shift_per_day = LineRateCustomEditData.shift_per_day;
    defaultValues.piece_per_hour = LineRateCustomEditData.piece_per_day;
    defaultValues.comments = LineRateCustomEditData.comments;
    reset({ ...defaultValues });
  }, [reset, LineRateCustomEditOpenPanel]);

  useEffect(() => {
    dispatch(getProductLines());
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
              {LineRateCustomEditData?.start_date && (
                <LineRateCustomStartDatePicker
                  setStartDate={setStartDate}
                  firstDate={LineRateCustomEditData?.start_date}
                  create={false}
                />
              )}
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
              {LineRateCustomEditData?.end_date && (
                <LineRateCustomEndDatePicker
                  setFinalDate={setFinalDate}
                  finalDate={LineRateCustomEditData?.end_date}
                  create={false}
                />
              )}
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

export default LineRateCustomEditForm;
