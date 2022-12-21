const PlanningOrdersTable = ({ orders }) => {
  const roundTotalOrder = (number) => {
    try {
      if (number.toString().includes(".")) {
        return number.toFixed(2);
      } else {
        return number;
      }
    } catch (err) {
      return number;
    }
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES");
  };

  return (
    <>
      <div className="border border-slate-300 rounded-xl h-[430px] 2xl:h-[500px] overflow-x-auto">
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
            {orders?.map((order, index) => (
              <tr key={index}>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5">
                  <div className="flex flex-col">
                    <p className="font-medium capitalize text-slate-400 text-sm">
                      {order.Order}
                    </p>
                    <p className="text-textTableItem font-medium capitalize text-base">
                      {order.Customer}
                    </p>
                    <p className="text-primary font-medium capitalize text-sm">
                      {order.Org}
                    </p>
                  </div>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">{order.Order_Type}</p>
                </td>
                <td className="px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="font-semibold text-sm">{order.Item_Name}</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">{order.OrdQty}</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-sm text-center">
                    {roundTotalOrder(order?.TotalOrder)}
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">{order.Pline}</p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <p className="text-center text-sm">
                    {formatDate(order?.Date_Ordered)}
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                    {formatDate(order?.Request_Date)}
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium">
                  <p className="text-center text-sm">
                    {formatDate(order?.Promise_Date)}
                  </p>
                </td>
                <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400">
                  <p className="text-center text-sm">
                    {formatDate(order?.Schedule_Ship_Date)}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlanningOrdersTable;
