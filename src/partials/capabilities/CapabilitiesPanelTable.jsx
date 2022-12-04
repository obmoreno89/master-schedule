import React from 'react';
import CapabilitiesTableItem from './CapabilitiesTableItem';
import CapabilitiesPanelTableItem from './CapabilitiesPanelTableItem';

const CapabilitiesPanelTable = () => {
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
              <CapabilitiesPanelTableItem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesPanelTable;
