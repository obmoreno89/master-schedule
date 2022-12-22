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

function UserTable({
  setUserPanelOpen,
  setOpenModalUserDelete,
  openModalUserDelete,
  userPanelOpen,
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
      {user?.length > 0 ? (
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
              onChange={handleSearch}
            />
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
          <div className='justify-center items-center flex h-96'>
            <h1 className='font-semibold text-2xl'>Sin datos por mostrar</h1>
          </div>
        </>
      )}
    </>
  );
}

export default UserTable;
