import { useState } from "react";
import Layout from "../components/Layout";
import icons from "../images/icon/icons";
import PlanningsTable from "../partials/planning/plannings/PlanningsTable";
import GroupsOptionsPanel from "../partials/planning/plannings/GroupsOptionsPanel";
import PlanningOrdersPanel from "../partials/planning/plannings/PlanningOrdersPanel";
import { useSelector } from "react-redux";
import { selectOrders } from "../store/slice/planningSlice";
import OptionsPanel from "../partials/planning/plannings/OptionsPanel";

function Planning() {
  const [groupOptionsPanel, setGroupOptionsPanel] = useState(false);
  const [ordersPanelOpen, setOrdersPanelOpen] = useState(false);
  const orders = useSelector(selectOrders);
  const [planningCapabilities, setPlanningCapabilities] = useState(false);
  const [chooseOption, setChooseOption] = useState(false);

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={"Planeación"}
      nameSubRoute={"Planeaciones"}
    >
      <div className="px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto">
        <div className="lg:px-8 mt-5">
          <PlanningsTable
            setGroupOptionsPanel={setGroupOptionsPanel}
            groupOptionsPanel={groupOptionsPanel}
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
            setPlanningCapabilities={setPlanningCapabilities}
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
      </div>
    </Layout>
  );
}

export default Planning;
