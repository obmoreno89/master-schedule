import React from 'react';
import icons from '../../images/icon/icons';

function AddButtonForTable({ buttonName }) {
  return (
    <tr className='relative h-9'>
      <td className='absolute left-0 right-0 m-auto'>
        <div className='flex justify-center items-center h-8'>
          <img className='' src={icons.plus} alt='Mas' />
          <button className='text-primary font-semibold text-xs'>
            {buttonName}
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AddButtonForTable;
