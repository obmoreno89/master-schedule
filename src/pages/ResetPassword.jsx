import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icons from '../images/icon/icons';
import { useForm } from 'react-hook-form';
import AuthImage from '../images/auth-image.jpg';
import ErrorMessage from '../helpers/ErrorMessage';
import ButtonLoading from '../helpers/ButtonLoading';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsCorrect,
  selectLoading,
  emailSend,
} from '../store/slice/authSlice';

function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (data) => console.log(data);
  const isCorrect = useSelector(selectIsCorrect);
  const loading = useSelector(selectLoading);

  const clearSessionStorage = () => sessionStorage.clear();
  const emailSubmit = (data) => dispatch(emailSend(data, navigate));

  return (
    <main className='bg-white'>
      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            {/* Header */}
            <div className='flex-1'>
              <div className='flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8'>
                {/* Logo */}
                <Link
                  className='block'
                  to='/master-schedule/signin'
                  onClick={clearSessionStorage}
                >
                  <img src={icons.logoNide} alt='Logo' className='w-36' />
                </Link>
              </div>
            </div>

            <div className='max-w-sm mx-auto px-4 py-8'>
              <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                Restablece tu contraseña
              </h1>

              <form onSubmit={handleSubmit(emailSubmit)}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='email'
                    >
                      Correo electrónico{' '}
                      <span className='text-rose-500'>*</span>
                    </label>
                    <input
                      autoComplete='off'
                      className='form-input w-full'
                      type='email'
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
                </div>
                <div className='flex justify-end mt-6'>
                  {!loading ? (
                    <button
                      type='submit'
                      className='btn bg-primary hover:bg-indigo-600 text-white whitespace-nowrap'
                    >
                      Enviar link
                    </button>
                  ) : (
                    <ButtonLoading loading='Enviando' />
                  )}
                </div>
              </form>
              <footer className='pt-5 mt-6 border-t border-slate-200'>
                {isCorrect && (
                  <ErrorMessage message='El correo no se encuentra en nuestra base de datos.' />
                )}
              </footer>
            </div>
          </div>
        </div>

        <figure
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
        </figure>
      </div>
    </main>
  );
}

export default ResetPassword;
