import OpenOrdersFilter from './OpenOrdersFilter';

const OpenOrdersTable = () => {
  return (
    <>
      <header className='flex flex-1 justify-between mb-3'>
        <div>
          <h2 className='text-3xl font-semibold text-black my-auto'>
            Órdenes a planear
          </h2>

          <p className='my-auto mb-1 font-medium'>
            Total de órdenes: <span className='font-bold text-primary'>5</span>
          </p>
        </div>
        <div className='flex space-x-3 h-10 relative top-5'>
          <OpenOrdersFilter />

          <input
            className='form-input w-72'
            placeholder='Buscar por ID...'
            type='search'
          />
        </div>
      </header>

      <div className='border border-slate-300 rounded-xl orders-table overflow-x-auto'>
        <table className='table-auto w-full table rounded-xl'>
          <thead className='text-[14px] text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
            <tr>
              <th className='px-2 first:pl-5 w-1/4'>
                <div className='flex items-center space-x-10'>
                  <div className='font-semibold text-left'>Order</div>
                </div>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                <p className='font-semibold text-center'>Tipo de orden</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                <div className='flex items-center space-x-2'>
                  <p className='font-semibold text-center'>Item</p>
                </div>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='font-semibold text-center'>Cantidad</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='font-semibold text-center'>Total de la orden</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='font-semibold text-center'>Línea de producto</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                <p className='font-semibold text-center'>Order date</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                <p className='font-semibold text-center'>Request date</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5'>
                <p className='font-semibold text-center'>Promise date</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5'>
                <p className='font-semibold text-center'>Schedule Ship date</p>
              </th>
            </tr>
          </thead>

          <tbody className='text-sm divide-y divide-slate-200'>
            <tr>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5'>
                <div className='flex flex-col'>
                  <p className='font-medium capitalize text-slate-400 text-sm'>
                    hola
                  </p>
                  <p className='text-textTableItem font-medium capitalize text-base'>
                    hola
                  </p>
                  <p className='text-primary font-medium capitalize text-sm'>
                    hola
                  </p>
                </div>
              </td>
              <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='font-semibold text-sm'>hola</p>
              </td>
              <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='font-semibold text-sm'>hola</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-center text-sm'>hola</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-sm text-center'>hola</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-center text-sm'>hola</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-center text-sm'>hola</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400'>
                <p className='text-center text-sm'>hola</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium'>
                <p className='text-center text-sm'>hola</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400'>
                <p className='text-center text-sm'>hola</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OpenOrdersTable;
