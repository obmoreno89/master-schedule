import { useState, useEffect } from 'react';
import icons from '../../../images/icon/icons';
import { orderAsc, orderDesc } from '../../capabilities/orderFunc';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectdataFilter } from '../../../store/slice/filterSlice';

function PlanningsTableItems(props) {
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [orderPlaneador, setOrderPlaneador] = useState({
    state: false,
    asc: false,
  });

  const dataFilter = useSelector(selectdataFilter);

  // useEffect(() => {
  //   if (orderPlaneador.state) {
  //     if (!orderPlaneador.asc) {
  //       orderAsc(listHistory, setList, 'user_id__first_name');
  //     } else {
  //       orderDesc(listHistory, setList, 'user_id__first_name');
  //     }
  //   }
  // }, [orderPlaneador]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES');
  };

  return (
    <>
      <tbody className='text-sm'>
        <tr className='border-b border-borderInput'>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='flex items-center '>{props.order_item}</div>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div>{props.user}</div>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='  text-center'>{props.order_quantity}</div>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='  text-center'>
              {formatDate(props.start_production_date)}
            </div>
          </td>

          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='text-center'>
              {formatDate(props.end_production_date)}
            </div>
          </td>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px '>
            <div className='flex items-center'>
              <button
                className={`text-slate-400 hover:text-slate-600 transform ${
                  descriptionOpen && 'rotate-180 duration-300'
                }`}
                aria-expanded={descriptionOpen}
                onClick={() => setDescriptionOpen(!descriptionOpen)}
              >
                <span className='sr-only'>Menu</span>
                <svg className='w-8 h-8 fill-current' viewBox='0 0 32 32'>
                  <path d='M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z' />
                </svg>
              </button>
            </div>
          </td>
        </tr>

        {props.dem_children.map((data, index) => (
          <tr key={index} className={`${!descriptionOpen && 'hidden'}`}>
            <td colSpan='10' className='px-0 py-3'>
              <div className='flex items-center bg-slate-50 border-l-8 border-primary px-8 py-3 -mt-3 space-x-[40px] shadow-inner'>
                <h2 className='flex flex-col text-textTableHeader text-xs font-semibold'>
                  Item
                  <span className='text-center font-normal'>
                    {data.dem_item}
                  </span>
                </h2>
                <h2 className='flex flex-col text-textTableHeader text-xs font-semibold '>
                  Order No.
                  <span className='text-center font-normal'>
                    {data.dem_order}
                  </span>
                </h2>
                <h2 className='flex flex-col text-textTableHeader text-xs font-semibold '>
                  Org
                  <span className='text-center font-normal'>
                    {data.dem_org}
                  </span>
                </h2>
                <h2 className='flex flex-col text-textTableHeader text-xs font-semibold '>
                  Quantity
                  <span className='text-center font-normal'>
                    {data.dem_qty}
                  </span>
                </h2>

                <h2 className='flex flex-col text-textTableHeader text-xs font-semibold '>
                  Schedule Ship Date
                  <span className='text-center font-normal'>
                    {formatDate(data.dem_ssd)}
                  </span>
                </h2>
                <h2 className='flex flex-col text-textTableHeader text-xs font-semibold '>
                  Start Date
                  <span className='text-center font-normal'>
                    {formatDate(data.dem_start_date)}
                  </span>
                </h2>
                <h2 className='flex flex-col text-textTableHeader text-xs font-semibold '>
                  End Date
                  <span className='text-center font-normal'>
                    {formatDate(data.dem_end_date)}
                  </span>
                </h2>
                <h2 className='flex flex-col text-textTableHeader text-xs font-semibold '>
                  Production Time
                  <span className='text-center font-normal'>
                    {data.dem_production_time}
                  </span>
                </h2>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default PlanningsTableItems;
