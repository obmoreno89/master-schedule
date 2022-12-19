import { useState, useEffect } from "react";
import icons from "../../images/icon/icons";
import AddButtonForTable from "../../pages/component/AddButtonForTable";
import { orderGAsc, orderGDesc, orderPLAsc, orderPLDesc } from "./orderFunc";

function CapabilitiesProductListPanelTableItem({
  setOpenModalPL,
  currentPost,
  productLines,
  setPl,
}) {
  const [orderPL, setOrderPL] = useState({ state: false, asc: false });
  const [orderG, setOrderG] = useState({ state: false, asc: false });

  useEffect(() => {
    if (orderPL.state) {
      if (!orderPL.asc) {
        orderPLAsc(productLines, setPl, "productLine");
      } else {
        orderPLDesc(productLines, setPl, "productLine");
      }
    }
  }, [orderPL]);

  useEffect(() => {
    if (orderG.state) {
      if (!orderG.asc) {
        orderGAsc(productLines, setPl, "productLine");
      } else {
        orderGDesc(productLines, setPl, "productLine");
      }
    }
  }, [orderG]);
  return (
    <>
      <table className="table-auto w-full">
        {/* Table header */}
        <thead className="text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50">
          <tr>
            <th
              className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer"
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
            <th
              className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer"
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
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-slate-200">
          <AddButtonForTable
            buttonName="Nueva línea de producto"
            setOpenModalPL={setOpenModalPL}
            group={false}
          />
          {currentPost.map((pl, index) => (
            <tr key={index} className="text-textTableItem">
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="flex items-center">
                  <p className="capitalize">{pl.name}</p>
                </div>
              </td>
              <td className="px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-left font-bold ">{pl.group.name}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CapabilitiesProductListPanelTableItem;
