import React, { useEffect, useState } from 'react';
import UserTableItem from './UserTableItem';
import {
  getAlluser,
  revertSearch,
  selectAllUser,
  selectReload,
  selectUserSearch,
  setSearch,
} from '../../../store/slice/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../pages/component/Loading';
import UserPanelCreate from './UserPanelCreate';

function UserTable({
  setUserPanelOpen,
  setOpenModalUserDelete,
  openModalUserDelete,
  userPanelOpen,
  usersCreateOpen,
  setUsersCreateOpen,
}) {
  const [user, setUser] = useState(useSelector(selectAllUser));
  const [startSearch, setStartSearch] = useState(false);
  const dispatch = useDispatch();
  const dataUser = useSelector(selectAllUser);
  const reload = useSelector(selectReload);
  const searchItems = useSelector(selectUserSearch);

  useEffect(() => {
    dispatch(getAlluser());
  }, [reload]);

  useEffect(() => {
    setUser(dataUser);
  }, [dataUser]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = user.filter((element) => {
        if (
          element.first_name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          element.last_name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return element;
        }
      });
      dispatch(setSearch(result));
    } else {
      dispatch(revertSearch());
      setStartSearch(false);
    }
  };

  return (
    <>
      <section>
        <UserPanelCreate
          usersCreateOpen={usersCreateOpen}
          setUsersCreateOpen={setUsersCreateOpen}
        />
      </section>
      {user?.length > 0 ? (
        <>
          <section className='mb-5 flex justify-between'>
            <div className='mb-4 sm:mb-0'>
              <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                Usuarios
              </h1>
            </div>
            <div className='flex space-x-3'>
              <input
                className='form-input w-72'
                placeholder='Buscar...'
                type='search'
                onChange={handleSearch}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setUsersCreateOpen(true);
                  //setLine RateOpenPanel(true);
                }}
                type='button'
                className='btn bg-primary text-white w-54 space-x-2'
              >
                <svg
                  className='w-4 h-4 fill-current opacity-50 shrink-0'
                  viewBox='0 0 16 16'
                >
                  <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                </svg>
                <span>Crear usuario</span>
              </button>
            </div>
          </section>
          <section>
            <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
              {!startSearch ? (
                <UserTableItem
                  userPanelOpen={userPanelOpen}
                  setUserPanelOpen={setUserPanelOpen}
                  setOpenModalUserDelete={setOpenModalUserDelete}
                  openModalUserDelete={openModalUserDelete}
                  dataUser={user}
                  setUser={setUser}
                  selectUser={dataUser}
                />
              ) : startSearch && searchItems.length > 0 ? (
                <UserTableItem
                  userPanelOpen={userPanelOpen}
                  setUserPanelOpen={setUserPanelOpen}
                  setOpenModalUserDelete={setOpenModalUserDelete}
                  openModalUserDelete={openModalUserDelete}
                  dataUser={searchItems}
                  setUser={setUser}
                  selectUser={dataUser}
                />
              ) : (
                <section className='justify-center items-center flex h-96'>
                  <h2 className='font-semibold text-2xl'>
                    Sin datos que mostrar
                  </h2>
                </section>
              )}
            </div>
          </section>
        </>
      ) : (
        <>
          {/* <div className='justify-center items-center flex h-96'>
            <h1 className='font-semibold text-2xl'>Sin datos por mostrar</h1>
          </div> */}
          <Loading />
        </>
      )}
    </>
  );
}

export default UserTable;
