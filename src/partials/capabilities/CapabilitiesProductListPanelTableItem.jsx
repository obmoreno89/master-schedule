import React from 'react';
import icons from '../../images/icon/icons';

function CapabilitiesProductListPanelTableItem() {
  return (
    <>
      <tr>
        <td>
          <div className='flex justify-end items-center h-8'>
            <img className='' src={icons.plus} alt='Mas' />
            <button className='text-primary font-semibold'>
              Nueva línea de producto
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <div className='flex items-center'>
            <p className='text-textTableItem capitalize'>hola</p>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-left '>IM</p>
        </td>
      </tr>
    </>
  );
}

export default CapabilitiesProductListPanelTableItem;
