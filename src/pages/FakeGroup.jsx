import React from 'react';

function FakeGroup() {
  return (
    <tr>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
        <div className='flex items-center'>
          <p className='text-textTableItem capitalize'>A</p>
        </div>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-left truncate'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </td>
    </tr>
  );
}

export default FakeGroup;
