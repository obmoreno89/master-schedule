import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import icons from '../../../images/icon/icons';
import Transition from '../../../utils/Transition';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import {
  getSortOrder,
  selectSortOrder,
  getTypeSort,
  selectPlanningsOption,
} from '../../../store/slice/planningSlice';
import { useDispatch, useSelector } from 'react-redux';

const PlanningOrdersPanel = ({
  ordersPanelOpen,
  setOrdersPanelOpen,
  setChooseOption,
  setPlanningCapabilities,
}) => {
  const useDraggableInPortal = () => {
    const self = useRef({}).current;

    useEffect(() => {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.pointerEvents = 'none';
      div.style.top = '0';
      div.style.width = '100%';
      div.style.height = '100%';
      self.elt = div;
      document.body.appendChild(div);
      return () => {
        document.body.removeChild(div);
      };
    }, [self]);

    return (render) =>
      (provided, ...args) => {
        const element = render(provided, ...args);
        if (provided.draggableProps.style.position === 'fixed') {
          return createPortal(element, self.elt);
        }
        return element;
      };
  };

  const renderDraggable = useDraggableInPortal();
  const closeBtn = useRef(null);
  const panelContent = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sortOrder = useSelector(selectSortOrder);
  const optionSort = useSelector(selectPlanningsOption);

  const sort = () => {
    if (optionSort.name === 'ABC Code') {
      return <span>{optionSort.form_apply}</span>;
    } else if (optionSort.name === 'Amount (Total Order)') {
      return <span>hola</span>;
    } else {
      return <span>HOLA</span>;
    }
  };

  useEffect(() => {
    dispatch(getSortOrder());
  }, []);

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (
  //       !groupPanelOpen ||
  //       panelContent.current.contains(target) ||
  //       closeBtn.current.contains(target)
  //     )
  //       return;
  //     setGroupPanelOpen(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!ordersPanelOpen || keyCode !== 27) return;
      setOrdersPanelOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const [criterion, setCriterion] = useState();

  useEffect(() => {
    setCriterion(sortOrder);
  }, [sortOrder]);

  const goToGantt = () => {
    navigate('/mp-pro/demo-gantt/');
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <>
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={ordersPanelOpen}
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
        show={ordersPanelOpen}
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
            ordersPanelOpen ? 'translate-x-' : 'translate-x-full'
          }`}
        >
          <section className='mb-5 flex items-center'>
            <div className='flex ml-5 w-full'>
              <button
                onClick={() => {
                  setOrdersPanelOpen(false);
                  setPlanningCapabilities(true);
                }}
                className='mt-[17px]'
              >
                <img src={icons.arrowLeft} alt='' className='w-8' />
              </button>
              <h2 className='mt-4 ml-5 font-bold text-black text-2xl'>
                Elegir criterios de ordenamiento
              </h2>
            </div>

            <button
              ref={closeBtn}
              onClick={() => setOrdersPanelOpen(false)}
              className=' top-1 right-0 mt-4 mr-4 group p-1'
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

          <DragDropContext
            style={(_isDragging, draggableStyle) => ({
              ...draggableStyle,
              position: 'static',
            })}
            onDragEnd={(result) => {
              const { source, destination } = result;
              if (!destination) {
                return;
              }
              if (
                source.index === destination.index &&
                source.droppableId === destination.droppableId
              ) {
                return;
              }
              setCriterion((prevCriterion) =>
                reorder(prevCriterion, source.index, destination.index)
              );
            }}
          >
            <div className='top-16 bg-white h-screen'>
              <section className='mx-5 pt-4 2xl:pt-8'>
                <Droppable droppableId='data'>
                  {(droppableProvider) => (
                    <ul
                      {...droppableProvider.droppableProps}
                      ref={droppableProvider.innerRef}
                      className='h-[600px] overflow-auto'
                    >
                      {criterion?.map((each, index) => (
                        <Draggable
                          key={each.id}
                          draggableId={each.id.toString()}
                          index={index}
                        >
                          {renderDraggable((draggableProvider) => (
                            <li
                              {...draggableProvider.draggableProps}
                              ref={draggableProvider.innerRef}
                              {...draggableProvider.dragHandleProps}
                              className='border rounded border-slate-300 flex py-4 mb-4 justify-between items-center '
                            >
                              <div className='flex'>
                                <svg
                                  className='w-6 h-6 fill-slate-300 my-auto mx-3'
                                  viewBox='0 0 24 24'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <rect x='4' y='5' width='16' height='2' />
                                  <rect x='4' y='11' width='16' height='2' />
                                  <rect x='4' y='17' width='16' height='2' />
                                </svg>
                                <div className='flex flex-col w-flil'>
                                  <span className='text-base font-semibold text-black'>
                                    {each.name}
                                  </span>
                                  <div>
                                    <span className='text-sm text-primary font-medium bg-secondary px-2 py-1 rounded'>
                                      {sort()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className='my-auto'>
                                <img
                                  onClick={() => {
                                    dispatch(
                                      getTypeSort(
                                        each.name,
                                        setChooseOption,
                                        setOrdersPanelOpen
                                      )
                                    );
                                  }}
                                  src={icons.smallArrowRight}
                                  alt='small-arrow-right'
                                  className='mx-3 cursor-pointer'
                                />
                              </div>
                            </li>
                          ))}
                        </Draggable>
                      ))}
                      {droppableProvider.placeholder}
                    </ul>
                  )}
                </Droppable>
                <button
                  onClick={() => {
                    goToGantt();
                  }}
                  className='h-12 bg-primary text-white rounded w-full text-base font-semibold 2xl:mt-6 hover:bg-secondary hover:text-primary'
                >
                  Ir a la planeación de órdenes
                </button>
              </section>
            </div>
          </DragDropContext>
        </div>
      </Transition>
    </>
  );
};

export default PlanningOrdersPanel;

// function List(props) {
//   const items = props.items;

//   return (
//     <Droppable
//       droppableId='droppable'
//       renderClone={(provided, snapshot, rubric) => (
//         <div
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           Item id: {items[rubric.source.index].id}
//         </div>
//       )}
//     >
//       {(provided) => (
//         <div ref={provided.innerRef} {...provided.droppableProps}>
//           {items.map((item) => (
//             <Draggable draggableId={item.id} index={item.index}>
//               {(provided, snapshot) => (
//                 <div
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                   ref={provided.innerRef}
//                 >
//                   Item id: {item.id}
//                 </div>
//               )}
//             </Draggable>
//           ))}
//         </div>
//       )}
//     </Droppable>
//   );
// }
