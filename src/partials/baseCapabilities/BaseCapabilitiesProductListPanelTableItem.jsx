import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import icons from '../../images/icon/icons';
import AddButtonForTable from '../../pages/component/AddButtonForTable';
import {
  setPLDelete,
  setPLEdit,
} from '../../store/slice/BaseCapabilitiesSlice';
import { orderGAsc, orderGDesc, orderPLAsc, orderPLDesc } from './orderFunc';

function BaseCapabilitiesProductListPanelTableItem({
  setOpenModalPL,
  currentPost,
  productLines,
  setPl,
  setOpenModalPLEdit,
  setOpenModalPLDelete,
}) {
  const dispatch = useDispatch();
  const [orderPL, setOrderPL] = useState({ state: false, asc: false });
  const [orderG, setOrderG] = useState({ state: false, asc: false });

  useEffect(() => {
    if (orderPL.state) {
      if (!orderPL.asc) {
        orderPLAsc(productLines, setPl, 'productLine');
      } else {
        orderPLDesc(productLines, setPl, 'productLine');
      }
    }
  }, [orderPL]);

  useEffect(() => {
    if (orderG.state) {
      if (!orderG.asc) {
        orderGAsc(productLines, setPl, 'productLine');
      } else {
        orderGDesc(productLines, setPl, 'productLine');
      }
    }
  }, [orderG]);
  return (
    <>
      <table className='table-auto w-full'>
        {/* Table header */}
        <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50 sticky top-0'>
          <tr>
            <th
              className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer w-2/4'
              onClick={() => {
                setOrderPL({ state: true, asc: !orderPL.asc });
              }}
            >
              <div className='flex items-center space-x-3'>
                <div className='font-semibold text-left'>
                  Línea de productos
                </div>
                <img
                  src={orderPL.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                />
              </div>
            </th>
            <th
              className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer w-1/4'
              onClick={() => {
                setOrderG({ state: true, asc: !orderG.asc });
              }}
            >
              <div className='flex items-center space-x-2'>
                <p className='font-semibold text-left'>Grupo</p>
                <img
                  src={orderG.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                />
              </div>
            </th>
            <th className='py-3 w-2/4'></th>
          </tr>
        </thead>
        <tbody className='text-sm divide-y divide-slate-200'>
          <AddButtonForTable
            buttonName='Nueva línea de producto'
            setOpenModalPL={setOpenModalPL}
            group={false}
          />
          {currentPost.map((pl, index) => (
            <tr key={index} className='text-textTableItem'>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <div className='flex items-center'>
                  <p className='capitalize'>{pl.name}</p>
                </div>
              </td>
              <td className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='text-left font-bold '>{pl.group.name}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <figure className='flex justify-end items-center space-x-3'>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(setPLEdit(pl));
                      setOpenModalPLEdit(true);
                    }}
                  >
                    <img src={icons.pencilIcon} alt='Lapiz' />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(setPLDelete(pl));
                      setOpenModalPLDelete(true);
                    }}
                  >
                    <img src={icons.garbageIcon} alt='Basura' />
                  </button>
                </figure>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BaseCapabilitiesProductListPanelTableItem;
