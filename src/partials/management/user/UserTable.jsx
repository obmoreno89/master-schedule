import React, { useEffect, useState } from 'react';
import UserTableItem from './UserTableItem';
import {
  getAlluser,
  selectAllUser,
  selectReload,
} from '../../../store/slice/usersSlice';
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
  const reload = useSelector(selectReload);

  useEffect(() => {
    dispatch(getAlluser());
  }, [reload]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = dataUser.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {dataUser.length ? (
        <>
          <section>
            <div className='overflow-x-auto rounded-xl border border-slate-300'>
              <UserTableItem
                userPanelOpen={userPanelOpen}
                setUserPanelOpen={setUserPanelOpen}
                setOpenModalUserDelete={setOpenModalUserDelete}
                openModalUserDelete={openModalUserDelete}
                dataUser={currentPost}
              />
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
