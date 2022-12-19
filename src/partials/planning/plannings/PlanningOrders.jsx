import Layout from "../../../components/Layout";
import icons from "../../../images/icon/icons";
import PlanningOrdersPanel from "./PlanningOrdersPanel";
import { useState } from "react";

const PlanningOrders = ({}) => {
  const [ordersPanelOpen, setOrdersPanelOpen] = useState(false);

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={"Planeación"}
      nameSubRoute={"Planeaciones"}
    >
      <section>
        <header>
          <h2>Órdenes a planear</h2>
        </header>
        <main>
          <table>tabla</table>

          <div>
            <button>Cancelar</button>
            <button onClick={() => setOrdersPanelOpen(true)}>Continuar</button>
          </div>
          <div>
            <PlanningOrdersPanel
              ordersPanelOpen={ordersPanelOpen}
              setOrdersPanelOpen={setOrdersPanelOpen}
            />
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default PlanningOrders;
