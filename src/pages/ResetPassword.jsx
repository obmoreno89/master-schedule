import React, { useEffect } from 'react';
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
  emailSend,
  revertAll,
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

  useEffect(() => {
    dispatch(revertAll());
  }, []);

  const clearSessionStorage = () => {
    sessionStorage.clear();
    dispatch(setIsCorrect(false));
  };
  const emailSubmit = (data) => dispatch(emailSend(data, navigate));

  const handleErrorMsg = () => {
    return (
      <>
        {isCorrect?.state === true && isCorrect?.code === 500 && (
          <ErrorMessage
            message='
              Error de servidor. Por favor vuelva a intentarlo más tarde.'
          />
        )}
        {isCorrect?.state === true && isCorrect?.code === 400 && (
          <ErrorMessage
            message='
            El correo no se encuentra en nuestra base de datos.'
          />
        )}
        {isCorrect?.state === true && isCorrect?.code === 401 && (
          <ErrorMessage
            message='
            El correo no se encuentra en nuestra base de datos.'
          />
        )}
        {isCorrect?.state === true && isCorrect?.code === 404 && (
          <ErrorMessage
            message='
            Error de servidor. Por favor vuelva a intentarlo más tarde.'
          />
        )}
      </>
    );
  };

  return (
    <main className='bg-white'>
      <div className='relative md:flex'>
        {/* Content */}
        <div className='md:w-1/2'>
          <div className='min-h-screen h-full flex flex-col after:flex-1'>
            {/* Header */}
            <div className='flex-1 w-[29rem] mx-auto'>
              <div className='flex items-center justify-between h-16'>
                <Link
                  className='relative flex justify-between w-full items-center'
                  to='/mp-pro/signin'
                  onClick={clearSessionStorage}
                >
                  <figure className='relative flex justify-between w-full items-center mt-10'>
                    <img src={icons.logoNide} alt='Logo' className='w-36' />
                    {/* <div>
                      <img src={icons.logoMotors} alt='logo' className='w-14' />
                    </div> */}
                  </figure>
                </Link>
              </div>
            </div>

            <div className='mx-auto w-[29rem]'>
              <h1 className='text-3xl text-slate-800 font-semibold w-[80%]'>
                Ingresa tu correo electrónico
              </h1><span className='text-sm text-[#646C7D] block -mt-1'>Enviaremos un link de recuperación al correo que ingreses</span>

              <form onSubmit={handleSubmit(emailSubmit)}>
                <div>
                  <div className='mt-7'>
                    <label
                      className='block text-sm font-semibold mb-1 text-black'
                      htmlFor='email'
                    >
                      Correo:
                    </label>
                    <input
                      autoComplete='off'
                      className='form-input w-full h-12'
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
                <div className='flex justify-end mt-8'>
                  {!loading ? (
                    <button
                      type='submit'
                      className='btn bg-primary hover:bg-secondary hover:text-primary text-white font-bold whitespace-nowrap w-full h-12'
                    >
                      Enviar link de recuperación
                    </button>
                  ) : (
                    <ButtonLoading loading='Enviando' />
                  )}
                </div>
              </form>
              <footer className='pt-5 mt-6'>
                {handleErrorMsg()}
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
