import { useState } from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import PlanningsTable from '../partials/planning/plannings/PlanningsTable';
import GroupsOptionsPanel from '../partials/planning/plannings/GroupsOptionsPanel';
import PlanningOrdersPanel from '../partials/planning/plannings/PlanningOrdersPanel';
import { useSelector } from 'react-redux';
import { selectOrders } from '../store/slice/planningSlice';
import OptionsPanel from '../partials/planning/plannings/OptionsPanel';
import GroupOptionsGanttPanel from '../partials/planning/plannings/GroupOptionsGanttPanel';
import OrdersAndMinMaxPanel from '../partials/planning/plannings/OrdersAndMinMaxPanel';
import ModalOracleExport from './component/ModalOracleExport';

function Planning() {
  const [groupOptionsPanel, setGroupOptionsPanel] = useState(false);
  const [ordersPanelOpen, setOrdersPanelOpen] = useState(false);
  const orders = useSelector(selectOrders);
  const [planningLineRate, setPlanningLineRate] = useState(false);
  const [chooseOption, setChooseOption] = useState(false);
  const [groupsOptionGanttPanelOpen, setGroupsOptionGanttPanelOpen] =
    useState(false);
  const [ordersAndMinMaxPanelOpen, setOrdersAndMinMaxPanelOpen] =
    useState(false);
  const [modalOracleExport, setModalOracleExport] = useState(false);

  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={'Planeación'}
        nameSubRoute={'Planeaciones'}
      >
        <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
          <div className='lg:px-8 mt-5'>
            <PlanningsTable
              setGroupOptionsPanel={setGroupOptionsPanel}
              groupOptionsPanel={groupOptionsPanel}
              setGroupsOptionGanttPanelOpen={setGroupsOptionGanttPanelOpen}
              setOrdersAndMinMaxPanelOpen={setOrdersAndMinMaxPanelOpen}
              setModalOracleExport={setModalOracleExport}
            />
          </div>
          <section>
            <GroupsOptionsPanel
              groupOptionsPanel={groupOptionsPanel}
              setGroupOptionsPanel={setGroupOptionsPanel}
              setOrdersPanelOpen={setOrdersPanelOpen}
            />
          </section>
          <section>
            <PlanningOrdersPanel
              ordersPanelOpen={ordersPanelOpen}
              setOrdersPanelOpen={setOrdersPanelOpen}
              setChooseOption={setChooseOption}
              setPlanningLineRate={setPlanningLineRate}
              orders={orders}
            />
          </section>

          <section>
            <OptionsPanel
              chooseOption={chooseOption}
              setChooseOption={setChooseOption}
              setOrdersPanelOpen={setOrdersPanelOpen}
            />
          </section>
          <section>
            <GroupOptionsGanttPanel
              groupsOptionGanttPanelOpen={groupsOptionGanttPanelOpen}
              setGroupsOptionGanttPanelOpen={setGroupsOptionGanttPanelOpen}
            />
          </section>
          <section>
            <OrdersAndMinMaxPanel
              ordersAndMinMaxPanelOpen={ordersAndMinMaxPanelOpen}
              setOrdersAndMinMaxPanelOpen={setOrdersAndMinMaxPanelOpen}
              setGroupOptionsPanel={setGroupOptionsPanel}
            />
          </section>
          <section>
            <ModalOracleExport
              setModalOracleExport={setModalOracleExport}
              modalOracleExport={modalOracleExport}
            />
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Planning;
