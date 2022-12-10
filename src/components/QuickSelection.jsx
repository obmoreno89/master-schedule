import React from 'react';
import DropdownEditMenu from './DropdownEditMenu';

function QuickSelection() {
  return (
    <div className=''>
      <DropdownEditMenu>
        <li>
          <a
            className='font-medium text-sm text-slate-600 hover:text-slate-800 flex py-0 px-3'
            href='#0'
          >
            Editar
          </a>
        </li>

        <li>
          <a
            className='font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3'
            href='#0'
          >
            Eliminar
          </a>
        </li>
      </DropdownEditMenu>
    </div>
  );
}

export default QuickSelection;
