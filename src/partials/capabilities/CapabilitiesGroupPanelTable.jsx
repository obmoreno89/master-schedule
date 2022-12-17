import React, { useEffect, useState } from 'react';
import CapabilitiesGroupPanelTableItem from './CapabilitiesGroupPanelTableItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGroup,
  getGroupList,
  selectReload,
} from '../../store/slice/capabilitiesSlice.js';

const CapabilitiesGroupPanelTable = ({ setOpenModalGroup }) => {
  const dispatch = useDispatch();
  const groups = useSelector(selectGroup);
  const reload = useSelector(selectReload);

  useEffect(() => {
    dispatch(getGroupList());
  }, [reload]);
  //groups

  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <div className='overflow-x-auto rounded-xl border border-slate-300 h-[700px]'>
          <table className='table-fixed w-full table'>
            {/* Table header */}
            <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
              <tr>
                <th className='px-5 py-3 w-1/4 '>
                  <div className='font-semibold text-left'>Grupo</div>
                </th>
                <th className='px-5 py-3 w-full'>
                  <p className='font-semibold text-left'>Comentarios</p>
                </th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-slate-200'>
              <CapabilitiesGroupPanelTableItem
                setOpenModalGroup={setOpenModalGroup}
                groups={groups}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesGroupPanelTable;
