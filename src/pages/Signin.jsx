import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../images/icon/icons';
import { useForm } from 'react-hook-form';

import AuthImage from '../images/auth-image.jpg';

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [eye, setEye] = useState(false);

  const toggleEye = () => setEye(!eye);

  const submit = (data) => console.log(data);

  return (
    <main className='bg-white'>
      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            {/* Header */}
            <div className='flex-1'>
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
                <figure className='block' to='/'>
                  <svg width='32' height='32' viewBox='0 0 32 32'>
                    <defs>
                      <linearGradient
                        x1='28.538%'
                        y1='20.229%'
                        x2='100%'
                        y2='108.156%'
                        id='logo-a'
                      >
                        <stop stopColor='#A5B4FC' stopOpacity='0' offset='0%' />
                        <stop stopColor='#A5B4FC' offset='100%' />
                      </linearGradient>
                      <linearGradient
                        x1='88.638%'
                        y1='29.267%'
                        x2='22.42%'
                        y2='100%'
                        id='logo-b'
                      >
                        <stop stopColor='#38BDF8' stopOpacity='0' offset='0%' />
                        <stop stopColor='#38BDF8' offset='100%' />
                      </linearGradient>
                    </defs>
                    <rect fill='#6366F1' width='32' height='32' rx='16' />
                    <path
                      d='M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z'
                      fill='#4F46E5'
                    />
                    <path
                      d='M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z'
                      fill='url(#logo-a)'
                    />
                    <path
                      d='M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z'
                      fill='url(#logo-b)'
                    />
                  </svg>
                </figure>
              </div>
            </div>

            <div className='max-w-sm mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Bienvenido de nuevo
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit(submit)}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='email'
                    >
                      Correo electrónico
                    </label>
                    <input
                      id='email'
                      className='form-input w-full'
                      type='email'
                      autoComplete='off'
                      {...register('email', {
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
                  <div className='relative'>
                    <label
                      className='block text-sm font-semibold mb-1'
                      htmlFor='password'
                    >
                      Contraseña:
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
                          className='absolute inset-2 -top-7 left-auto flex items-center '
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
                </div>
                <div className='flex items-center justify-between mt-6'>
                  <div className='mr-1'>
                    <Link
                      className='text-sm underline hover:no-underline'
                      to='/reset-password'
                    >
                      ¿Olvidaste la contraseña?
                    </Link>
                  </div>
                  <button
                    type='submit'
                    className='btn bg-primary hover:bg-indigo-600 text-white ml-3'
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>

              <footer className='pt-5 mt-6 border-t border-slate-200'>
                <div className='mt-5'>
                  <div className='bg-amber-100 text-amber-600 px-3 py-2 rounded'>
                    <svg
                      className='inline w-3 h-3 shrink-0 fill-current mr-2'
                      viewBox='0 0 12 12'
                    >
                      <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                    </svg>
                    <span className='text-sm'>Master schedule</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div
          className='hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2'
          aria-hidden='true'
        >
          <img
            className='object-cover object-center w-full h-full'
            src={AuthImage}
            width='760'
            height='1024'
            alt='Authentication'
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
