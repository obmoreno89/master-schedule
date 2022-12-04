import React from 'react';
import Fake from '../../pages/Fake';

const CapabilitiesTableItem = (props) => {
  return (
    <>
      <tr>
        <td
          onClick={(e) => {
            e.stopPropagation();
            props.setTransactionPanelOpen(true);
          }}
          className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 cursor-pointer'
        >
          <div className='flex items-center'>
            <p className='text-textTableItem  capitalize flex space-x-1'>
              hola
            </p>
          </div>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-left '>IM</p>
        </td>
        <td
          onClick={(e) => {
            e.stopPropagation();
            props.setGroupPanelOpen(true);
          }}
          className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'
        >
          <p className='text-left'>hola</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>hola</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>hola</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>hola</p>
        </td>
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
          <p className='text-center'>hola</p>
        </td>
      </tr>
      <Fake />
      <Fake />
      <Fake />
      <Fake />
      <Fake />
      <Fake />
      <Fake />
      <Fake />
      <Fake />
    </>
  );
};

export default CapabilitiesTableItem;
