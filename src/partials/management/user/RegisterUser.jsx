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

function RegisterUser() {
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
    reset({ ...defaultValues });
  }, [reset]);

  const submitForm = (data) => {
    data.role = parseInt(data.role, 10);
    dispatch(registerUser(data));
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

  // return (
  //   <section>
  //     <header className='xl:w-[65%] md:mx-auto'>
  //       <h2 className='text-3xl text-slate-800 font-bold mb-5'>Crear cuenta</h2>
  //     </header>
  //     <main>
  //       <form onSubmit={handleSubmit(submitForm)}>
  //         <div className='grid md:gap-5 md:grid-cols-2 xl:w-[65%] md:mx-auto'>
  //           <div className='input-container'>
  //             <label className={styles.label} htmlFor='first_name'>
  //               Nombre:
  //             </label>
  //             <input
  //               id='first_name'
  //               className='form-input w-full h-12'
  //               type='text'
  //               autoFocus={true}
  //               {...register('first_name', {
  //                 required: {
  //                   value: true,
  //                   message: 'El campo es requerido',
  //                 },
  //               })}
  //             />
  //             {errors.first_name && (
  //               <span className='text-red-500 text-sm'>
  //                 {errors.first_name.message}
  //               </span>
  //             )}
  //           </div>

  //           <div className='input-container'>
  //             <div className='flex items-center justify-between'>
  //               <label className={styles.label} htmlFor='last_name'>
  //                 Apellido:
  //               </label>
  //             </div>
  //             <input
  //               id='last_name'
  //               className='form-input w-full h-12'
  //               type='text'
  //               {...register('last_name', {
  //                 required: {
  //                   value: true,
  //                   message: 'El campo es requerido',
  //                 },
  //               })}
  //             />
  //             {errors.last_name && (
  //               <span className='text-red-500 text-sm'>
  //                 {errors.last_name.message}
  //               </span>
  //             )}
  //           </div>

  //           <div className='input-container'>
  //             <label className={styles.label} htmlFor='email'>
  //               Email:
  //             </label>
  //             <input
  //               id='mandatory'
  //               className='form-input w-full h-12'
  //               type='text'
  //               {...register('email', {
  //                 required: {
  //                   value: true,
  //                   message: 'El campo es requerido',
  //                 },
  //                 pattern: {
  //                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  //                   message: 'El formato no es correcto',
  //                 },
  //               })}
  //             />
  //             {errors.email && (
  //               <span className='text-red-500 text-sm'>
  //                 {errors.email.message}
  //               </span>
  //             )}
  //           </div>

  //           <div className='input-container'>
  //             <label className={styles.label} htmlFor='password'>
  //               Contraseña:
  //             </label>

  //             <div className='focus-within:text-primary '>
  //               <input
  //                 id='password'
  //                 className='form-input w-full h-12'
  //                 type={eye ? 'text' : 'password'}
  //                 {...register('password', {
  //                   required: {
  //                     value: true,
  //                     message: 'El campo es requerido',
  //                   },
  //                 })}
  //               />
  //               <section className='relative'>
  //                 <button
  //                   type='button'
  //                   className='absolute inset-2 -top-10 left-auto flex items-center mr-2'
  //                 >
  //                   {eye ? (
  //                     <img
  //                       onClick={toggleEye}
  //                       src={icons.openEye}
  //                       alt='Ojo abierto'
  //                     />
  //                   ) : (
  //                     <img
  //                       onClick={toggleEye}
  //                       src={icons.closedEye}
  //                       alt='Ojo cerrado'
  //                     />
  //                   )}
  //                 </button>
  //               </section>
  //             </div>

  //             {errors.password && (
  //               <span className='text-red-500 text-sm'>
  //                 {errors.password.message}
  //               </span>
  //             )}
  //           </div>

  //           <div className='input-container'>
  //             <label className={styles.label} htmlFor='nmc'>
  //               NMC:
  //             </label>

  //             <input
  //               id='nmc'
  //               className='form-input w-full h-12'
  //               type='text'
  //               {...register('nmc', {
  //                 required: {
  //                   value: true,
  //                   message: 'El campo es requerido',
  //                 },
  //               })}
  //             />
  //             {errors.nmc && (
  //               <span className='text-red-500 text-sm'>
  //                 {errors.nmc.message}
  //               </span>
  //             )}
  //           </div>

  //           <div className='input-container'>
  //             <label className={styles.label} htmlFor='telephone'>
  //               Teléfono:
  //             </label>

  //             <input
  //               id='telephone'
  //               className='form-input w-full h-12'
  //               type='tel'
  //               {...register('telephone', {
  //                 required: {
  //                   value: true,
  //                   message: 'El campo es requerido',
  //                 },
  //               })}
  //             />
  //             {errors.telephone && (
  //               <span className='text-red-500 text-sm'>
  //                 {errors.telephone.message}
  //               </span>
  //             )}
  //           </div>

  //           <div className='input-container'>
  //             <label className={styles.label} htmlFor='position'>
  //               Posición:
  //             </label>

  //             <input
  //               id='position'
  //               className='form-input w-full h-12'
  //               type='text'
  //               {...register('position', {
  //                 required: {
  //                   value: true,
  //                   message: 'El campo es requerido',
  //                 },
  //               })}
  //             />
  //             {errors.position && (
  //               <span className='text-red-500 text-sm'>
  //                 {errors.position.message}
  //               </span>
  //             )}
  //           </div>

  //           <div className='input-container'>
  //             <label className={styles.label} htmlFor='role'>
  //               Rol:
  //             </label>
  //             <select
  //               id='role'
  //               className='form-select w-full h-12'
  //               {...register('role')}
  //             >
  //               {roles.map((rol, index) => (
  //                 <option key={index} value={rol.id}>
  //                   {rol.role}
  //                 </option>
  //               ))}
  //             </select>
  //           </div>
  //         </div>
  //         <div className='mt-9 xl:w-[65%] md:mx-auto flex justify-center'>
  //           {handleButtonLogin()}
  //         </div>
  //       </form>
  //     </main>
  //     <footer>
  //       {isCorrect && (
  //         <SuccessMessage
  //           message='
  //                 Se añadió el usuario correctamente.'
  //         />
  //       )}
  //       {handleErrorMsg()}
  //     </footer>
  //   </section>
  // );

  return (
    <section>
      <header>
        <h2 className='text-3xl text-slate-800 font-bold mb-5 mt-6'>
          Crear cuenta
        </h2>
      </header>
      <main>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className='flex flex-wrap justify-between'>
            <div className='input-container'>
              <label className={styles.label} htmlFor='first_name'>
                Nombre:
              </label>
              <input
                id='first_name'
                className='form-input w-full h-12'
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

            <div className='input-container'>
              <div className='flex items-center justify-between'>
                <label className={styles.label} htmlFor='last_name'>
                  Apellido:
                </label>
              </div>
              <input
                id='last_name'
                className='form-input w-full h-12'
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

            <div className='input-container'>
              <label className={styles.label} htmlFor='email'>
                Email:
              </label>
              <input
                id='mandatory'
                className='form-input w-full h-12'
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

            <div className='input-container'>
              <label className={styles.label} htmlFor='password'>
                Contraseña:
              </label>

              <div className='focus-within:text-primary '>
                <input
                  id='password'
                  className='form-input w-full h-12'
                  type={eye ? 'text' : 'password'}
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                  })}
                />
                <section className='relative'>
                  <button
                    type='button'
                    className='absolute inset-2 -top-10 left-auto flex items-center mr-2'
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

            <div className='input-container'>
              <label className={styles.label} htmlFor='nmc'>
                NMC:
              </label>

              <input
                id='nmc'
                className='form-input w-full h-12'
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

            <div className='input-container'>
              <label className={styles.label} htmlFor='telephone'>
                Teléfono:
              </label>

              <input
                id='telephone'
                className='form-input w-full h-12'
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

            <div className='input-container'>
              <label className={styles.label} htmlFor='position'>
                Posición:
              </label>

              <input
                id='position'
                className='form-input w-full h-12'
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

            <div className='input-container'>
              <label className={styles.label} htmlFor='role'>
                Rol:
              </label>
              <select
                id='role'
                className='form-select w-full h-12'
                {...register('role')}
              >
                <option>Selecciona...</option>
                {roles.map((rol, index) => (
                  <>
                    <option key={index} value={rol.id}>
                      {rol.role}
                    </option>
                  </>
                ))}
              </select>
            </div>
          </div>
          <div className='mt-4 flex justify-center'>{handleButtonLogin()}</div>
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

const styles = {
  inputContainer: 'w-96 h-12 mb-7',
  label: 'block text-sm font-semibold mb-1',
  input: 'form-input w-full h-full',
  select: 'form-select w-full h-full',
};
