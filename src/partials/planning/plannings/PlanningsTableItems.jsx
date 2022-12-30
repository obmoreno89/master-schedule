import { useState, useEffect } from "react";
import icons from "../../../images/icon/icons";
import { orderAsc, orderDesc } from "../../capabilities/orderFunc";

function PlanningsTableItems({ data, listHistory, setList }) {
  const [orderId, setOrderId] = useState({ state: false, asc: false });
  const [orderPlaneador, setOrderPlaneador] = useState({
    state: false,
    asc: false,
  });

  useEffect(() => {
    if (orderId.state) {
      if (!orderId.asc) {
        orderAsc(listHistory, setList, "planning_id");
      } else {
        orderDesc(listHistory, setList, "planning_id");
      }
    }
  }, [orderId]);

  useEffect(() => {
    if (orderPlaneador.state) {
      if (!orderPlaneador.asc) {
        orderAsc(listHistory, setList, "user_id__first_name");
      } else {
        orderDesc(listHistory, setList, "user_id__first_name");
      }
    }
  }, [orderPlaneador]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES");
  };

  return (
    <>
      <table className="table-auto w-full table">
        <thead className="text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50">
          <tr>
            {/* <th className="px-2 first:pl-5 cursor-pointer">
              <div className="flex items-center space-x-2">
                <div className="font-semibold text-left">ID de Planeación</div>
              </div>
            </th> */}
            <th
              className="px-2 first:pl-5 cursor-pointer"
              onClick={() => {
                setOrderId({ state: true, asc: !orderId.asc });
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="font-semibold text-left">ID de Planeación</div>
                <img
                  src={orderId.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                />
              </div>
            </th>
            {/* <th className="px-24 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer">
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-left">Planeador</p>
              </div>
            </th> */}
            <th
              className="px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer"
              onClick={() => {
                setOrderPlaneador({ state: true, asc: !orderPlaneador.asc });
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="font-semibold">Planeador</div>
                <img
                  src={orderPlaneador.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                />
              </div>
            </th>
            <th className="px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <p className="font-semibold text-center">Grupos planeados</p>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <p className="font-semibold text-center">Fecha de planeación</p>
            </th>

            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
              <p className="font-semibold text-center"></p>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-slate-200">
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4">
                <p className="font-medium text-primary  capitalize">
                  {item?.planning_id}
                </p>
              </td>
              <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-left font-semibold">
                  {item?.user_id__first_name} {item?.user_id__last_name}
                </p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center">{item?.selected_groups}</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center">{formatDate(item?.date)}</p>
              </td>

              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <figure className="flex justify-end items-center">
                  <button>
                    <img src={icons.play} alt="play" />
                  </button>
                </figure>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PlanningsTableItems;
