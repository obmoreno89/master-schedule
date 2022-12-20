/**
 * Application
 */
import React, { Fragment } from 'react';

import {
  BryntumDemoHeader,
  BryntumThemeCombo,
  BryntumGantt,
} from '@bryntum/gantt-react';
import { ganttConfig } from './AppConfig';
import './App.scss';

function GanttPlanning() {
  // edit button click handler
  const handleEditClick = ({ record, grid: gantt }) => {
    gantt.editTask(record);
  };

  return (
    <Fragment>
      {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
      <BryntumDemoHeader children={<BryntumThemeCombo />} />
      <BryntumGantt {...ganttConfig} extraData={{ handleEditClick }} />
    </Fragment>
  );
}

export default GanttPlanning;
