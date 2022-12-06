import React from 'react';
import { useForm } from 'react-hook-form';
import icons from '../../images/icon/icons';

function UserFilter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form>
      <section className='grid gap-5 md:grid-cols-3 justify-center'>
        <div>
          <label className='block text-sm font-semibold mb-1' htmlFor='name'>
            Nombre
          </label>
          <input
            id='name'
            className='form-input w-full'
            type='text'
            autoComplete='off'
            {...register('name', {
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
          {errors.email && (
            <span className='text-red-500 text-sm'>{errors.email.message}</span>
          )}
        </div>
        <div>
          <label className='block text-sm font-semibold mb-1'>Rol</label>
          <select
            className='form-select w-full'
            {...register('unity_id', {
              required: {
                value: true,
                message: 'El campo es requerido',
              },
            })}
          >
            <option value=''>Administrador</option>+
            <option value=''>Master Schedule</option>
          </select>
          {errors.unity_id && (
            <span className='text-red-500 text-sm'>
              {errors.unity_id.message}
            </span>
          )}
        </div>
        <div className='flex justify-between space-x-5'>
          <button className='w-11/12 text-white font-semibold rounded mt-[26px] bg-primary'>
            Aplicar filtro
          </button>
          <button className='w-2/12 text-white font-semibold rounded mt-[26px] flex justify-center items-center border border-slate-50'>
            <img src={icons.filter} alt='Filtro' />
          </button>
        </div>
      </section>
    </form>
  );
}

export default UserFilter;
