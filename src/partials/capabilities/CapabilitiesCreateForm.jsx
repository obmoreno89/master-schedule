import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductLines,
  selectLoading,
  selectPLines,
} from '../../store/slice/capabilitiesSlice';

function CapabilitiesCreateForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const ProductLineList = useSelector(selectPLines);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    getProductLines();
  }, []);

  const handleButtonCreate = () => {
    return !loading ? (
      <button className='btn bg-primary hover:bg-secondary hover:text-primary text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]'>
        <span className='ml-3 align-baseline'>Crear capacidad</span>
      </button>
    ) : (
      <div>
        <ButtonLoading loading='Creando' update={true} />
      </div>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className='grid gap-5 md:grid-cols-1'>
          {/* NAME */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='first_name'
            >
              Lista de producto y grupo
            </label>
            <select
              className='form-select w-full'
              {...register('role', {
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
            {errors.role && (
              <span className='text-red-500 text-sm'>
                {errors.role.message}
              </span>
            )}
          </div>
        </section>
        <div className='mt-10 flex justify-center'>{handleButtonCreate()}</div>
      </form>
    </>
  );
}

export default CapabilitiesCreateForm;
