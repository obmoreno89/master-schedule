import React from 'react';
import Fake from '../../pages/Fake';

const groupList = [
  {
    id: 0,
    period: 'A',
  },
  {
    id: 1,
    period: 'B',
  },
  {
    id: 2,
    period: 'C',
  },
  {
    id: 3,
    period: 'D',
  },
];

const productList = [
  {
    id: 0,
    period: 'NEMAH.140 Fr Overlap',
  },
  {
    id: 1,
    period: 'NEMAH.140 Fr Overlap',
  },
  {
    id: 2,
    period: 'NEMAH.180 Fr Overlap',
  },
  {
    id: 3,
    period: 'NEMAH.180 Fr Overlap',
  },
];

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
        <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
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
