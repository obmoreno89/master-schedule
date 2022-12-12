import React, { useEffect } from 'react';
import icons from '../../../images/icon/icons';
import UserPanel from '../../../partials/management/user/UserPanel';
import ModalUserDelete from '../../../pages/component/ModalUserDelete';

function UserTableItem(props) {
  return (
    <>
      <UserPanel
        setUserPanelOpen={props.setUserPanelOpen}
        userPanelOpen={props.userPanelOpen}
      />
      <ModalUserDelete
        openModalUserDelete={props.openModalUserDelete}
        setOpenModalUserDelete={props.setOpenModalUserDelete}
      />
      <tr>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4'>
          <p className='text-textTableItem font-medium  capitalize'>
            {props.first_name} {props.last_name}
          </p>
          <span className='text-primary'>{props.role}</span>
        </td>
        <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-left font-semibold'>{props.email}</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-left '>{props.nmc}</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>{props.telephone}</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>{props.position}</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <figure className='flex justify-end items-center space-x-3'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                props.setUserPanelOpen(true);
                sessionStorage.setItem('first_name', props.first_name);
                sessionStorage.setItem('last_name', props.last_name);
                sessionStorage.setItem('telephone', props.telephone);
                sessionStorage.setItem('nmc', props.nmc);
                sessionStorage.setItem('position', props.position);
                sessionStorage.setItem('email', props.email);
                sessionStorage.setItem('role', props.id);
                sessionStorage.setItem('id', props.id);
              }}
            >
              <img src={icons.pencilIcon} alt='Lapiz' />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                props.setOpenModalUserDelete(true);
                sessionStorage.setItem('userId', props.id);
                sessionStorage.setItem('first_name', props.first_name);
                sessionStorage.setItem('last_name', props.last_name);
              }}
            >
              <img src={icons.garbageIcon} alt='Basura' />
            </button>
          </figure>
        </td>
      </tr>
    </>
  );
}

export default UserTableItem;
