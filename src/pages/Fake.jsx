import React from 'react';

function Fake() {
  return (
    <tr className='text-textTableItem'>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5'>
        <div className='flex items-center'>
          <article className='capitalize flex space-x-1'>
            <p className=' text-slate-800'>hola</p>
          </article>
        </div>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-left  '>hola</p>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-left'>hola</p>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-center '>hola</p>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-center '>hola</p>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-center'>hola</p>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <p className='text-center'>hola</p>
      </td>
    </tr>
  );
}

export default Fake;
