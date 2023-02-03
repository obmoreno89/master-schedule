import PlanningsTableItems from './PlanningsTableItems';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import icons from '../../../images/icon/icons';
import DropdownFilter from '../../../components/DropdownFilter';
import {
  getListHistory,
  revertSearch,
  selectHistorySearch,
  selectListHistory,
  selectLoadHistory,
  setSearch,
  selectPlanningList,
  getPlanningList,
} from '../../../store/slice/planningSlice';
import Loading from '../../../pages/component/Loading';
import { selectGroup } from '../../../store/slice/capabilitiesSlice';

function PlanningsTable({ setGroupOptionsPanel }) {
  const dispatch = useDispatch();
  const listHistory = useSelector(selectListHistory);
  const load = useSelector(selectLoadHistory);
  const searchItems = useSelector(selectHistorySearch);
  const groups = useSelector(selectGroup);
  const planningsList = useSelector(selectPlanningList);

  const [list, setList] = useState(useSelector(selectListHistory));
  const [startSearch, setStartSearch] = useState(false);
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    dispatch(getPlanningList());
  }, []);

  useEffect(() => {
    dispatch(getListHistory());
  }, [groups]);

  useEffect(() => {
    setList(listHistory);
  }, [listHistory]);

  useEffect(() => {
    setLoadData(load);
  }, [load]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = list.filter((element) => {
        if (
          element.planning_id
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return element;
        }
      });
      dispatch(setSearch(result));
    } else {
      dispatch(revertSearch());
      setStartSearch(false);
    }
  };

  return (
    <>
      <section className='mb-5 flex justify-between'>
        <div className='mb-4 sm:mb-0'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Planeaciones
          </h1>
        </div>
        <div className='flex space-x-3'>
          <DropdownFilter />
          <input
            className='form-input w-72'
            placeholder='Buscar por ID...'
            type='search'
            onChange={handleSearch}
          />
          <button
            type='button'
            className=' font-medium text-sm bg-white text-primary w-54 space-x-2 border border-primary rounded px-2 flex justify-center items-center'
          >
            <img className='w-5' src={icons.graphGantt} alt='Gantt' />
            <span>Vista de Gantt</span>
          </button>
          <button
            onClick={() => setGroupOptionsPanel(true)}
            type='button'
            className='btn bg-primary text-white w-54 space-x-2'
          >
            <svg
              className='w-4 h-4 fill-current opacity-50 shrink-0'
              viewBox='0 0 16 16'
            >
              <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
            </svg>
            <span>Crear planeación </span>
          </button>
        </div>
      </section>
      <section className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
        <table className='table-auto w-full '>
          <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
            <tr>
              <th
                className='px-2 first:pl-5 cursor-pointer'
                // onClick={() => {
                //   setOrderId({ state: true, asc: !orderId.asc });
                // }}
              >
                <div className='flex items-center space-x-2'>
                  <div className='font-semibold text-left'>order_item</div>
                  {/* <img
                    src={orderId.asc ? icons.doubleDown : icons.doubleUp}
                    alt='Flecha abajo'
                    className='w-5'
                  /> */}
                </div>
              </th>
              <th
                className='px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer'
                // onClick={() => {
                //   setOrderPlaneador({
                //     state: true,
                //     asc: !orderPlaneador.asc,
                //   });
                // }}
              >
                <div className='flex items-center space-x-2'>
                  <div className='font-semibold'>User</div>
                  {/* <img
                    src={orderPlaneador.asc ? icons.doubleDown : icons.doubleUp}
                    alt='Flecha abajo'
                    className='w-5'
                  /> */}
                </div>
              </th>
              <th className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='font-semibold text-center'>order_quantity</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='font-semibold text-center'>
                  start_production_date
                </p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='font-semibold text-center'>end_production_date</p>
              </th>
              <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'></th>

              {/* <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
              <p className='font-semibold text-center'></p>
            </th> */}
            </tr>
          </thead>

          {planningsList.map((data) => {
            return (
              <PlanningsTableItems
                key={data.order_planning_id}
                id={data.order_planning_id}
                order_item={data.order_item}
                user={data.user}
                order_quantity={data.order_quantity}
                start_production_date={data.start_production_date}
                end_production_date={data.end_production_date}
                dem_children={data.dem_childrens}
              />
            );
          })}
        </table>
      </section>
    </>
  );
}

export default PlanningsTable;
