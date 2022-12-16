import React, { useState, useEffect } from 'react';
import CapabilitiesProductListPanelTableItem from './CapabilitiesProductListPanelTableItem';
import PaginationProductList from '../../components/PaginationProductList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPLines,
  getProductLines,
} from '../../store/slice/capabilitiesSlice.js';

const CapabilitiesProductListPanelTable = ({ setOpenModalPL }) => {
  const [pl, setPl] = useState(useSelector(selectPLines));
  const dispatch = useDispatch();
  const productLines = useSelector(selectPLines);

  useEffect(() => {
    dispatch(getProductLines());
  }, []);
  //productLines

  useEffect(() => {
    setPl(productLines);
  }, [productLines]);

  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <div className='overflow-x-auto rounded-xl border border-slate-300'>
          <table className='table-auto w-full table'>
            {/* Table header */}
            <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
              <tr>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <div className='font-semibold text-left'>
                    Línea de productos
                  </div>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <p className='font-semibold text-left'>Grupo</p>
                </th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-slate-200'>
              <CapabilitiesProductListPanelTableItem
                setOpenModalPL={setOpenModalPL}
                currentPost={pl}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesProductListPanelTable;
