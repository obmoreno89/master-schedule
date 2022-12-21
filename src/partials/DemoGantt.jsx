import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import { useState, useEffect, useRef } from 'react'
import './Gantt.css'
import { Gantt } from '@bryntum/gantt';
import { BryntumGantt, BryntumToolbar } from '@bryntum/gantt-react';
import { ganttConfig } from './AppConfig'
import '@bryntum/gantt/gantt.material.css';
import axios from 'axios';

function DemoGantt() {
  const ganttRef = useRef();
  useEffect(()=>{
    // the instance is available as
    console.log(ganttRef.current.instance);
    const dataInitial = ganttRef.current.instance.project.inlineData;
    loadData();
    console.log(dataInitial)
  },[])

  const loadData = async () =>  {
    const data = await axios.get('https://hubmine-d.s3.amazonaws.com/launch_saas.json');

    const project = ganttRef.current.instance.project;
    // Feed it to the project
    project.inlineData = data;
    project.stm.autoRecord = true;
    project.stm.enable();
    await project.loadInlineData({
      eventsData: data["data"]["tasks"]["rows"],
      calendarsData: data["data"]["calendars"]["rows"],
      dependenciesData: data["data"]["tasks"]["dependencies"]
    })
    console.log(project.inlineData);
  }

  const onUndoClick = () => {
    console.log("Undo");
    ganttRef.current.instance.project.stm.undo();
  }

  const reDoClick = () => {
    console.log("Redo");
    ganttRef.current.instance.project.stm.redo();
  }

  const onZoomInClick = () => {
    console.log("Zoom In")
    ganttRef.current.instance.zoomIn();
  }

  const onZoomOutClick = () => {
    console.log("Zoom Out")
    ganttRef.current.instance.zoomOut();
  }

  const onZoomToFitClick = () => {
    console.log("Zoom to Fit")
    ganttRef.current.instance.zoomToFit({
      leftMargin  : 50,
      rightMargin : 50
    })
  }

  const onShiftPreviousClick = () => {
    console.log("Zoom to Fit")
    ganttRef.current.instance.shiftPrevious();
  }

  const onShiftNextClick = () => {
    console.log("Zoom to Fit")
    ganttRef.current.instance.shiftNext();
  }

  return (
    <Layout
    icon={icons.planningIcon}
    nameRoute='Planeación'
    nameSubRoute='Gantt'
    >
      {' '}
      <div className="App">
        <BryntumToolbar
        items   = {[
          {
            type: 'buttonGroup',
            items: [
              { 
                icon : 'b-fa b-fa-undo', 
                async onAction(){
                  onUndoClick();
                } 
              },
              {
                icon: 'b-fa b-fa-redo',
                async onAction(){
                  reDoClick();
                }
              },
            ]
          },
          {
            type  : 'buttonGroup',
            items : [
                {
                    ref      : 'zoomInButton',
                    icon     : 'b-fa b-fa-search-plus',
                    tooltip  : 'Zoom in',
                    onAction : onZoomInClick
                },
                {
                    ref      : 'zoomOutButton',
                    icon     : 'b-fa b-fa-search-minus',
                    tooltip  : 'Zoom out',
                    onAction : onZoomOutClick
                },
                {
                    ref      : 'zoomToFitButton',
                    icon     : 'b-fa b-fa-compress-arrows-alt',
                    tooltip  : 'Zoom to fit',
                    onAction : onZoomToFitClick
                },
                {
                    ref      : 'previousButton',
                    icon     : 'b-fa b-fa-angle-left',
                    tooltip  : 'Previous time span',
                    onAction : onShiftPreviousClick
                },
                {
                    ref      : 'nextButton',
                    icon     : 'b-fa b-fa-angle-right',
                    tooltip  : 'Next time span',
                    onAction : onShiftNextClick
                }
            ]
        },
        { 
          text : 'Guardar planeación', 
          icon : 'b-fa b-fa-save',
          cls: 'save',
          async onAction(){
            console.log("Guardar planeación")
          }
        },
        ]}
      />

      <BryntumGantt
        ref={ganttRef}
        pdfExportFeature = {true}
        enableDeleteKey = {false}
        taskNonWorkingTime = {{
          tooltipTemplate({ startDate, endDate, iconCls }) {
              return `                   
                  <p class="b-nonworkingtime-tip-title">${iconCls ? `<i class="${iconCls}"></i>` : ''}Non-working time</p>
                  ${DateHelper.format(startDate, 'L')} - ${DateHelper.format(endDate, 'L')}
              `;
          }}}
        nonWorkingTime = {{
            disabled : true
        }}
        percentBar = {true}
        {...ganttConfig}
              // other props, event handlers, etc
          />
      </div>
    </Layout>
  );
}

export default DemoGantt;
