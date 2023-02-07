import React from 'react';
import icons from '../../../images/icon/icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectDemandPlanning } from '../../../store/slice/demandPlanningOrdersSlice';

function DemandPlanningReportTableItem() {
  const dispatch = useDispatch();
  const demandPlanningList = useSelector(selectDemandPlanning);

  console.log(demandPlanningList);

  return (
    <>
      <table className='table-auto w-full table'>
        <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50 sticky top-0 z-40'>
          <tr>
            <th className='first:pl-5 cursor-pointer'>
              <p className='font-semibold text-left'>Item - Categoria</p>
            </th>
            <th className='py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Organización</p>
            </th>
            <th
              className='py-3 whitespace-nowrap cursor-pointer'
              //   onClick={() => {
              //     setOrderMin({ state: true, asc: !orderMin.asc });
              //   }}
            >
              <div className='flex items-center space-x-2 justify-center '>
                <div className='font-semibold '>Mínimo</div>
                {/* <img
                  src={orderMin.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                /> */}
              </div>
            </th>
            <th
              className='py-3 whitespace-nowrap'
              //   onClick={() => {
              //     setOrderMax({ state: true, asc: !orderMax.asc });
              //   }}
            >
              <div className='flex items-center space-x-2 justify-center'>
                <div className='font-semibold'>Máximo</div>
                {/* <img
                  src={orderMax.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                /> */}
              </div>
            </th>
            <th className='py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>On Hand</p>
            </th>
            <th className='py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Re Order QTY</p>
            </th>
            <th className='py-3 whitespace-nowrap'></th>
          </tr>
        </thead>

        <tbody className='text-sm divide-y divide-slate-200'>
          {demandPlanningList.map((order, index) => (
            <tr key={index}>
              <td className='px-2 first:pl-5 py-3 whitespace-nowrap md:w-1/6'>
                <span className='text-slate-400'>
                  {order.EMRPRODUCTIONLINE}
                </span>
                <p className='text-textTableItem font-medium '>{order.item}</p>
                <span className='text-primary'>{order.category}</span>
              </td>
              <td className='py-3 whitespace-nowrap'>
                <p className='text-center'>{order.org}</p>
              </td>
              <td className='py-3 whitespace-nowrap md:w-1/6'>
                <p className='font-medium capitalize text-center'>
                  {order.minimum_quantity === null
                    ? '0'
                    : parseInt(order.minimum_quantity)}
                </p>
              </td>
              <td className='py-3 whitespace-nowrap md:w-1/6'>
                <p className='font-medium text-center'>
                  {order.maximum_quantity === null
                    ? '0'
                    : parseInt(order.maximum_quantity)}
                </p>
              </td>
              <td className='py-3 whitespace-nowrap md:w-1/6'>
                <p className='text-center'>
                  {parseInt(order.on_hand_quantity)}
                </p>
              </td>
              <td className='py-3 whitespace-nowrap md:w-1/6'>
                <p className='text-center'>
                  {' '}
                  {parseInt(order.reorder_quantity)}
                </p>
              </td>
              <td className='py-3 whitespace-nowrap'>
                <button>
                  <img src={icons.pencilIcon} alt='Lapiz' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DemandPlanningReportTableItem;
