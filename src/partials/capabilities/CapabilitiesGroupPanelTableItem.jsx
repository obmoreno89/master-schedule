import { useEffect } from "react";
import AddButtonForTable from '../../pages/component/AddButtonForTable';
import FakeGroup from '../../pages/FakeGroup';
import { useDispatch, useSelector } from "react-redux";
import {
  selectGroup,
  getGroupList,
} from "../../store/slice/capabilitiesSlice.js";

function CapabilitiesGroupPanelTableItem({setOpenModalGroup}) {

  const dispatch = useDispatch();
  const groups = useSelector(selectGroup);

  useEffect(() => {
    dispatch(getGroupList());
  }, []);

  return (
    <>
      <AddButtonForTable buttonName='Nuevo Grupo' group={true} setOpenModalGroup={setOpenModalGroup} />
      {groups.map((gr, index) => (
        <tr key={index} className="text-textTableItem">
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div className="flex items-center">
              <p className="text-textTableItem capitalize font-semibold">{gr.group}</p>
            </div>
          </td>
          <td className="px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <p className="text-left truncate ">{gr.comments}</p>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CapabilitiesGroupPanelTableItem;
