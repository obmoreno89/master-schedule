import Layout from "../../../components/Layout";
import icons from "../../../images/icon/icons";
import PlanningOrdersPanel from "./PlanningOrdersPanel";
import { useState } from "react";
import PlanningOrdersTable from "./PlanningOrdersTable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrders,
  selectGroups,
  selectNotFound,
  selectOrders,
} from "../../../store/slice/planningSlice";

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
      navigate("/mp-pro/planning/");
    }
  }, [groups]);

  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={"Planeación"}
      nameSubRoute={"Planeaciones"}
    >
      <section>
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
              <h2 className="font-semibold text-2xl">Sin datos para mostrar</h2>
            </section>
          ) : orders?.length > 0 ? (
            <PlanningOrdersTable orders={orders} />
          ) : (
            // <div className="flex justify-center py-5">
            <section className="justify-center items-center flex orders-table">
              <div className="loader"></div>
              <span className="ml-3 text-primary font-semibold">Cargando</span>
            </section>
          )}

          <div className="flex justify-end py-5">
            <Link to="/mp-pro/planning/">
              <button className="border border-slate-300 rounded w-64 h-12 text-base font-semibold mr-6">
                Cancelar
              </button>
            </Link>

            <button
              onClick={() => setOrdersPanelOpen(true)}
              className={`w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary ${
                notFound && "cursor-not-allowed"
              }`}
              disabled={notFound ? true : false}
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

/*
const Table = () => {
  return (
    <div className="border border-slate-300 rounded-xl orders-table overflow-x-auto">
        <table className="table-auto w-full table rounded-xl">
          <thead className="text-[14px] text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-2 first:pl-5 w-1/4">
                <div className="flex items-center space-x-10">
                  <div className="font-semibold text-left">Order</div>
                </div>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
                <p className="font-semibold text-center">Tipo de orden</p>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-center">Item</p>
                </div>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="font-semibold text-center">Cantidad</p>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="font-semibold text-center">Total de la orden</p>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="font-semibold text-center">Línea de producto</p>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
                <p className="font-semibold text-center">Order date</p>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
                <p className="font-semibold text-center">Request date</p>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5">
                <p className="font-semibold text-center">Promise date</p>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5">
                <p className="font-semibold text-center">Schedule Ship date</p>
              </th>
            </tr>
          </thead>

          <tbody className="text-sm divide-y divide-slate-200">
           
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      hola
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      hola
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                     hola
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">hola</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                   hola
                  </p>
                </td>
              </tr>

          
          </tbody>
        </table>
      </div>
  )
}
*/
