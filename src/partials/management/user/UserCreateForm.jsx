import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../../helpers/ButtonLoading';
import ErrorMessage from '../../../helpers/ErrorMessage';
import SuccessMessage from '../../../helpers/SuccessMessage';
import icons from '../../../images/icon/icons';
import {
  getRoles,
  registerUser,
  revertAll,
  selectRoles,
  selectUserFail,
  selectUserIsOk,
  selectUserLoading,
} from '../../../store/slice/usersSlice';

function UserCreateForm({ usersCreateOpen, setUsersCreateOpen }) {
  const dispatch = useDispatch();

  const isCorrect = useSelector(selectUserIsOk);
  const isWrong = useSelector(selectUserFail);
  const loading = useSelector(selectUserLoading);
  const roles = useSelector(selectRoles);
  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   if (isCorrect) {
  //     reset();
  //     setTimeout(() => dispatch(revertAll()), 5000);
  //   }
  // }, [isCorrect]);

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  useEffect(() => {
    if (!usersCreateOpen) {
      reset();
    }
  }, [usersCreateOpen]);

  useEffect(() => {
    let defaultValues = {};
    defaultValues.password = 'generic';
    defaultValues.role = '';
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = (data) => {
    data.role = parseInt(data.role, 10);
    dispatch(registerUser(data, setUsersCreateOpen));
  };

  const handleButtonLogin = () => {
    return !loading ? (
      <button className='btn bg-primary hover:bg-secondary hover:text-primary text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]'>
        <svg className='w-4 h-4 fill-current shrink-0 mb-1' viewBox='0 0 16 16'>
          <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
        </svg>
        <span className='ml-3 align-baseline'>Añadir usuario</span>
      </button>
    ) : (
      <div>
        <ButtonLoading loading='Creando' register={true} />
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
    <>
      <form onSubmit={handleSubmit(submitForm)} className='mt-16'>
        <section className='grid gap-5 md:grid-cols-1'>
          {/* <div className="flex flex-wrap justify-between">
        <div className="input-container"> */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='first_name'
            >
              Nombre
            </label>
            <input
              id='first_name'
              className='form-input w-full'
              type='text'
              autoFocus={true}
              autoComplete='off'
              {...register('first_name', {
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
            {errors.first_name && (
              <span className='text-red-500 text-sm'>
                {errors.first_name.message}
              </span>
            )}
          </div>

          {/* <div className="input-container">
          <div className="flex items-center justify-between"> */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='last_name'
            >
              Apellido
            </label>
            {/* </div> */}
            <input
              id='last_name'
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('last_name', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /[a-zA-Z]/,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.last_name && (
              <span className='text-red-500 text-sm'>
                {errors.last_name.message}
              </span>
            )}
          </div>

          {/* <div className="input-container"> */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='email'>
              Email
            </label>
            <input
              id='mandatory'
              className='form-input w-full'
              type='text'
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

          {/* <div className="input-container">
          <label className={styles.label} htmlFor="password">
            Contraseña:
          </label>

          <div className="focus-within:text-primary ">
            <input
              id="password"
              className="form-input w-full h-12"
              type={eye ? "text" : "password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "El campo es requerido",
                },
              })}
            />
            <section className="relative">
              <button
                type="button"
                className="absolute inset-2 -top-10 left-auto flex items-center mr-2"
              >
                {eye ? (
                  <img
                    onClick={toggleEye}
                    src={icons.openEye}
                    alt="Ojo abierto"
                  />
                ) : (
                  <img
                    onClick={toggleEye}
                    src={icons.closedEye}
                    alt="Ojo cerrado"
                  />
                )}
              </button>
            </section>
          </div>

          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div> */}

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

          {/* <div className="input-container"> */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='nmc'>
              NMC
            </label>

            <input
              id='nmc'
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('nmc', {
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
            {errors.nmc && (
              <span className='text-red-500 text-sm'>{errors.nmc.message}</span>
            )}
          </div>

          {/* <div className="input-container"> */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='telephone'
            >
              Telefono
            </label>

            <input
              id='telephone'
              className='form-input w-full'
              type='tel'
              autoComplete='off'
              {...register('telephone', {
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
            {errors.telephone && (
              <span className='text-red-500 text-sm'>
                {errors.telephone.message}
              </span>
            )}
          </div>

          {/* <div className="input-container"> */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='position'
            >
              Posición
            </label>

            <input
              id='position'
              className='form-input w-full'
              type='text'
              autoComplete='off'
              {...register('position', {
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
            {errors.position && (
              <span className='text-red-500 text-sm'>
                {errors.position.message}
              </span>
            )}
          </div>

          {/* <div className="input-container"> */}
          <div>
            {/* <label className={styles.label} htmlFor="role">
            Rol:
          </label> */}
            <label className='block text-sm font-semibold mb-1'>Rol</label>
            <select
              id='role'
              className='form-select w-full'
              {...register('role', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            >
              <option value='' disabled>
                Selecciona...
              </option>
              {roles.map((rol) => (
                <option value={rol.id} key={rol.id}>
                  {rol.role}
                </option>
              ))}
            </select>
            {errors.role && (
              <span className='text-red-500 text-sm'>
                {errors.role.message}
              </span>
            )}
          </div>
          {/* </div> */}
        </section>
        {/* // <div className="mt-4 flex justify-center">{handleButtonLogin()}</div> */}
        <div className='my-10 flex justify-center'>{handleButtonLogin()}</div>
      </form>
      {/* //   </main> */}
      {/* //   <footer>
    //     {isCorrect && ( */}
      {/* //       <SuccessMessage
    //         message="
    //               Se añadió el usuario correctamente."
    //       />
    //     )}
    //     {handleErrorMsg()}
    //   </footer>
    // </section> */}
    </>
  );
}

export default UserCreateForm;

const styles = {
  inputContainer: 'w-96 h-12 mb-7',
  label: 'block text-sm font-semibold mb-1',
  input: 'form-input w-full h-full',
  select: 'form-select w-full h-full',
};
