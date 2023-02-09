import React from 'react';
import icons from '../../images/icon/icons';

function CapabilitesCustomTableItem({ capabilitiesCustomList }) {
  return (
    <>
      <table className='table-auto w-full table'>
        <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50 sticky top-0 z-40'>
          <tr>
            <th className='px-2 first:pl-5 w-1/4 cursor-pointer'>
              <div className='flex items-center space-x-10'>
                <div className='font-semibold text-left'>
                  Línea de productos
                </div>
              </div>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
              <p className='font-semibold text-left'>Tipo</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer '>
              <div className='flex items-center space-x-2'>
                <p className='font-semibold text-left'>Grupo</p>
              </div>
            </th>
            <th className='px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Pz/Hora</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Turno/Dia</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Pz/Dia</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>start</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>end</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Comentario</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center w-5'></p>
            </th>
          </tr>
        </thead>

        {capabilitiesCustomList.map((data, index) => (
          <tbody key={index} className='text-sm divide-y divide-slate-200'>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 '>
                <div className='flex items-center space-x-10'>
                  <p className='text-textTableItem font-medium  capitalize'>
                    {data.product_line.name}
                  </p>
                </div>
              </td>
              <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-left '>{data.type_name}</p>
              </td>
              <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap  flex space-x-3'>
                <p className='text-left '>{data.product_line.group.name}</p>
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
                <p className='text-center'>{data.start_date}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-center'>{data.end_date}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-center'>{data.comments}</p>
              </td>
              <td className='last:pr-1 py-3 whitespace-nowrap'>
                <figure className='flex justify-start items-center space-x-3'>
                  <button>
                    <img src={icons.pencilIcon} alt='Lapiz' />
                  </button>
                  <button>
                    <img src={icons.garbageIcon} alt='Basura' />
                  </button>
                </figure>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default CapabilitesCustomTableItem;
