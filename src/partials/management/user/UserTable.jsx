import React, { useEffect, useState } from 'react';
import UserTableItem from './UserTableItem';
import { getAlluser, selectAllUser } from '../../../store/slice/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import PaginationUser from '../../../components/PaginationUser';
function UserTable({
  setUserPanelOpen,
  setOpenModalUserDelete,
  openModalUserDelete,
  userPanelOpen,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(11);
  const dispatch = useDispatch();
  const dataUser = useSelector(selectAllUser);

  useEffect(() => {
    dispatch(getAlluser());
  }, [dataUser]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = dataUser.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {dataUser.length ? (
        <>
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
                  <UserTableItem
                    userPanelOpen={userPanelOpen}
                    setUserPanelOpen={setUserPanelOpen}
                    setOpenModalUserDelete={setOpenModalUserDelete}
                    openModalUserDelete={openModalUserDelete}
                    dataUser={currentPost}
                  />
                </tbody>
              </table>
            </div>
          </section>
          <section className='mt-5'>
            <PaginationUser
              totalPosts={dataUser.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
            />
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
