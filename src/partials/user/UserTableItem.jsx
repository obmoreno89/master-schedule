import React from 'react';
import icons from '../../images/icon/icons';
import FakeUser from './FakeUser';

function UserTableItem(props) {
  return (
    <>
      <tr>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4'>
          <p className='text-textTableItem font-medium  capitalize'>
            Omar Barragán Moreno
          </p>
          <span className='text-primary'>Administrador</span>
        </td>
        <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-left font-semibold'>omarbm@nidec.systems.com</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-left '>758491</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>2721195055</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>jefe de linea</p>
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
      <FakeUser />
      <FakeUser />
      <FakeUser />
      <FakeUser />
      <FakeUser />
    </>
  );
}

export default UserTableItem;