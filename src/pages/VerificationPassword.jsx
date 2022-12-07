import React, { useState, useEffect } from 'react';
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
  emailSend,
} from '../store/slice/authSlice';

function VerificationPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [counter, setCounter] = useState(2);
  const [containerChange, setContainerChange] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (data) => console.log(data);
  const isCorrect = useSelector(selectIsCorrect);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (counter) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    } else if (counter === 0) {
      setContainerChange(true);
    }
  }, [counter]);

  const userEmail = sessionStorage.getItem('email');
  const newCode = { email: userEmail };
  const code = sessionStorage.getItem('code');

  const codeValue = { user_code: otp.join('') };

  const codeSubmit = () => dispatch(codeSend(codeValue, navigate));
  const emailSendReturn = (data) => dispatch(emailSend(data, navigate));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const clearSessionStorage = () => {
    sessionStorage.clear();
    dispatch(setIsCorrect(false));
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
                {/* Logo */}
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

            <div className='w-[29rem] mx-auto'>
              <article>
                <h1 className='text-3xl text-slate-800 font-semibold mb-6'>
                  Ingresa el código de recuperación
                  <p className='font-normal text-sm'>
                    Ingresa el código de 6 dígitos que enviamos a <span className='text-primary'>{userEmail}</span>
                  </p>
                  <span className='text-sm text-red-500'>{code}</span>
                </h1>
              </article>

              <form>
                <div className='space-y-4'>
                  <div className='space-x-3 mt-5 flex justify-between items-center'>
                    {otp.map((data, index) => {
                      return (
                        <input
                          className='form-input w-12 h-12 text-xl text-center font-semibold'
                          type='text'
                          name='otp'
                          maxLength='1'
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                        />
                      );
                    })}
                  </div>
                </div>
                <article className='mt-6 flex flex-col justify-center items-center'>
                  <p className='text-gray-400 text-sm font-medium text-black'>¿No lo recibiste?</p>
                  {!containerChange ? (
                    <p className='text-center text-gray-400 font-semibold'>
                      Tu código vence en: {counter} segundos
                    </p>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          emailSendReturn(newCode);
                          setContainerChange(false);
                          setCounter(2);
                        }}
                        className='text-base font-semibold text-primary hover:text-slate-500'
                      >
                        Solicitar nuevo código
                      </button>
                    </div>
                  )}
                </article>
                <div className='flex justify-end mt-8'>
                  {!loading ? (
                    <button
                      onClick={codeSubmit}
                      type='button'
                      className='btn bg-primary hover:bg-secondary hover:text-primary text-white whitespace-nowrap w-full h-12'
                    >
                      Verificar código
                    </button>
                  ) : (
                    <ButtonLoading loading='Enviando' />
                  )}
                </div>
              </form>
              <footer className='pt-5 mt-6'>
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
