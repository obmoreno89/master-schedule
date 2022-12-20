import React from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import GanttPlanning from '../partials/planning/plannings/GanttPlanning';

function Planning() {
  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute='Planeación'
      nameSubRoute='Planeaciones'
    >
      <GanttPlanning />
    </Layout>
  );
}

export default Planning;
