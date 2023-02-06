import { useState, useEffect } from 'react';
import icons from '../../../images/icon/icons';
import { orderAsc, orderDesc } from '../../capabilities/orderFunc';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectdataFilter } from '../../../store/slice/filterSlice';

function OldVersionPlanningsTableItem({ data, listHistory, setList }) {
  const [orderId, setOrderId] = useState({ state: false, asc: false });
  const [orderPlaneador, setOrderPlaneador] = useState({
    state: false,
    asc: false,
  });

  const dataFilter = useSelector(selectdataFilter);

  useEffect(() => {
    if (orderId.state) {
      if (!orderId.asc) {
        orderAsc(listHistory, setList, 'planning_id');
      } else {
        orderDesc(listHistory, setList, 'planning_id');
      }
    }
  }, [orderId]);

  useEffect(() => {
    if (orderPlaneador.state) {
      if (!orderPlaneador.asc) {
        orderAsc(listHistory, setList, 'user_id__first_name');
      } else {
        orderDesc(listHistory, setList, 'user_id__first_name');
      }
    }
  }, [orderPlaneador]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES');
  };

  return (
    <>
      <table className='table-auto w-full table'>
        <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50 sticky top-0 z-40'>
          <tr>
            <th
              className='px-2 first:pl-5 cursor-pointer'
              onClick={() => {
                setOrderId({ state: true, asc: !orderId.asc });
              }}
            >
              <div className='flex items-center space-x-2'>
                <div className='font-semibold text-left'>ID de Planeación</div>
                <img
                  src={orderId.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                />
              </div>
            </th>
            <th
              className='px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer'
              onClick={() => {
                setOrderPlaneador({ state: true, asc: !orderPlaneador.asc });
              }}
            >
              <div className='flex items-center space-x-2'>
                <div className='font-semibold'>Planeador</div>
                <img
                  src={orderPlaneador.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                />
              </div>
            </th>
            <th className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Grupos planeados</p>
            </th>
            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Fecha de planeación</p>
            </th>

            <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
              <p className='font-semibold text-center'></p>
            </th>
          </tr>
        </thead>
        {!dataFilter.length > 0 ? (
          <tbody className='text-sm divide-y divide-slate-200'>
            {data?.map((item, index) => (
              <tr key={index}>
                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4'>
                  <p className='font-medium text-primary  capitalize'>
                    {item?.planning_id}
                  </p>
                </td>
                <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='text-left font-semibold'>
                    {item?.user_id__first_name} {item?.user_id__last_name}
                  </p>
                </td>
                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='text-center'>{item?.selected_groups}</p>
                </td>
                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='text-center'>
                    {formatDate(item?.created_date)}
                  </p>
                </td>

                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <figure className='flex justify-end items-center'>
                    <Link
                      onClick={() => {
                        const json = {
                          first_name: item.user_id__first_name,
                          last_name: item.user_id__last_name,
                          created_date: item.created_date,
                          selected_groups: item.selected_groups,
                          last_update: item.last_update,
                        };
                        sessionStorage.setItem(
                          'planningId',
                          JSON.stringify(json)
                        );
                      }}
                      to={`/mp-pro/planning/plannings/gantt/${item.id}`}
                    >
                      <img src={icons.play} alt='play' />
                    </Link>
                  </figure>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody className='text-sm divide-y divide-slate-200'>
            {dataFilter?.map((item, index) => (
              <tr key={index}>
                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/5 lg:w-1/4'>
                  <p className='font-medium text-primary  capitalize'>
                    {item?.planning_id}
                  </p>
                </td>
                <td className='px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='text-left font-semibold'>
                    {item?.user_id__first_name} {item?.user_id__last_name}
                  </p>
                </td>
                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='text-center'>{item?.selected_groups}</p>
                </td>
                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='text-center'>
                    {formatDate(item?.created_date)}
                  </p>
                </td>

                <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <figure className='flex justify-end items-center'>
                    <Link
                      onClick={() => {
                        const json = {
                          first_name: item.user_id__first_name,
                          last_name: item.user_id__last_name,
                          created_date: item.created_date,
                          selected_groups: item.selected_groups,
                          last_update: item.last_update,
                        };
                        sessionStorage.setItem(
                          'planningId',
                          JSON.stringify(json)
                        );
                      }}
                      to={`/mp-pro/planning/plannings/gantt/${item.id}`}
                    >
                      <img src={icons.play} alt='play' />
                    </Link>
                  </figure>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
}

export default OldVersionPlanningsTableItem;
