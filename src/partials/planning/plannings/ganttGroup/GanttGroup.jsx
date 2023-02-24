import Layout from '../../../../components/Layout';
import icons from '../../../../images/icon/icons';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Gantt.css';
import { StringHelper } from '@bryntum/gantt';
import { BryntumGantt, BryntumToolbar } from '@bryntum/gantt-react';
import { GanttGroupConfig } from './GanttGroupConfig';
import '@bryntum/gantt/gantt.material.css';
import axios from 'axios';
import ToastStatus from '../../../../components/ToastStatus';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectGroupGanttLetter,
  setHiddenSidebar,
} from '../../../../store/slice/planningSlice';
import ModalAlertGantt from '../../../../pages/component/ModalAlertGantt';
import ModalMoveTaskGantt from '../../../../pages/component/ModalMoveTaskGantt';
import ModalBlank from '../../../../components/ModalBlank';

function GanttGroup() {
  const [modalAlertGanttOpen, setModalAlertGanttOpen] = useState(false);
  const [openStatusToast, setOpenStatusToast] = useState(false);
  const [modalMoveTaskOpen, setModalMoveTaskOpen] = useState(false);
  const [date, setDate] = useState();
  const ganttLetter = useSelector(selectGroupGanttLetter);
  const [data, setData] = useState([]);
  const [exit, setExit] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const first_name_id = JSON.parse(
    sessionStorage.getItem('planningId')
  )?.first_name;

  const last_name_id = JSON.parse(
    sessionStorage.getItem('planningId')
  )?.last_name;

  const created_date = JSON.parse(
    sessionStorage.getItem('planningId')
  )?.created_date;

  const selected_groups = JSON.parse(
    sessionStorage.getItem('planningId')
  )?.selected_groups;

  const last_update = JSON.parse(
    sessionStorage.getItem('planningId')
  )?.last_update;

  const historyId = JSON.parse(
    sessionStorage.getItem('planningId')
  )?.id_history_planning;

  const formatDate = (oldDate) => {
    const newDate = new Date(oldDate);
    return newDate.toLocaleDateString('es-ES');
  };

  const formatHour = (oldDate) => {
    const newDate = new Date(oldDate);
    return newDate.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDate2 = (oldDate) => {
    const newDate = new Date(oldDate);
    const today = new Date();

    const newDateFinal = newDate.toLocaleDateString('es-ES');
    const todayFinal = today.toLocaleDateString('es-ES');

    if (newDateFinal === todayFinal) {
      return 'hoy';
    } else {
      return newDateFinal;
    }
  };
  const formatHour2 = (oldDate) => {
    const newDate = new Date(oldDate);
    const nada = newDate.getHours();
    console.log(nada);

    return newDate.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const ganttRef = useRef();
  useEffect(() => {
    // the instance is available as
    console.log(ganttRef.current.instance);
    const dataInitial = ganttRef.current.instance.project.inlineData;
    console.log(dataInitial);
  }, []);

  const loadData = async () => {
    const data = await axios.get(
      `http://35.174.106.95/api/gantt/list/by-group?group=${ganttLetter}`
    );

    const project = ganttRef.current.instance.project;
    // Feed it to the project
    console.log(data);
    setDate(data.data.history_planning.last_update);
    project.inlineData = data;
    project.stm.autoRecord = true;
    project.stm.enable();
    await project.loadInlineData({
      eventsData: data['data']['tasks']['rows'],
      calendarsData: data['data']['calendars']['rows'],
      dependenciesData: data['data']['tasks']['dependencies']['rows'],
    });
    project.calendar = 'general';

    const dataGantt = project.inlineData;
    const tasks = dataGantt.eventsData;
    const dependencies = dataGantt.dependenciesData;
    const ganttData = {
      tasks: tasks,
      dependencies: dependencies,
    };
    setData(ganttData);
    console.log(ganttData);
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
    const data = {
      tasks: tasks,
      dependencies: dependencies,
    };
    setData(data);
    console.log(data);
    setExit(true);

    const save = await axios
      .post(`http://35.174.106.95/api/planning/save-planning-update`, data)
      .then((response) => {
        if (response.status === 200) {
          setDate(response.data.last_update);
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

  const openModalGantt = () => {
    setModalAlertGanttOpen(true);
  };

  const exitGantt = () => {
    navigate('/mp-pro/planning/plannings/');
    dispatch(setHiddenSidebar(false));
  };

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute='Planeación'
      nameSubRoute='Grupo'
    >
      <section>
        <ModalAlertGantt
          setModalAlertGanttOpen={setModalAlertGanttOpen}
          modalAlertGanttOpen={modalAlertGanttOpen}
          data={data}
        />
      </section>
      <ModalBlank
        id='success-modal'
        modalOpen={modalMoveTaskOpen}
        setModalOpen={setModalMoveTaskOpen}
      >
        <div className='p-5 flex space-x-4'>
          <div>
            {/* Modal header */}
            <div className='mb-2 flex justify-between items-center'>
              <h2 className='text-lg font-bold text-slate-800 w-72'>
                Confirmar reprogramación de ordenes
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalMoveTaskOpen(false);
                }}
              >
                <svg
                  className='w-5 h-5 fill-black group-hover:fill-slate-600 pointer-events-none'
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
                </svg>
              </button>
            </div>
            {/* Modal content */}
            <div className='text-sm mb-10'>
              <div className='space-y-2'>
                <p>
                  La acción que has realizado, afecta a la programación futura
                  de algunas ordenes, deseas confirmar la acción.
                </p>
              </div>
            </div>
            {/* Modal footer */}
            <div className='flex justify-center items-center space-x-3'>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalMoveTaskOpen(false);
                  ganttRef.current.instance.project.stm.undo();
                }}
                className='btn-lg bg-red-600 hover:bg-red-500 font-semibold text-white w-full'
              >
                Si, confirmar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setModalMoveTaskOpen(false);
                }}
                className='btn-lg bg-green-600 hover:bg-green-500 font-semibold text-white w-full'
              >
                Cancelar reprogramación
              </button>
            </div>
          </div>
        </div>
      </ModalBlank>
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
            !exit
              ? {
                  text: 'Cancelar',
                  icon: 'b-fa b-fa-cancel',
                  cls: 'cancel',
                  async onAction() {
                    openModalGantt();
                  },
                }
              : {
                  text: 'Salir',
                  icon: 'b-fa b-fa-door-open',
                  cls: 'exit',
                  async onAction() {
                    exitGantt();
                  },
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
        <article className='absolute -translate-y-[50px]'>
          <h2 className='font-semibold'>
            Vista por grupo de Planeación:{' '}
            <span className='text-primary'>{ganttLetter}</span>
          </h2>
        </article>

        <div
          className={`border-borderInput border rounded ${
            last_update === null || last_update ? '' : 'mt-3'
          } `}
        >
          <BryntumGantt
            onAfterTaskDrop={(valid) => {
              console.log('Arrastrando');
              console.log(valid);
              setModalMoveTaskOpen(true);
            }}
            onDependencyValidationStart={(dependency) => {
              console.log(dependency);
              if (dependency.dependencyType != 2) {
                console.log('Dependencia distinta de 2. Error');
                dependency.data.valid = false;
                dependency.data.tooltip.title = `<div><i class=\"b-icon b-icon-invalid\"></i><span>Invalid</span></div>`;
                dependency.cancel();
                console.log(dependency.data.tooltip.style);
              } else {
                console.log('Dependencia válida');
              }
              // if (dependency.source.startDate >= dependency.source.startDate) {
              //   console.log('Sólo se permiten dependencias StartToEnd');
              // }
            }}
            ref={ganttRef}
            pdfExportFeature={true}
            enableDeleteKey={false}
            taskRenderer={({ taskRecord }) => {
              return {
                tag: 'p',
                html: StringHelper.encodeHtml(taskRecord.item),
              };
            }}
            {...GanttGroupConfig}
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

export default GanttGroup;
