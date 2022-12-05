import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../helpers/ButtonLoading';
import ErrorMessage from '../../helpers/ErrorMessage';
import SuccessMessage from '../../helpers/SuccessMessage';
import {
  getRoles,
  registerUser,
  revertAll,
  selectRoles,
  selectUserFail,
  selectUserIsOk,
  selectUserLoading,
} from '../../store/slice/usersSlice';

function RegisterUser() {
  const dispatch = useDispatch();

  const isCorrect = useSelector(selectUserIsOk);
  const isWrong = useSelector(selectUserFail);
  const loading = useSelector(selectUserLoading);
  const roles = useSelector(selectRoles);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isCorrect) {
      reset();
      setTimeout(() => dispatch(revertAll()), 5000);
    }
  }, [isCorrect]);

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  useEffect(() => {
    let defaultValues = {};
    defaultValues.password = 'generic';
    defaultValues.role = 1;
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = (data) => {
    data.role = parseInt(data.role, 10);
    dispatch(registerUser(data));
  };

  const handleButtonLogin = () => {
    return !loading ? (
      <button className='btn bg-secondary hover:bg-hover hover:text-white text-primary font-bold'>
        <svg
          className='w-4 h-4 fill-current opacity-50 shrink-0'
          viewBox='0 0 16 16'
        >
          <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
        </svg>
        <span className='ml-2'>Añadir usuario</span>
      </button>
    ) : (
      <div>
        <ButtonLoading loading='Creando' />
      </div>
    );
  };

  const handleErrorMsg = () => {
    return (
      <>
        {isWrong?.state === true && isWrong?.code === 500 && (
          <ErrorMessage
            message='
              Error de servidor. Por favor vuelva a intentarlo más tarde.'
          />
        )}
        {isWrong?.state === true && isWrong?.code === 400 && (
          <ErrorMessage
            message='
              Los datos ingresados son erróneos o el usuario ya existe.'
          />
        )}
        {isWrong?.state === true && isWrong?.code === 401 && (
          <ErrorMessage
            message='
              No tiene permisos para realizar esta acción.'
          />
        )}
      </>
    );
  };

  return (
    <section>
      <header>
        <h2 className='text-2xl text-slate-800 font-bold mb-6 text-center'>
          Registrar un nuevo usuario
        </h2>
      </header>
      <main>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className='grid gap-5 md:grid-cols-2 md:w-[70%] md:mx-auto'>
            <div>
              <label
                className='block text-sm font-medium mb-1'
                htmlFor='first_name'
              >
                Nombre: <span className='text-rose-500'>*</span>
              </label>
              <input
                id='first_name'
                className='form-input w-full'
                type='text'
                autoFocus={true}
                {...register('first_name', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              {errors.first_name && (
                <span className='text-red-500 text-sm'>
                  {errors.first_name.message}
                </span>
              )}
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='last_name'
                >
                  Apellido: <span className='text-rose-500'>*</span>
                </label>
              </div>
              <input
                id='last_name'
                className='form-input w-full'
                type='text'
                {...register('last_name', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              {errors.last_name && (
                <span className='text-red-500 text-sm'>
                  {errors.last_name.message}
                </span>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='email'>
                Email: <span className='text-rose-500'>*</span>
              </label>
              <input
                id='mandatory'
                className='form-input w-full'
                type='text'
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

            <div>
              <label
                className='block text-sm font-medium mb-1'
                htmlFor='password'
              >
                Contraseña: <span className='text-rose-500'>*</span>
              </label>

              <input
                id='password'
                className='form-input w-full'
                type='text'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              {errors.password && (
                <span className='text-red-500 text-sm'>
                  {errors.password.message}
                </span>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='nmc'>
                nmc: <span className='text-rose-500'>*</span>
              </label>

              <input
                id='nmc'
                className='form-input w-full'
                type='text'
                {...register('nmc', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              {errors.nmc && (
                <span className='text-red-500 text-sm'>
                  {errors.nmc.message}
                </span>
              )}
            </div>

            <div>
              <label
                className='block text-sm font-medium mb-1'
                htmlFor='telephone'
              >
                Teléfono: <span className='text-rose-500'>*</span>
              </label>

              <input
                id='telephone'
                className='form-input w-full'
                type='tel'
                {...register('telephone', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              {errors.telephone && (
                <span className='text-red-500 text-sm'>
                  {errors.telephone.message}
                </span>
              )}
            </div>

            <div>
              <label
                className='block text-sm font-medium mb-1'
                htmlFor='position'
              >
                Posición: <span className='text-rose-500'>*</span>
              </label>

              <input
                id='position'
                className='form-input w-full'
                type='text'
                {...register('position', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              {errors.position && (
                <span className='text-red-500 text-sm'>
                  {errors.position.message}
                </span>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium mb-1' htmlFor='role'>
                Rol:
              </label>
              <select
                id='role'
                className='form-select w-full'
                {...register('role')}
              >
                {roles.map((rol, index) => (
                  <option key={index} value={rol.id}>
                    {rol.role}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='mt-5 md:w-[70%] md:mx-auto'>
            {handleButtonLogin()}
          </div>
        </form>
      </main>
      <footer>
        {isCorrect && (
          <SuccessMessage
            message='
                  Se añadió el usuario correctamente.'
          />
        )}
        {handleErrorMsg()}
      </footer>
    </section>
  );
}

export default RegisterUser;
