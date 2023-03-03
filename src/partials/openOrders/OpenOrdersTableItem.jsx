import { useSelector } from 'react-redux';
import Loading from '../../pages/component/Loading';
import { selectLoadFilter } from '../../store/slice/openOrdersSlice';

function OpenOrdersTableItem({ data, openOrdersDataFilter }) {
  const loadData = useSelector(selectLoadFilter);

  return loadData ? (
    <Loading />
  ) : openOrdersDataFilter.length > 0 ? (
    <Table data={openOrdersDataFilter} />
  ) : (
    <Table data={data} />
  );
}

const Table = ({ data }) => {
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const formatDate = (date) => {
    const newDate = new Date(date);

    const day = newDate.getDate().toString().padStart(2, '0');
    const month = monthNames[newDate.getMonth()];
    const year = newDate.getFullYear();

    const formattedDateTime = `${day}-${month}-${year}`;
    return formattedDateTime;
  };

  const formatCurrency = (num) => {
    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);

    return numberFormat.format(num);
  };

  return (
    <table className='table-auto w-full table rounded-xl'>
      <thead className='text-[14px] text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50 sticky top-0 z-10'>
        <tr>
          <th className='px-2 first:pl-5 w-1/4'>
            <div className='flex items-center space-x-10'>
              <div className='font-semibold text-left'>
                P. Line / Customer / Org
              </div>
            </div>
          </th>
          <th className='px-2 first:pl-5 w-1/4'>
            <div className='flex items-center space-x-10'>
              <div className='font-semibold text-left'>Order</div>
            </div>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
            <p className='font-semibold text-center'>Line No.</p>
          </th>

          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
            <p className='font-semibold text-center'>Group</p>
          </th>

          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
            <p className='font-semibold text-center'>Created Date</p>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='font-semibold text-center'>Order Type</p>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='font-semibold text-center'>Inventory Item</p>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='font-semibold text-center'>Quantity</p>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='font-semibold text-center'>Total Order</p>
          </th>
          {/* <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
            <p className='font-semibold text-center'>Request Date</p>
          </th> */}
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
            <p className='font-semibold text-center'>Schedule Ship Date</p>
          </th>
          <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5'>
            <p className='font-semibold text-center'>Promise Date</p>
          </th>
        </tr>
      </thead>
      <tbody className='text-sm divide-y divide-slate-200'>
        {data?.map((order, index) => (
          <tr key={index}>
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5'>
              <div className='flex flex-col'>
                <p className='font-medium capitalize text-slate-400 text-sm'>
                  {order.EMRPRODUCTIONLINE}
                </p>
                <p className='text-textTableItem font-medium capitalize text-base'>
                  {order.Customer}
                </p>
                <p className='text-primary font-medium capitalize text-sm'>
                  {order.Org}
                </p>
              </div>
            </td>
            <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-medium capitalize text-slate-400 text-sm'>
                {order.Order}
              </p>
            </td>
            <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-sm'>{order.LineNo}</p>
            </td>

            <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-sm'>{order.group}</p>
            </td>

            <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-sm'>
                {formatDate(order.CREATED_DATE)}
              </p>
            </td>

            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='text-sm text-center'>{order.Order_Type}</p>
            </td>
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='text-center text-sm'>{order.Inventory_Item}</p>
            </td>
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='text-center text-sm'>{order.OrdQty}</p>
            </td>
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='text-center text-sm'>
                {formatCurrency(order.TotalOrder)}
              </p>
            </td>
            {/* <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='text-center text-sm'>
                {formatDate(order.Request_Date)}
              </p>
            </td> */}
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-slate-400'>
              <p className='text-center text-sm'>
                {formatDate(order.Schedule_Ship_Date)}
              </p>
            </td>
            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap font-medium'>
              <p className='text-center text-sm'>
                {formatDate(order.Promise_Date)}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OpenOrdersTableItem;
