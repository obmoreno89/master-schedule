import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import icons from '../../../images/icon/icons';

function CapabilitiesGroupPanelTableItem() {
  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form>
        <section className='grid gap-5 md:grid-cols-1'>
          {/* NAME */}
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
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>
          {/* LAST NAME */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='name'>
              Apellido
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
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>
          {/* EMAIL */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='name'>
              Email
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
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.email && (
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>
          {/* PASSWORD */}
          <div className='relative'>
            <label
              className='block text-sm font-medium mb-1'
              htmlFor='password'
            >
              Contraseña
            </label>

            <div className='focus-within:text-primary '>
              <input
                maxLength='35'
                className='form-input w-full'
                type={eye ? 'text' : 'password'}
                autoComplete='off'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />

              <section className='relative '>
                <button
                  type='button'
                  className='absolute inset-2 -top-7 left-auto flex items-center'
                >
                  {eye ? (
                    <img
                      onClick={toggleEye}
                      src={icons.openEye}
                      alt='Ojo abierto'
                    />
                  ) : (
                    <img
                      onClick={toggleEye}
                      src={icons.closedEye}
                      alt='Ojo cerrado'
                    />
                  )}
                </button>
              </section>
            </div>
            {errors.password && (
              <span className='text-red-500 text-sm'>
                {errors.password.message}
              </span>
            )}
          </div>
          {/* NMC */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='name'>
              NMC
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
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>
          {/* PHONE */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='name'>
              Telefono
            </label>
            <input
              id='name'
              className='form-input w-full'
              type='number'
              autoComplete='off'
              {...register('name', {
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
            {errors.email && (
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>
          {/* POSITION */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='name'>
              Posición
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
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>
          {/* ROL */}
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
          <button className='h-12 rounded bg-primary flex justify-center items-center text-white font-semibold mb-5'>
            Actualizar usuario
          </button>
        </section>
      </form>
    </>
  );
}

export default CapabilitiesGroupPanelTableItem;
