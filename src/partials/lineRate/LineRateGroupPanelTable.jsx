import React, { useEffect, useState } from 'react';
import LineRateGroupPanelTableItem from './LineRateGroupPanelTableItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGroup,
  getGroupList,
  setLineRateSearch,
  revertSearch,
  selectLineRateSearch,
  selectReload,
} from '../../store/slice/LineRateSlice.js';

const LineRateGroupPanelTable = ({
  setOpenModalGroup,
  setOpenModalGroupEdit,
  setOpenModalGroupDelete,
}) => {
  const [group, setGroup] = useState(useSelector(selectGroup));
  const [startSearch, setStartSearch] = useState(false);

  const dispatch = useDispatch();
  const searchItems = useSelector(selectLineRateSearch);
  const groups = useSelector(selectGroup);
  const reload = useSelector(selectReload);

  useEffect(() => {
    dispatch(getGroupList());
  }, [reload]);
  //groups

  useEffect(() => {
    setGroup(groups);
  }, [groups]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = group.filter((element) => {
        if (
          element.group
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return element;
        }
      });
      dispatch(setLineRateSearch(result));
    } else {
      dispatch(revertSearch());
      setStartSearch(false);
    }
  };

  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <div className='mb-3'>
          <input
            className='form-input w-full'
            placeholder='Buscar...'
            type='search'
            onChange={handleSearch}
          />
        </div>
        <div className='overflow-x-auto rounded-xl border border-slate-300 h-[500px]'>
          {!startSearch ? (
            <LineRateGroupPanelTableItem
              setOpenModalGroup={setOpenModalGroup}
              setOpenModalGroupEdit={setOpenModalGroupEdit}
              setOpenModalGroupDelete={setOpenModalGroupDelete}
              groups={group}
              setGroup={setGroup}
            />
          ) : startSearch && searchItems.length > 0 ? (
            <LineRateGroupPanelTableItem
              setOpenModalGroup={setOpenModalGroup}
              setOpenModalGroupEdit={setOpenModalGroupEdit}
              setOpenModalGroupDelete={setOpenModalGroupDelete}
              groups={searchItems}
              setGroup={setGroup}
            />
          ) : (
            <section className='justify-center items-center flex h-96'>
              <h2 className='font-semibold text-2xl'>Sin datos que mostrar</h2>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default LineRateGroupPanelTable;
