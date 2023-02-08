import { useState, useEffect, useRef } from 'react';
import '../Gantt.css';
import { Gantt, StringHelper } from '@bryntum/gantt';
import { BryntumGantt, BryntumToolbar } from '@bryntum/gantt-react';
import { ganttConfig } from './ganttConfig';
import '@bryntum/gantt/gantt.material.css';
import axios from 'axios';

function DemoGantt() {
  const ganttRef = useRef();
  useEffect(() => {
    // the instance is available as
    // console.log(ganttRef.current.instance);
    const dataInitial = ganttRef.current.instance.project.inlineData;
    loadData();
    // console.log(dataInitial);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     localStorage.removeItem("b-gantt-trial-start");
  //     window.location.reload();
  //   }, 60000);
   
  // }, []);

  const loadData = async () => {
    const data = await axios.get(
      'http://35.174.106.95/api/gantt/list/global'
    );

    const project = ganttRef.current.instance.project;
    // Feed it to the project
    console.log(data)
    project.inlineData = data;
    project.stm.autoRecord = true;
    project.stm.enable();
    await project.loadInlineData({
      eventsData: data['data']['tasks']['rows'],
      calendarsData: data['data']['calendars']['rows'],
      dependenciesData: data['data']['tasks']['dependencies'],
    });
    project.calendar = 'general';
    console.log(project.calendar);
    // console.log(project.inlineData);
  };

  return (
    <>
      <div className='border-borderInput border rounded'>
        <BryntumGantt
          ref={ganttRef}
          pdfExportFeature={true}
          enableDeleteKey={false}
          taskRenderer={({ taskRecord }) => {
            return {
              tag: 'p',
              html: StringHelper.encodeHtml(taskRecord.name),
            };
          }}
          taskNonWorkingTime={{
            tooltipTemplate({ startDate, endDate, iconCls }) {
              return `                   
                  <p class="b-nonworkingtime-tip-title">${
                    iconCls ? `<i class="${iconCls}"></i>` : ''
                  }Non-working time</p>
                  ${DateHelper.format(startDate, 'L')} - ${DateHelper.format(
                endDate,
                'L'
              )}
              `;
            },
          }}
          
          percentBar={true}
          {...ganttConfig}
          // other props, event handlers, etc
        />
      </div>
    </>
  );
}

export default DemoGantt;
