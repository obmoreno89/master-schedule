import Layout from '../../../components/Layout';
import icons from '../../../images/icon/icons';
import { useState, useEffect, useRef } from 'react';
import '../../Gantt.css';
import { StringHelper } from '@bryntum/gantt';
import { BryntumGantt, BryntumToolbar } from '@bryntum/gantt-react';
import { ganttConfig } from './ganttIdConfig';
import '@bryntum/gantt/gantt.material.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ToastStatus from '../../../components/ToastStatus';
import { useSelector } from 'react-redux';
import { selectPlanningId } from '../../../store/slice/planningSlice';

function DemoGantt() {
  const [openStatusToast, setOpenStatusToast] = useState(false);
  const { id } = useParams();

  const planningIdData = useSelector(selectPlanningId);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES');
  };

  const formatHour = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  console.log(planningIdData);

  const ganttRef = useRef();
  useEffect(() => {
    // the instance is available as
    console.log(ganttRef.current.instance);
    const dataInitial = ganttRef.current.instance.project.inlineData;
    console.log(dataInitial);
  }, []);

  const loadData = async () => {
    const data = await axios.get(
      `http://44.211.175.241/api/gantt/list-order-planning?planning-id=mp-${id}`
    );

    const project = ganttRef.current.instance.project;
    // Feed it to the project
    project.inlineData = data;
    project.stm.autoRecord = true;
    project.stm.enable();
    await project.loadInlineData({
      eventsData: data['data']['tasks']['rows'],
      calendarsData: data['data']['calendars']['rows'],
      dependenciesData: data['data']['tasks']['dependencies']['rows'],
    });
    project.calendar = 'general';
  };

  useEffect(() => {
    loadData();
  }, []);

  const onUndoClick = () => {
    console.log(ganttRef.current.instance.project.stm.position);
    if (ganttRef.current.instance.project.stm.position > 1) {
      ganttRef.current.instance.project.stm.undo();
    }
  };

  const reDoClick = () => {
    console.log(ganttRef.current.instance.project.stm.position);
    if (
      ganttRef.current.instance.project.stm.position <
      ganttRef.current.instance.project.stm.length
    ) {
      ganttRef.current.instance.project.stm.redo();
    }
  };

  const onZoomInClick = () => {
    console.log('Zoom In');
    ganttRef.current.instance.zoomIn();
  };

  const onZoomOutClick = () => {
    console.log('Zoom Out');
    ganttRef.current.instance.zoomOut();
  };

  const onZoomToFitClick = () => {
    console.log('Zoom to Fit');
    ganttRef.current.instance.zoomToFit({
      leftMargin: 50,
      rightMargin: 50,
    });
  };

  const onShiftPreviousClick = () => {
    console.log('Zoom to Fit');
    ganttRef.current.instance.shiftPrevious();
  };

  const onShiftNextClick = () => {
    console.log('Zoom to Fit');
    ganttRef.current.instance.shiftNext();
  };

  const onSavePlanning = async () => {
    console.log('Guardando planeación');
    const project = ganttRef.current.instance.project;
    const dataGantt = project.inlineData;
    console.log(dataGantt);
    const tasks = dataGantt.eventsData;
    const dependencies = dataGantt.dependenciesData;
    console.log(dependencies);
    console.log(id);
    const data = {
      tasks: tasks,
      dependencies: dependencies,
    };
    const save = await axios
      .post(`http://44.211.175.241/api/planning/save-planning/${id}`, data)
      .then((response) => {
        if (response.status === 200) {
          setOpenStatusToast(true);
          setTimeout(() => {
            setOpenStatusToast(false);
          }, 3000);
          console.log(response);
        } else {
          console.log('Ocurrió un error: ' + response.status);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute='Planeación'
      nameSubRoute='Gantt'
    >
      <div className='px-4 relative'>
        <BryntumToolbar
          items={[
            {
              type: 'buttonGroup',
              items: [
                {
                  icon: 'b-fa b-fa-undo',
                  async onAction() {
                    onUndoClick();
                  },
                },
                {
                  icon: 'b-fa b-fa-redo',
                  async onAction() {
                    reDoClick();
                  },
                },
              ],
            },
            {
              type: 'buttonGroup',
              items: [
                {
                  ref: 'zoomInButton',
                  icon: 'b-fa b-fa-search-plus',
                  tooltip: 'Zoom in',
                  onAction: onZoomInClick,
                },
                {
                  ref: 'zoomOutButton',
                  icon: 'b-fa b-fa-search-minus',
                  tooltip: 'Zoom out',
                  onAction: onZoomOutClick,
                },
                {
                  ref: 'zoomToFitButton',
                  icon: 'b-fa b-fa-compress-arrows-alt',
                  tooltip: 'Zoom to fit',
                  onAction: onZoomToFitClick,
                },
                {
                  ref: 'previousButton',
                  icon: 'b-fa b-fa-angle-left',
                  tooltip: 'Previous time span',
                  onAction: onShiftPreviousClick,
                },
                {
                  ref: 'nextButton',
                  icon: 'b-fa b-fa-angle-right',
                  tooltip: 'Next time span',
                  onAction: onShiftNextClick,
                },
              ],
            },
            {
              text: 'Guardar planeación',
              icon: 'b-fa b-fa-save',
              cls: 'save',
              async onAction() {
                onSavePlanning();
              },
            },
          ]}
        />
        <article className='absolute -translate-y-[65px]'>
          <p className='font-semibold'>
            ID de planeación:<span className='text-primary'> {id}</span> |{' '}
            <span>Grupo:</span>{' '}
            <span className='text-primary'>
              {planningIdData.selected_groups}
            </span>
          </p>
          <p className='text-sm'>
            Creado por:{' '}
            <span className='text-primary'>
              {planningIdData.user_id__first_name}{' '}
              {planningIdData.user_id__last_name} el{' '}
              {formatDate(planningIdData?.created_date)} a las{' '}
              {formatHour(planningIdData?.created_date)}
            </span>
          </p>
          <p className='text-sm'>Actualizado por:</p>
        </article>

        <div className='border-borderInput border rounded mt-3'>
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
            {...ganttConfig}
            // other props, event handlers, etc
          />
        </div>
      </div>
      <section className='flex justify-end -mt-20'>
        <ToastStatus
          type='success'
          open={openStatusToast}
          setOpen={setOpenStatusToast}
          className={'animate-bounce'}
        >
          {' '}
          <span className='flex flex-col'>
            {' '}
            Planeación guardada{' '}
            <span className='font-medium w-72'>
              Datos sincronizados exitosamente
            </span>
          </span>
        </ToastStatus>
      </section>
    </Layout>
  );
}

export default DemoGantt;
