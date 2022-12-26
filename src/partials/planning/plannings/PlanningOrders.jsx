import Layout from '../../../components/Layout';
import icons from '../../../images/icon/icons';
import PlanningOrdersPanel from './PlanningOrdersPanel';
import { useState } from 'react';
import PlanningOrdersTable from './PlanningOrdersTable';

import { Link, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOrders,
  selectGroups,
  selectNotFound,
  selectOrders,
} from '../../../store/slice/planningSlice';

const PlanningOrders = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ordersPanelOpen, setOrdersPanelOpen] = useState(false);
  const orders = useSelector(selectOrders);
  const groups = useSelector(selectGroups);
  const notFound = useSelector(selectNotFound);

  useEffect(() => {
    const data = {
      group: groups,
    };
    dispatch(getOrders(data));
  }, [groups]);

  useEffect(() => {
    if (groups.length === 0) {


      navigate("/mp-pro/planning/plannings/");


    }
  }, [groups]);

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={'Planeación'}
      nameSubRoute={'Planeaciones'}
    >

      <section>
        <header className='flex flex-1 py-5 justify-between'>
          <h2 className='text-3xl font-semibold text-black my-auto'>

            Órdenes a planear
          </h2>
          {!notFound && orders?.length > 0 && (
            <p className='my-auto mb-1 font-medium'>
              Total de órdenes:{' '}
              <span className='font-bold text-primary'>{orders?.length}</span>
            </p>
          )}
        </header>
        <main>
          {notFound ? (
            <section className='justify-center items-center flex orders-table'>
              <h2 className='font-semibold text-2xl'>Sin datos para mostrar</h2>
            </section>
          ) : orders?.length > 0 ? (
            <PlanningOrdersTable orders={orders} />
          ) : (
            // <div className="flex justify-center py-5">
            <section className='justify-center items-center flex orders-table'>
              <div className='loader'></div>
              <span className='ml-3 text-primary font-semibold'>Cargando</span>
            </section>
          )}


          <div className="flex justify-end py-5">
            <Link to="/mp-pro/planning/plannings/">
              <button className="border border-slate-300 rounded w-64 h-12 text-base font-semibold mr-6">


                Cancelar
              </button>
            </Link>

            <button
              onClick={() => setOrdersPanelOpen(true)}
              className={`w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary ${
                notFound && 'cursor-not-allowed'
              }`}
              disabled={notFound ? true : false}
            >
              <span className='my-auto'>Continuar</span>

              <img
                src={icons.arrowRight}
                alt='icon-arrow-right'
                className='my-auto ml-3 text-white'
              />
            </button>
          </div>

          <div>
            <PlanningOrdersPanel
              ordersPanelOpen={ordersPanelOpen}
              setOrdersPanelOpen={setOrdersPanelOpen}
            />
          </div>
        </main>
      </section>
      </div>
    </Layout>
  );
};

export default PlanningOrders;