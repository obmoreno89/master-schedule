import { useState, useEffect } from "react";
import icons from "../../images/icon/icons";
import { orderGAsc, orderGDesc, orderPLAsc, orderPLDesc } from "./orderFunc";

const CapabilitiesTableItem = ({
  setTransactionPanelOpen,
  setGroupPanelOpen,
  capabilitiesList,
  setCapabilities,
}) => {
  const [orderPL, setOrderPL] = useState({ state: false, asc: false });
  const [orderG, setOrderG] = useState({ state: false, asc: false });

  useEffect(() => {
    if (orderPL.state) {
      if (!orderPL.asc) {
        orderPLAsc(capabilitiesList, setCapabilities, "capabilities");
      } else {
        orderPLDesc(capabilitiesList, setCapabilities, "capabilities");
      }
    }
  }, [orderPL]);

  useEffect(() => {
    if (orderG.state) {
      if (!orderG.asc) {
        orderGAsc(capabilitiesList, setCapabilities, "capabilities");
      } else {
        orderGDesc(capabilitiesList, setCapabilities, "capabilities");
      }
    }
  }, [orderG]);

  return (
    <>
      <table className="table-auto w-full table">
        {/* Table header */}
        <thead className="text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50">
          <tr>
            <th
              className="px-2 first:pl-5 w-1/4 cursor-pointer"
              onClick={() => {
                setOrderPL({ state: true, asc: !orderPL.asc });
              }}
            >
              <div className="flex items-center space-x-10">
                <div className="font-semibold text-left">
                  Línea de productos
                </div>
                <img
                  src={orderPL.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                />
              </div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
              <p className="font-semibold text-left">Tipo</p>
            </th>
            <th
              className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer "
              onClick={() => {
                setOrderG({ state: true, asc: !orderG.asc });
              }}
            >
              <div className="flex items-center space-x-2">
                <p className="font-semibold text-left">Grupo</p>
                <img
                  src={orderG.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                />
              </div>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
              <p className="font-semibold text-center">Pz/Hora</p>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
              <p className="font-semibold text-center">Turno/Dia</p>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
              <p className="font-semibold text-center">Pz/Dia</p>
            </th>
            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5">
              <p className="font-semibold text-center">Comentario</p>
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm divide-y divide-slate-200">
          {capabilitiesList.map((data, index) => (
            <tr key={index}>
              <td
                onClick={(e) => {
                  e.stopPropagation();
                  setTransactionPanelOpen(true);
                }}
                className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 cursor-pointer"
              >
                <div className="flex items-center space-x-10">
                  <p className="text-textTableItem font-medium  capitalize">
                    {data.product_line.name}
                  </p>
                  <img src={icons.downArrow} alt="Flecha abajo" />
                </div>
              </td>
              <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-left font-semibold">{data.type_name}</p>
              </td>
              <td
                onClick={(e) => {
                  e.stopPropagation();
                  setGroupPanelOpen(true);
                }}
                className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer flex space-x-3"
              >
                <p className="text-left font-semibold">
                  {data.product_line.group.name}
                </p>
                <img src={icons.downArrow} alt="Flecha abajo" />
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center">{data.piece_per_hour}</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center">{data.shift_per_day}</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center">{data.piece_per_day}</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center">{data.comments}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CapabilitiesTableItem;
