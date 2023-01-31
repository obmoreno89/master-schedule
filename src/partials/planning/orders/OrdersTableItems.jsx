import { useState, useEffect } from "react";
import icons from "../../../images/icon/icons";
import { orderNumAsc, orderNumDesc } from "../../capabilities/orderFunc";
import { useSelector } from "react-redux";
import { selectDataFiltered } from "../../../store/slice/ordersPlannedSlice";

function OrdersTableItems({ data, ordersList, setList }) {
  const [orderMax, setOrderMax] = useState({ state: false, asc: false });
  const [orderMin, setOrderMin] = useState({
    state: false,
    asc: false,
  });

  const dataFilter = useSelector(selectDataFiltered);

  useEffect(() => {
    if (orderMax.state) {
      if (!orderMax.asc) {
        orderNumAsc(ordersList, setList, "maximum_quantity");
      } else {
        orderNumDesc(ordersList, setList, "maximum_quantity");
      }
    }
  }, [orderMax]);

  useEffect(() => {
    if (orderMin.state) {
      if (!orderMin.asc) {
        orderNumAsc(ordersList, setList, "minimum_quantity");
      } else {
        orderNumDesc(ordersList, setList, "minimum_quantity");
      }
    }
  }, [orderMin]);

  const formatNumber = (num) => {
    if (num === null) {
      return 0;
    } else {
      return num;
    }
  };

  return (
    <>
      <table className="table-auto w-full table">
        <thead className="text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50">
          <tr>
            <th className="first:pl-5 cursor-pointer">
              <p className="font-semibold text-left">Item - Category</p>
            </th>
            <th
              className="py-3 whitespace-nowrap cursor-pointer"
              onClick={() => {
                setOrderMin({ state: true, asc: !orderMin.asc });
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="font-semibold">Minimun Quantity</div>
                <img
                  src={orderMin.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                />
              </div>
            </th>
            <th
              className="py-3 whitespace-nowrap"
              onClick={() => {
                setOrderMax({ state: true, asc: !orderMax.asc });
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="font-semibold">Maximun Quantity</div>
                <img
                  src={orderMax.asc ? icons.doubleDown : icons.doubleUp}
                  alt="Flecha abajo"
                  className="w-5"
                />
              </div>
            </th>
            <th className="py-3 whitespace-nowrap">
              <p className="font-semibold text-center">On Hand Quantity</p>
            </th>
            <th className="py-3 whitespace-nowrap">
              <p className="font-semibold text-center">Reorder Quantity</p>
            </th>
            <th className="py-3 whitespace-nowrap">
              <p className="font-semibold text-center">Org</p>
            </th>

            <th className="py-3 whitespace-nowrap px-2">
              <p className="font-semibold text-center">Progress</p>
            </th>
          </tr>
        </thead>
        {!dataFilter.length > 0 ? (
          <tbody className="text-sm divide-y divide-slate-200">
            {data?.map((item, index) => (
              <tr key={index}>
                <td className="px-2 first:pl-5 py-3 whitespace-nowrap md:w-1/6">
                  <p className="text-textTableItem font-medium capitalize">
                    {item?.item}
                  </p>
                  <span className="text-primary">{item?.category}</span>
                </td>
                <td className="py-3 whitespace-nowrap md:w-1/6">
                  <p className="font-medium capitalize text-center">
                    {formatNumber(item?.minimum_quantity)}
                  </p>
                </td>
                <td className="py-3 whitespace-nowrap md:w-1/6">
                  <p className="font-medium text-center">
                    {formatNumber(item?.maximum_quantity)}
                  </p>
                </td>
                <td className="py-3 whitespace-nowrap md:w-1/6">
                  <p className="text-center">{item?.on_hand_quantity}</p>
                </td>
                <td className="py-3 whitespace-nowrap md:w-1/6">
                  <p className="text-center">{item?.reorder_quantity}</p>
                </td>
                <td className="py-3 whitespace-nowrap">
                  <p className="text-center">{item?.org}</p>
                </td>
                <td className="py-3 whitespace-nowrap px-2">
                
                    <div className="mt-2 h-4 relative rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gray-200 absolute "></div>
                      <div
                        className="h-full bg-yellow-400 sm:bg-green-500 absolute"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody className="text-sm divide-y divide-slate-200">
            {dataFilter?.map((item, index) => (
              <tr key={index}>
                <td className="px-2 first:pl-5 py-3 whitespace-nowrap md:w-1/6">
                  <p className="text-textTableItem font-medium capitalize">
                    {item?.item}
                  </p>
                  <span className="text-primary">{item?.category}</span>
                </td>
                <td className="py-3 whitespace-nowrap md:w-1/6">
                  <p className="font-medium capitalize text-center">
                    {formatNumber(item?.minimum_quantity)}
                  </p>
                </td>
                <td className="py-3 whitespace-nowrap md:w-1/6">
                  <p className="font-medium text-center">
                    {formatNumber(item?.maximum_quantity)}
                  </p>
                </td>
                <td className="py-3 whitespace-nowrap md:w-1/6">
                  <p className="text-center">{item?.on_hand_quantity}</p>
                </td>
                <td className="py-3 whitespace-nowrap">
                  <p className="text-center">{item?.reorder_quantity}</p>
                </td>

                <td className="py-3 whitespace-nowrap">
                  <p className="text-center">{item?.org}</p>
                </td>
                <td className="py-3 whitespace-nowrap px-2">
                    <div className="mt-2 h-4 relative rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gray-200 absolute "></div>
                      <div
                        className="h-full sm:bg-green-500 absolute"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                 
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
}

export default OrdersTableItems;
