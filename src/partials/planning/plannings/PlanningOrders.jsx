import Layout from '../../../components/Layout';
import GetPlanningReportModal from '../../../pages/component/GetPlanningReportModal';
import icons from '../../../images/icon/icons';
import { useState } from 'react';
import PlanningOrdersTable from './PlanningOrdersTable';
import PlanningsCapabilitiesPanel from './PlanningsCapabilitiesPanel';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOrders,
  selectGroups,
  selectNotFound,
  selectOrders,
  selectPlanning,
} from '../../../store/slice/planningSlice';
import Loading from '../../../pages/component/Loading';

const PlanningOrders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ordersPanelOpen, setOrdersPanelOpen] = useState(false);
  const [getPlanningReportModalOpen, setGetPlanningReportModalOpen] =
    useState(false);
  const [planningCapabilities, setPlanningCapabilities] = useState(false);
  const orders = useSelector(selectOrders);
  const groups = useSelector(selectGroups);
  const notFound = useSelector(selectNotFound);
  const planning = useSelector(selectPlanning);

  useEffect(() => {
    const json = {
      group: planning?.group,
      criteria: [
        planning?.criteria[0],
        planning?.criteria[2],
        planning?.criteria[3],
        planning?.criteria[4],
      ],
    };
    //dispatch(getOrders(planning));
    console.log(planning);
    console.log(json);
    dispatch(getOrders(json));
  }, [groups]);

  useEffect(() => {
    if (groups.length === 0) {
      navigate('/mp-pro/planning/plannings/');
    }
  }, [groups]);

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={'Planeación'}
      nameSubRoute={'Ordenes'}
    >
      <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
        <section className='lg:px-8'>
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
                <h2 className='font-semibold text-2xl'>
                  Sin datos para mostrar
                </h2>
              </section>
            ) : orders?.length > 0 ? (
              <PlanningOrdersTable orders={orders} />
            ) : (
              <Loading />
            )}

            <div className='flex justify-end py-5'>
              <Link to='/mp-pro/planning/plannings/'>
                <button className='border border-slate-300 rounded w-64 h-12 text-base font-semibold mr-6'>
                  Cancelar
                </button>
              </Link>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setGetPlanningReportModalOpen(true);
                }}
                className={`w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary ${
                  (notFound || orders?.length === 0) && 'cursor-not-allowed'
                }`}
                disabled={notFound || orders?.length === 0 ? true : false}
              >
                <span className='my-auto'>Continuar</span>

                <img
                  src={icons.arrowRight}
                  alt='icon-arrow-right'
                  className='my-auto ml-3 text-white'
                />
              </button>
            </div>

            {/* DISABLED */}
            {/* <section>
              <PlanningsCapabilitiesPanel
                orders={orders}
                groups={groups}
                planningCapabilities={planningCapabilities}
                setPlanningCapabilities={setPlanningCapabilities}
                setOrdersPanelOpen={setOrdersPanelOpen}
              />
            </section> */}
          </main>
        </section>
      </div>
      <section>
        <GetPlanningReportModal
          getPlanningReportModalOpen={getPlanningReportModalOpen}
          setGetPlanningReportModalOpen={setGetPlanningReportModalOpen}
        />
      </section>
    </Layout>
  );
};

export default PlanningOrders;
