import React from "react";

const PlanningOrdersTable = () => {
  return (
    <>
      <div className="border border-slate-300 rounded-xl h-[440px] 2xl:h-[550px] overflow-x-auto">
        <table className="table-auto w-full table rounded-xl">
          {/* Table header */}
          <thead className="text-[14px] text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-2 first:pl-5 w-1/4">
                <div className="flex items-center space-x-10">
                  <div className="font-semibold text-left">Order</div>
                  {/* <img
                  src={orderPL.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                /> */}
                </div>
              </th>
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ">
                <p className="font-semibold text-left">Tipo de orden</p>
              </th>
              <th
                className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap "
                //   onClick={() => {
                //     setOrderG({ state: true, asc: !orderG.asc });
                //   }}
              >
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-left">Item</p>
                  {/* <img
                  src={orderG.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                /> */}
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
          {/* Table body */}
          <tbody className="text-sm divide-y divide-slate-200">
            {/* {capabilitiesList.map((data, index) => ( */}
            <tr
            //</tbody>key={index}
            >
              <td
                // onClick={(e) => {
                //   e.stopPropagation();
                //   setTransactionPanelOpen(true);
                // }}
                className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5"
              >
                <div className="flex flex-col">
                  <p className="font-medium capitalize text-slate-400 text-sm">
                    OD1342
                  </p>
                  <p className="text-textTableItem font-medium capitalize text-base">
                    Large customer name
                  </p>
                  <p className="text-primary font-medium capitalize text-sm">
                    Warehouse name
                  </p>
                  {/* <img src={icons.downArrow} alt="Flecha abajo" /> */}
                </div>
              </td>
              <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center font-semibold text-sm">IM</p>
              </td>
              <td
                // onClick={(e) => {
                //   e.stopPropagation();
                //   setGroupPanelOpen(true);
                // }}
                className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
              >
                <p className="text-center font-semibold text-sm">A</p>
                {/* <img src={icons.downArrow} alt="Flecha abajo" /> */}
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center text-sm">8</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center text-sm">0.5</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center text-sm">32</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-center text-sm">12/02/2022</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                <p className="text-center text-sm">12/02/2022</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                <p className="text-center text-sm">12/02/2022</p>
              </td>
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                <p className="text-center text-sm">12/02/2022</p>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlanningOrdersTable;
