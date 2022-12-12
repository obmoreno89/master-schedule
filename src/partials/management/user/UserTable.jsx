import React, { useEffect } from 'react';
import UserTableItem from './UserTableItem';
import { getAlluser, selectAllUser } from '../../../store/slice/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

function UserTable({
  setUserPanelOpen,
  setOpenModalUserDelete,
  openModalUserDelete,
  userPanelOpen,
}) {
  const dispatch = useDispatch();
  const dataUser = useSelector(selectAllUser);

  useEffect(() => {
    dispatch(getAlluser());
  }, [dataUser]);

  return (
    <>
      {dataUser.length ? (
        <section>
          <div className='overflow-x-auto rounded-xl border border-slate-300'>
            <table className='table-auto w-full'>
              <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
                <tr>
                  <th className='px-2 first:pl-5'>
                    <div className='font-semibold text-left'>Nombre</div>
                  </th>
                  <th className='px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-left'>Email</p>
                  </th>
                  <th className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-left'>NMC</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                    <p className='font-semibold text-center'>Teléfono</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                    <p className='font-semibold text-center'>Posición</p>
                  </th>
                  <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                    <p className='font-semibold text-center'></p>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className='text-sm divide-y divide-slate-200'>
                {dataUser.map((data) => (
                  <UserTableItem
                    userPanelOpen={userPanelOpen}
                    setUserPanelOpen={setUserPanelOpen}
                    setOpenModalUserDelete={setOpenModalUserDelete}
                    openModalUserDelete={openModalUserDelete}
                    first_name={data.first_name}
                    last_name={data.last_name}
                    email={data.email}
                    nmc={data.nmc}
                    position={data.position}
                    telephone={data.telephone}
                    key={data.id}
                    id={data.id}
                    role={data.role.name}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
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
