import PlanningsTableItems from './PlanningsTableItems';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderAsc, orderDesc } from '../../baseCapabilities/orderFunc';
import { useEffect, useState } from 'react';
import icons from '../../../images/icon/icons';
import DropdownFilter from '../../../components/DropdownFilter';
import {
  revertSearch,
  selectHistorySearch,
  setSearch,
  selectPlanningList,
  getPlanningList,
  selectLoadHistory,
  selectLoadPlanning,
  revertPlanningList,
} from '../../../store/slice/planningSlice';

function PlanningsTable({
  setGroupOptionsPanel,
  setGroupsOptionGanttPanelOpen,
}) {
  const [startSearch, setStartSearch] = useState(false);
  const dispatch = useDispatch();
  const searchItems = useSelector(selectHistorySearch);
  const planningsList = useSelector(selectPlanningList);
  const load = useSelector(selectLoadPlanning);
  const navigate = useNavigate();

  const [planningListOrder, setPlanningListOrder] = useState(
    useSelector(selectPlanningList)
  );

  useEffect(() => {
    dispatch(revertPlanningList());
    dispatch(getPlanningList());
  }, []);

  useEffect(() => {
    setPlanningListOrder(planningsList);
  }, [planningsList]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = planningListOrder.filter((element) => {
        if (
          element.order_item
            //.toString()
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

  const handleNavigate = (e) => {
    navigate('/mp-pro/gantt/global');
  };

  return (
    <>
      <section className='mb-5 flex justify-between '>
        <div className='mb-4 sm:mb-0'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Planeaciones
          </h1>
        </div>
        <div className='flex space-x-3'>
          <DropdownFilter />

          <input
            className='form-input w-72'
            placeholder='Buscar por Item...'
            type='search'
            onChange={handleSearch}
          />
          <button
            onClick={() => setGroupsOptionGanttPanelOpen(true)}
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
        {load ? (
          <section className='justify-center items-center flex mt-56'>
            <div className='loader'></div>
            <span className='ml-3 text-primary font-semibold'>Cargando</span>
          </section>
        ) : planningsList.length > 0 ? (
          !startSearch ? (
            <Table
              array={planningListOrder}
              setPlanningListOrder={setPlanningListOrder}
            />
          ) : startSearch && searchItems.length > 0 ? (
            <Table
              array={searchItems}
              setPlanningListOrder={setPlanningListOrder}
            />
          ) : (
            <section className='justify-center items-center flex mt-56'>
              <h2 className='font-semibold text-2xl'>Sin datos para mostrar</h2>
            </section>
          )
        ) : (
          <section className='justify-center items-center flex mt-56'>
            <h2 className='font-semibold text-2xl'>
              Crea tu primera planeación
            </h2>
          </section>
        )}
      </section>
    </>
  );
}

const Table = ({ array, setPlanningListOrder }) => {
  const planningsList = useSelector(selectPlanningList);

  const [orderItem, setOrderItem] = useState({ state: false, asc: false });
  const [orderUser, setOrderUser] = useState({ state: false, asc: false });

  useEffect(() => {
    if (orderItem.state) {
      if (!orderItem.asc) {
        orderAsc(planningsList, setPlanningListOrder, 'order_item');
      } else {
        orderDesc(planningsList, setPlanningListOrder, 'order_item');
      }
    }
  }, [orderItem]);

  useEffect(() => {
    if (orderUser.state) {
      if (!orderUser.asc) {
        orderAsc(planningsList, setPlanningListOrder, 'user');
      } else {
        orderDesc(planningsList, setPlanningListOrder, 'user');
      }
    }
  }, [orderUser]);

  return (
    <table className='table-auto w-full'>
      <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50 sticky top-0'>
        <tr>
          <th
            className='px-2 first:pl-5 cursor-pointer'
            onClick={() => {
              setOrderItem({ state: true, asc: !orderItem.asc });
            }}
          >
            <div className='flex items-center space-x-2'>
              <div className='font-semibold text-left'>Order Item</div>
              <img
                src={orderItem.asc ? icons.doubleDown : icons.doubleUp}
                alt='Flecha abajo'
                className='w-5'
              />
            </div>
          </th>
          <th
            className='px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer'
            onClick={() => {
              setOrderUser({
                state: true,
                asc: !orderUser.asc,
              });
            }}
          >
            <div className='flex items-center space-x-2'>
              <div className='font-semibold'>User</div>
              <img
                src={orderUser.asc ? icons.doubleDown : icons.doubleUp}
                alt='Flecha abajo'
                className='w-5'
              />
            </div>
          </th>
          <th className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='flex items-center justify-center space-x-2'>
              <div className='font-semibold'>Order Quantity</div>
            </div>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='font-semibold text-center'>Start Production Date</p>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='font-semibold text-center'>End Production Date</p>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'></th>
        </tr>
      </thead>
      {array.map((data) => {
        return (
          <PlanningsTableItems
            key={data.order_planning_id}
            id={data.order_planning_id}
            order_item={data.order_item}
            pline={data.pline}
            org={data.org}
            user={data.user}
            order_quantity={data.order_quantity}
            start_production_date={data.start_production_date}
            end_production_date={data.end_production_date}
            dem_children={data.dem_childrens}
            setOrderItem={setOrderItem}
            orderItem={orderItem}
          />
        );
      })}
    </table>
  );
};

export default PlanningsTable;
