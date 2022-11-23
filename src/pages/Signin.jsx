import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icons from '../images/icon/icons';
import { useForm } from 'react-hook-form';
import AuthImage from '../images/auth-image.jpg';
import ButtonLoading from '../helpers/ButtonLoading';
import { useDispatch, useSelector } from 'react-redux';
import {
  startLoading,
  finishLoading,
  handleErrorLogin,
  handleErrorLoginClosed,
} from '../store/auth/authSlice';

function Signin() {
  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);
  const submit = (data) => console.log(data);
  const dispatch = useDispatch();
  const { loading, errorLogin } = useSelector((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginUser = (dataUser) => {
    fetch('http://44.211.175.241/api/auth/login/', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.msg) {
          dispatch(startLoading());
          console.log(json);
          setTimeout(() => {
            localStorage.setItem('token', json.token);
            localStorage.setItem('id', json.id);
            localStorage.setItem('first_name', json.first_name);
            navigate('/master-schedule/');
            dispatch(finishLoading());
          }, 1000);
        } else {
          dispatch(handleErrorLogin());
          setTimeout(() => {
            dispatch(handleErrorLoginClosed());
          }, 2000);
        }
      });
  };

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

            <div className='w-96 mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Bienvenido de nuevo
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit(loginUser)}>
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
                  {!loading ? (
                    <button
                      type='submit'
                      className='btn bg-primary hover:bg-secondary hover:text-primary text-white ml-3'
                    >
                      Iniciar sesión
                    </button>
                  ) : (
                    <ButtonLoading loading='Ingresando' />
                  )}
                </div>
              </form>

              <footer className='pt-5 mt-6 border-t border-slate-200'>
                {errorLogin && (
                  <div className=' mt-5'>
                    <div className='bg-red-100 text-red-600 px-2 py-2 rounded flex'>
                      <svg
                        className='w-3 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3'
                        viewBox='0 0 16 16'
                      >
                        <path d='M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z' />
                      </svg>
                      <span className=' text-sm'>
                        Credenciales Incorrectas, por favor de verificar el
                        usuario o contraseña.
                      </span>
                    </div>
                  </div>
                )}
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
