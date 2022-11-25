import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icons from '../images/icon/icons';
import { useForm } from 'react-hook-form';
import AuthImage from '../images/auth-image.jpg';
import ErrorMessage from '../helpers/ErrorMessage';
import ButtonLoading from '../helpers/ButtonLoading';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsCorrect,
  selectIsCorrect,
  selectLoading,
  codeSend,
} from '../store/slice/authSlice';

function VerificationPassword() {
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

  const clearSessionStorage = () => {
    sessionStorage.clear();
    dispatch(setIsCorrect(false));
  };
  const userEmail = sessionStorage.getItem('email');
  const code = sessionStorage.getItem('code');

  const codeSubmit = (data) => dispatch(codeSend(data, navigate));

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
              <article>
                <h1 className='text-3xl text-slate-800 font-bold mb-6'>
                  Verifica el codigo
                  <p className='font-normal text-sm'>
                    Ingresa el código que te hicimos llegar al correo
                    electrónico <span className='font-bold'>{userEmail}</span>
                  </p>
                  <span className='text-sm text-red-500'>{code}</span>
                </h1>
              </article>

              <form onSubmit={handleSubmit(codeSubmit)}>
                <div className='space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='email'
                    >
                      Codigo de verificación{' '}
                      <span className='text-rose-500'>*</span>
                    </label>
                    <input
                      autoComplete='off'
                      className='form-input w-full'
                      type='text'
                      {...register('user_code', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                        // pattern: {
                        //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        //   message: 'El formato no es correcto',
                        // },
                      })}
                    />
                    {errors.user_code && (
                      <span className='text-red-500 text-sm'>
                        {errors.user_code.message}
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
                  <ErrorMessage message='El código es invalido, verifica que el codigo de verificación sea el correcto.' />
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

export default VerificationPassword;
