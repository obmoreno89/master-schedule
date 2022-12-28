import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  getRoles,
  selectRoles,
  selectUserLoading,
  updateUser,
} from '../../../store/slice/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../../helpers/ButtonLoading';

function CapabilitiesGroupPanelTableItem({ setUserPanelOpen }) {
  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);

  const dispatch = useDispatch();

  const roles = useSelector(selectRoles);
  const loading = useSelector(selectUserLoading);

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  const first_name = JSON.parse(sessionStorage.getItem('userEdit'))?.first_name;
  const last_name = JSON.parse(sessionStorage.getItem('userEdit'))?.last_name;
  const email = JSON.parse(sessionStorage.getItem('userEdit'))?.email;
  const nmc = JSON.parse(sessionStorage.getItem('userEdit'))?.nmc;
  const telephone = JSON.parse(sessionStorage.getItem('userEdit'))?.telephone;
  const position = JSON.parse(sessionStorage.getItem('userEdit'))?.position;
  const role = JSON.parse(sessionStorage.getItem('userEdit'))?.role;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(updateUser(data, setUserPanelOpen));
  };

  useEffect(() => {
    let defaultValues = {};
    defaultValues.first_name = `${first_name}`;
    defaultValues.last_name = `${last_name}`;
    defaultValues.email = `${email}`;
    // defaultValues.password = `${'FJGKGLE23238'}`;
    defaultValues.nmc = `${nmc}`;
    defaultValues.telephone = `${telephone}`;
    defaultValues.position = `${position}`;
    defaultValues.role = `${role}`;
    reset({ ...defaultValues });
  }, [first_name]);

  const handleButtonLogin = () => {
    return !loading ? (
      <button className='btn bg-primary hover:bg-secondary hover:text-primary text-white font-semibold text-base w-[27rem] h-12 rounded-[4px]'>
        <svg className='w-4 h-4 fill-current shrink-0 mb-1' viewBox='0 0 16 16'>
          <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
        </svg>
        <span className='ml-3 align-baseline'>Editar usuario</span>
      </button>
    ) : (
      <div>
        <ButtonLoading loading='Creando' update={true} />
      </div>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className='grid gap-5 md:grid-cols-1'>
          {/* NAME */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='first_name'
            >
              Nombre
            </label>
            <input
              className='form-input w-full'
              type='text'
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
          {/* LAST NAME */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='last_name'
            >
              Apellido
            </label>
            <input
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
          {/* EMAIL */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='email'>
              Email
            </label>
            <input
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
          {/* PASSWORD */}
          {/* <div className='relative'>
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
          </div> */}
          {/* NMC */}
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='nmc'>
              NMC
            </label>
            <input
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
          {/* PHONE */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='telephone'
            >
              Telefono
            </label>
            <input
              className='form-input w-full'
              type='number'
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
          {/* POSITION */}
          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='position'
            >
              Posición
            </label>
            <input
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
          {/* ROL */}
          <div>
            <label className='block text-sm font-semibold mb-1'>Rol</label>
            <select
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
        </section>
        <div className='mt-10 flex justify-center'>{handleButtonLogin()}</div>
      </form>
    </>
  );
}

export default CapabilitiesGroupPanelTableItem;
