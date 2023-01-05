import React, { useState } from 'react';
import DropdownEditMenu from './DropdownEditMenu';
import { deleteHoliday } from '../store/slice/calendarSlice';
import { useDispatch } from 'react-redux';
import ModalCalendarEdit from '../pages/component/ModalCalendarEdit';

function QuickSelection({
  eventId,
  setOpenModalCalendarEdit,
  openModalCalendarEdit,
  description,
  setReloadEvent,
  reloadEvent,
  isWeekendDay
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <DropdownEditMenu
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        isWeekendDay={isWeekendDay}
        
      >
        <li>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenModalCalendarEdit(true);
              sessionStorage.setItem('idEvent', eventId);
              sessionStorage.setItem('description', description);
            }}
            className='font-medium text-sm text-slate-600 hover:text-slate-800 flex py-0 px-3'
          >
            Editar
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              dispatch(deleteHoliday(eventId, setDropdownOpen));
            }}
            className='font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3'
          >
            Eliminar
          </button>
        </li>
      </DropdownEditMenu>
      <ModalCalendarEdit
        description={description}
        setOpenModalCalendarEdit={setOpenModalCalendarEdit}
        openModalCalendarEdit={openModalCalendarEdit}
        setReloadEvent={setReloadEvent}
        reloadEvent={reloadEvent}
      />
    </div>
  );
}

export default QuickSelection;
