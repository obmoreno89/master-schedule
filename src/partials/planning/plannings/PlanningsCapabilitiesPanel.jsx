import { useEffect, useRef, useState } from 'react';
import Transition from '../../../utils/Transition';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  generateGantt,
  selectGanttLoading,
} from '../../../store/slice/planningSlice';
import GetPlanningReportModal from '../../../pages/component/GetPlanningReportModal';

const PlanningsCapabilitiesPanel = ({
  orders,
  groups,
  planningCapabilities,
  setPlanningCapabilities,
}) => {
  const closeBtn = useRef(null);
  const panelContent = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectGanttLoading);
  // const planning = useSelector(selectPlanning);
  // console.log(planning);

  const [byDefault, setByDefault] = useState({
    state: true,
    value: 'Capacidad base (Por defecto)',
  });
  const [advanced, setAdvanced] = useState({
    state: false,
    value: 'Capacidad Personalizada (Avanzado)',
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!planningCapabilities || keyCode !== 27) return;
      setPlanningCapabilities(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleCheckbox = (e) => {
    const { checked } = e.target;
  };

  const goOrdersPlanningGantt = () => {
    const data = {
      orders: orders,
      selected_groups: groups,
      criteria: ['A'],
    };
    dispatch(generateGantt(data, navigate));
  };

  return (
    <>
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={planningCapabilities}
        enter='transition ease-out duration-200'
        enterStart='opacity-0'
        enterEnd='opacity-100'
        leave='transition ease-out duration-200'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'
        aria-hidden='true'
      />
      <Transition
        id='panelG'
        className='fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6'
        role='dialog'
        aria-modal='true'
        show={planningCapabilities}
        enter='transition ease-in-out duration-500'
        enterStart='opacity-0 translate-x-4'
        enterEnd='opacity-100 translate-x-0'
        leave='transition ease-in-out duration-500'
        leaveStart='opacity-100 translate-x-0'
        leaveEnd='opacity-0 translate-x-4'
      >
        <div
          ref={panelContent}
          className={`w-[480px] bg-white absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
            planningCapabilities ? 'translate-x-' : 'translate-x-full'
          }`}
        >
          <section className='mb-10'>
            <h2 className='mt-4 ml-5 w-full font-bold text-black text-2xl'>
              Capacidades
            </h2>
            <button
              ref={closeBtn}
              onClick={() => setPlanningCapabilities(false)}
              className='absolute top-1 right-0 mt-4 mr-3 group p-1'
            >
              <svg
                className='w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
              </svg>
            </button>
          </section>
          <section className='flex flex-col justify-center px-5'>
            <div className='mt-5 border border-borderInput h-14 items-center flex px-3 rounded'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  className='form-checkbox'
                  name='byDefault'
                  defaultChecked={byDefault.state}
                  onChange={handleCheckbox}
                />
                <span className='text-base font-semibold ml-2 text-black'>
                  Capacidad base (Por defecto)
                </span>
              </label>
            </div>
            <div className='mt-5 mb-20 border border-borderInput h-14 items-center flex px-3 rounded'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  className='form-checkbox'
                  name='advanced'
                  defaultChecked={advanced.state}
                  onChange={handleCheckbox}
                />
                <span className='text-base font-semibold ml-2 text-black'>
                  Capacidad Personalizada (Avanzado)
                </span>
              </label>
            </div>
            <div className='flex justify-center'>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  //setPlanningCapabilities(false);
                  //setOrdersPanelOpen(true);
                  // goOrdersPlanningGantt();
                  setGetPlanningReportModalOpen(true);
                }}
                className='w-80 h-12 bg-primary rounded text-white text-base flex justify-center items-center hover:bg-secondary hover:text-primary'
              >
                Ir a la planeación de órdenes
              </button>
            </div>
          </section>
        </div>
      </Transition>
    </>
  );
};

export default PlanningsCapabilitiesPanel;
