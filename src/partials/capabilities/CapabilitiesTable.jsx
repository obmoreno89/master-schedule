import { Link } from 'react-router-dom';
import icons from '../../images/icon/icons';
import CapabilitiesTableItem from './CapabilitiesTableItem';

const CapabilitiesTable = () => {
  return (
    <div className='bg-white'>
      <div className='mt-24'>
        <div className='overflow-x-auto rounded-xl border border-slate-300'>
          <table className='table-auto w-full'>
            {/* Table header */}
            <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200'>
              <tr>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <div className='font-semibold text-left'>
                    Lista de productos
                  </div>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-left'>Tipo</p>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-left'>Grupo</p>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-center'>Pz/Hora</p>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-center'>Turno/Dia</p>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-center'>Pz/Dia</p>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-center'>Comentario</p>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className='text-sm divide-y divide-slate-200'>
              <CapabilitiesTableItem />
            </tbody>
          </table>
        </div>
      </div>
      <section className='flex justify-center items-start'>
        <Link
          to='/plant/create'
          className='flex justify-center items-center w-1/2'
        ></Link>
      </section>
    </div>
  );
};

export default CapabilitiesTable;
