import Layout from "../../../components/Layout";
import icons from "../../../images/icon/icons";
import PlanningOrdersPanel from "./PlanningOrdersPanel";
import { useState } from "react";
import PlanningOrdersTable from "./PlanningOrdersTable";
import PlanningsCapabilitiesPanel from "./PlanningsCapabilitiesPanel";
import OptionsPanel from "./OptionsPanel";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrders,
  selectGroups,
  selectNotFound,
  selectOrders,
} from "../../../store/slice/planningSlice";
import Loading from "../../../pages/component/Loading";

const PlanningOrders = () => {
  const dispatch = useDispatch();
  const [ordersPanelOpen, setOrdersPanelOpen] = useState(false);
  const [planningCapabilities, setPlanningCapabilities] = useState(false);
  const orders = useSelector(selectOrders);
  const groups = useSelector(selectGroups);
  const notFound = useSelector(selectNotFound);

  useEffect(() => {
    const data = {
      group: groups.toString(),
    };
    dispatch(getOrders(data));
  }, [groups]);

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={"Planeación"}
      nameSubRoute={"Ordenes"}
    >
      <div className="px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto">
        <section className="lg:px-8">
          <header className="flex flex-1 py-5 justify-between">
            <h2 className="text-3xl font-semibold text-black my-auto">
              Órdenes a planear
            </h2>
            {!notFound && orders?.length > 0 && (
              <p className="my-auto mb-1 font-medium">
                Total de órdenes:{" "}
                <span className="font-bold text-primary">{orders?.length}</span>
              </p>
            )}
          </header>
          <main>
            {notFound ? (
              <section className="justify-center items-center flex orders-table">
                <h2 className="font-semibold text-2xl">
                  Sin datos para mostrar
                </h2>
              </section>
            ) : orders?.length > 0 ? (
              <PlanningOrdersTable orders={orders} />
            ) : (
              <Loading />
            )}

            <div className="flex justify-end py-5">
              <Link to="/mp-pro/planning/plannings/">
                <button className="border border-slate-300 rounded w-64 h-12 text-base font-semibold mr-6">
                  Cancelar
                </button>
              </Link>

              <button
                onClick={() => {
                  setPlanningCapabilities(true);
                }}
                className={`w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary ${
                  (notFound || orders?.length === 0) && "cursor-not-allowed"
                }`}
                disabled={notFound || orders?.length === 0 ? true : false}
              >
                <span className="my-auto">Continuar</span>

                <img
                  src={icons.arrowRight}
                  alt="icon-arrow-right"
                  className="my-auto ml-3 text-white"
                />
              </button>
            </div>

            <section>
              <PlanningsCapabilitiesPanel
                planningCapabilities={planningCapabilities}
                setPlanningCapabilities={setPlanningCapabilities}
                setOrdersPanelOpen={setOrdersPanelOpen}
              />
            </section>
          </main>
        </section>
      </div>
    </Layout>
  );
};

export default PlanningOrders;
