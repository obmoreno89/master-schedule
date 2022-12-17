import React, { useEffect, useState } from 'react';
import UserTableItem from './UserTableItem';
import {
  getAlluser,
  selectAllUser,
  selectReload,
} from '../../../store/slice/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

function UserTable({
  setUserPanelOpen,
  setOpenModalUserDelete,
  openModalUserDelete,
  userPanelOpen,
}) {
  const dispatch = useDispatch();
  const dataUser = useSelector(selectAllUser);
  const reload = useSelector(selectReload);

  useEffect(() => {
    dispatch(getAlluser());
  }, [reload]);

  return (
    <>
      {dataUser.length ? (
        <>
          <section className='mb-5 flex justify-between'>
            <div className='mb-4 sm:mb-0'>
              <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                Usuarios
              </h1>
            </div>
            <input
              className='form-input w-72'
              placeholder='Buscar...'
              type='search'
            />
          </section>
          <section>
            <div className='overflow-x-auto rounded-xl border border-slate-300'>
              <UserTableItem
                userPanelOpen={userPanelOpen}
                setUserPanelOpen={setUserPanelOpen}
                setOpenModalUserDelete={setOpenModalUserDelete}
                openModalUserDelete={openModalUserDelete}
                dataUser={dataUser}
              />
            </div>
          </section>
        </>
      ) : (
        <>
          <div className='justify-center items-center flex h-96'>
            <h1 className='font-semibold text-2xl'>Sin datos por mostrar</h1>
          </div>
        </>
      )}
    </>
  );
}

export default UserTable;
