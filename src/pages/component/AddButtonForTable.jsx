import React from 'react';
import icons from '../../images/icon/icons';

function AddButtonForTable({
  buttonName,
  group,
  setOpenModalPL,
  setOpenModalGroup,
}) {
  return (
    <tr className='relative h-9'>
      <td className='absolute left-0 right-0 m-auto'>
        <div className='flex justify-center items-center h-8'>
          <img className='' src={icons.plus} alt='Mas' />
          <button
            className='text-primary font-semibold'
            onClick={(e) => {
              e.stopPropagation();
              !group ? setOpenModalPL(true) : setOpenModalGroup(true);
            }}
          >
            {buttonName}
          </button>
        </div>
      </td>
    </tr>
  );
}

export default AddButtonForTable;
