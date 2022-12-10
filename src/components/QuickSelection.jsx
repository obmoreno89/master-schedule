import React, { useState } from 'react';
import DropdownEditMenu from './DropdownEditMenu';
import { deleteHoliday } from '../store/slice/calendarSlice';
import { useDispatch } from 'react-redux';

function QuickSelection({ eventId }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <DropdownEditMenu
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      >
        <li>
          <button className='font-medium text-sm text-slate-600 hover:text-slate-800 flex py-0 px-3'>
            Editar
          </button>
        </li>

        <li>
          <button
            onClick={(e) => {
              dispatch(deleteHoliday(eventId, setDropdownOpen));
            }}
            className='font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3'
          >
            Eliminar
          </button>
        </li>
      </DropdownEditMenu>
    </div>
  );
}

export default QuickSelection;
