import React, { useEffect } from 'react';
import icons from '../../../images/icon/icons';

import ModalUserDelete from '../../../pages/component/ModalUserDelete';

function UserTableItem(props) {
  return (
    <>
      <ModalUserDelete
        openModalUserDelete={props.openModalUserDelete}
        setOpenModalUserDelete={props.setOpenModalUserDelete}
        id={props.id}
        first_name={props.first_name}
        last_name={props.last_name}
        key={props.id}
      />
      <tr>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4'>
          <p className='text-textTableItem font-medium  capitalize'>
            {props.first_name} {props.last_name}
          </p>
          <span className='text-primary'>Administrador</span>
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
              }}
            >
              <img src={icons.pencilIcon} alt='Lapiz' />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                props.setOpenModalUserDelete(true);
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
