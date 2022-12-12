import React from 'react';
import icons from '../../../images/icon/icons';
import UserPanel from '../../../partials/management/user/UserPanel';
import ModalUserDelete from '../../../pages/component/ModalUserDelete';

function UserTableItem({
  dataUser,
  userPanelOpen,
  setUserPanelOpen,
  setOpenModalUserDelete,
  openModalUserDelete,
}) {
  return (
    <>
      <UserPanel
        setUserPanelOpen={setUserPanelOpen}
        userPanelOpen={userPanelOpen}
      />
      <ModalUserDelete
        openModalUserDelete={openModalUserDelete}
        setOpenModalUserDelete={setOpenModalUserDelete}
      />
      {dataUser.map((data, index) => (
        <tr key={index}>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4'>
            <p className='text-textTableItem font-medium  capitalize'>
              {data.first_name} {data.last_name}
            </p>
            <span className='text-primary'>{data.role.name}</span>
          </td>
          <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-left font-semibold'>{data.email}</p>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-left '>{data.nmc}</p>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-center'>{data.telephone}</p>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-center'>{data.position}</p>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <figure className='flex justify-end items-center space-x-3'>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setUserPanelOpen(true);
                  sessionStorage.setItem('first_name', data.first_name);
                  sessionStorage.setItem('last_name', data.last_name);
                  sessionStorage.setItem('telephone', data.telephone);
                  sessionStorage.setItem('nmc', data.nmc);
                  sessionStorage.setItem('position', data.position);
                  sessionStorage.setItem('email', data.email);
                  sessionStorage.setItem('role', data.role.id);
                  sessionStorage.setItem('id', data.id);
                }}
              >
                <img src={icons.pencilIcon} alt='Lapiz' />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModalUserDelete(true);
                  sessionStorage.setItem('userId', data.id);
                  sessionStorage.setItem('first_name', data.first_name);
                  sessionStorage.setItem('last_name', data.last_name);
                }}
              >
                <img src={icons.garbageIcon} alt='Basura' />
              </button>
            </figure>
          </td>
        </tr>
      ))}
    </>
  );
}

export default UserTableItem;
