import Layout from "../../../components/Layout";
import icons from "../../../images/icon/icons";
import PlanningOrdersPanel from "./PlanningOrdersPanel";
import { useState } from "react";
import PlanningOrdersTable from "./PlanningOrdersTable";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, selectOrders } from "../../../store/slice/planningSlice";

const PlanningOrders = ({}) => {
  const dispatch = useDispatch()
  const [ordersPanelOpen, setOrdersPanelOpen] = useState(false);
  const orders = useSelector(selectOrders)

  useEffect(()=> {
    const data = {
      group: ["A"]
    }
    dispatch(getOrders(data))

  }, [])

  console.log(orders)

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={"Planeación"}
      nameSubRoute={"Planeaciones"}
    >
      <section>
        <header>
          <h2 className="text-3xl font-semibold text-black py-5">
            Órdenes a planear
          </h2>
        </header>
        <main>
          <PlanningOrdersTable />

          <div className="flex justify-end pt-7">
            <Link to="/mp-pro/planning/">
            <button className="border border-slate-300 rounded w-64 h-12 text-base font-semibold mr-6">
              Cancelar
            </button>
            </Link>
           
            <button
              onClick={() => setOrdersPanelOpen(true)}
              className="w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary "
            >
              <span className="my-auto">Continuar</span>

              <img
                src={icons.arrowRight}
                alt="icon-arrow-right"
                className="my-auto ml-3 text-white"
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
    </Layout>
  );
};

export default PlanningOrders;
