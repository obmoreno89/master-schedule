import React, { useState } from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import CalendarContent from '../partials/planning/calendar/CalendarContent';
import ModalCalendar from './component/ModalCalendar';

function Calendar() {
  const [openModalCalendar, setOpenModalCalendar] = useState(false);
  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute='Planeación'
      nameSubRoute='Calendario'
    >
      <CalendarContent setOpenModalCalendar={setOpenModalCalendar} />
      <ModalCalendar
        openModalCalendar={openModalCalendar}
        setOpenModalCalendar={setOpenModalCalendar}
      />
    </Layout>
  );
}

export default Calendar;
