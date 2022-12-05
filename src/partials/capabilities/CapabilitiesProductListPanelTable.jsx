import React from 'react';
import CapabilitiesProductListPanelTableItem from './CapabilitiesProductListPanelTableItem';
import PaginationNumeric from '../../components/PaginationNumeric';

const CapabilitiesProductListPanelTable = () => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
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
                  <p className='font-semibold text-left'>Grupo</p>
                </th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-slate-200'>
              <CapabilitiesProductListPanelTableItem />
            </tbody>
          </table>
        </div>
        <section className='mt-8'>
          <PaginationNumeric />
        </section>
      </div>
    </div>
  );
};

export default CapabilitiesProductListPanelTable;