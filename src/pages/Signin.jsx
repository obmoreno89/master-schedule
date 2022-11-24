import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icons from '../images/icon/icons';
import { useForm } from 'react-hook-form';
import AuthImage from '../images/auth-image.jpg';
import ButtonLoading from '../helpers/ButtonLoading';
import ErrorMessage from '../helpers/ErrorMessage';
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
  const dispatch = useDispatch();
  const { loading, errorLogin } = useSelector((state) => state.login);

  const submit = (data) => console.log(data);

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
        if (json.status_code === 202) {
          dispatch(startLoading());
          setTimeout(() => {
            localStorage.setItem('token', json.token);
            localStorage.setItem('id', json.id);
            localStorage.setItem('first_name', json.first_name);
            localStorage.setItem('email', json.email);
            navigate('/master-schedule/');
            dispatch(finishLoading());
          }, 1000);
        } else {
          dispatch(handleErrorLogin());
          setTimeout(() => {
            dispatch(handleErrorLoginClosed());
          }, 3000);
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
                <figure className='block'>
                  <img src={icons.logoNide} alt='Logo' className='w-36' />
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
                      to='/master-schedule/reset-password'
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
                  <ErrorMessage
                    message=' Credenciales Incorrectas, por favor de verificar el
                usuario o contraseña.'
                  />
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
