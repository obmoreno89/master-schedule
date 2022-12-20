
import { useEffect, useState } from "react";
import icons from "../../images/icon/icons";
import AddButtonForTable from "../../pages/component/AddButtonForTable";
import { orderGAsc, orderGDesc } from "./orderFunc";


function CapabilitiesGroupPanelTableItem({
  setOpenModalGroup,
  groups,
  setGroup,
}) {
  const [orderG, setOrderG] = useState({ state: false, asc: false });

  useEffect(() => {
    if (orderG.state) {
      if (!orderG.asc) {
        orderGAsc(groups, setGroup, "groups");
      } else {
        orderGDesc(groups, setGroup, "groups");
      }
    }
  }, [orderG]);
  return (
    <>
      <table className="table-fixed w-full table">
        {/* Table header */}
        <thead className="text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50">
          <tr>
            <th
              className="px-5 py-3 w-1/4 cursor-pointer"
              onClick={() => {
                setOrderG({ state: true, asc: !orderG.asc });
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="font-semibold text-left">Grupo</div>
                <img
                  src={orderG.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                />
              </div>
            </th>
            <th className="px-5 py-3 w-full">
              <p className="font-semibold text-left">Comentarios</p>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-slate-200">
          <AddButtonForTable
            buttonName="Nuevo Grupo"
            group={true}
            setOpenModalGroup={setOpenModalGroup}
          />
          {groups.map((gr, index) => (
            <tr key={index} className="text-textTableItem">
              <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div className="flex items-center">
                  <p className="text-textTableItem capitalize font-semibold">
                    {gr.group}
                  </p>
                </div>
              </td>
              <td className="px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <p className="text-left truncate ">{gr.comments}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CapabilitiesGroupPanelTableItem;
