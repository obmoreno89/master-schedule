import React from 'react';
import UserTableItem from './UserTableItem';

function UserTable({ setUserPanelOpen }) {
  return (
    <>
      <section>
        <div className='overflow-x-auto rounded-xl border border-slate-300'>
          <table className='table-auto w-full'>
            <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
              <tr>
                <th className='px-2 first:pl-5'>
                  <div className='font-semibold text-left'>Nombre</div>
                </th>
                <th className='px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-left'>Email</p>
                </th>
                <th className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-left'>NMC</p>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-center'>Teléfono</p>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                  <p className='font-semibold text-center'>Posición</p>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                  <p className='font-semibold text-center'></p>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className='text-sm divide-y divide-slate-200'>
              <UserTableItem setUserPanelOpen={setUserPanelOpen} />
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default UserTable;
