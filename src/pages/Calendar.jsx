import React from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import CalendarContent from '../partials/planning/calendar/CalendarContent';

function Calendar() {
  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute='Planeación'
      nameSubRoute='Calendario'
    >
      <CalendarContent />
    </Layout>
  );
}

export default Calendar;
