import icons from '../../../images/icon/icons';

function planningsTableItems() {
  return (
    <>
      <table className='table-auto w-full table'>
        <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
          <tr>
            <th className='px-2 first:pl-5 cursor-pointer'>
              <div className='flex items-center space-x-2'>
                <div className='font-semibold text-left'>ID de Planeación</div>
              </div>
            </th>
            <th className='px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer'>
              <div className='flex items-center space-x-2'>
                <p className='font-semibold text-left'>Planeador</p>
              </div>
            </th>
            <th className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-left'>Grupos planeados</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Fecha de planeación</p>
            </th>

            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
              <p className='font-semibold text-center'></p>
            </th>
          </tr>
        </thead>
        <tbody className='text-sm divide-y divide-slate-200'>
          <tr>
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4'>
              <p className='font-medium text-primary  capitalize'>
                ID de Planeación
              </p>
            </td>
            <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='text-left font-semibold'>Planeador</p>
            </td>
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='text-left '>Grupos planeados</p>
            </td>
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='text-center'>Fecha de planeación</p>
            </td>

            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <figure className='flex justify-end items-center'>
                <button>
                  <img src={icons.play} alt='play' />
                </button>
              </figure>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default planningsTableItems;
