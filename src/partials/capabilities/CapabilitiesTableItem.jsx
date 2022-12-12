import React from 'react';
import icons from '../../images/icon/icons';

const CapabilitiesTableItem = ({
  setTransactionPanelOpen,
  setGroupPanelOpen,
  capabilitiesList,
}) => {
  console.log(capabilitiesList);

  return (
    <>
      {capabilitiesList.map((data, index) => (
        <tr key={index}>
          <td
            onClick={(e) => {
              e.stopPropagation();
              setTransactionPanelOpen(true);
            }}
            className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 cursor-pointer'
          >
            <div className='flex items-center space-x-10'>
              <p className='text-textTableItem font-medium  capitalize'>
                {data.product_line.name}
              </p>
              <img src={icons.downArrow} alt='Flecha abajo' />
            </div>
          </td>
          <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-left font-semibold'>{data.type_name}</p>
          </td>
          <td
            onClick={(e) => {
              e.stopPropagation();
              setGroupPanelOpen(true);
            }}
            className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer flex space-x-3'
          >
            <p className='text-left font-semibold'>
              {data.product_line.group.name}
            </p>
            <img src={icons.downArrow} alt='Flecha abajo' />
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-center'>{data.piece_per_hour}</p>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-center'>{data.shift_per_day}</p>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-center'>{data.piece_per_day}</p>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-center'>{data.comments}</p>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CapabilitiesTableItem;
