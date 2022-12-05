import React from 'react';
import icons from '../images/icon/icons';

function Fake() {
  return (
    <tr className='text-textTableItem'>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5'>
        <div className='flex items-center space-x-10'>
          <p className='text-textTableItem  font-medium  capitalize'>
            NEMAH.140 Fr Overlap
          </p>
          <img src={icons.downArrow} alt='Flecha abajo' />
        </div>
      </td>
      <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-left font-semibold'>IM</p>
      </td>
      <td
        onClick={(e) => {
          e.stopPropagation();
          props.setGroupPanelOpen(true);
        }}
        className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer flex space-x-3'
      >
        <p className='text-left font-semibold'>A</p>
        <img src={icons.downArrow} alt='Flecha abajo' />
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-center'>8</p>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-center'>0.5</p>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-center'>32</p>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-center'>Comparte capacidad B1 Y B2</p>
      </td>
    </tr>
  );
}

export default Fake;
