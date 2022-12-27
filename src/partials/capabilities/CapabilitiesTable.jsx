import React, { useEffect, useState } from 'react';
import CapabilitiesTableItem from './CapabilitiesTableItem';
import CapabilitiesPanel from './CapabilitiesPanel';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectReload,
  selectCapabilitiesList,
  getCapabilitiesList,
  setCapabilitiesSearch,
  revertSearch,
  selectCapabilitiesSearch,
} from '../../store/slice/capabilitiesSlice';

const CapabilitiesTable = ({
  setTransactionPanelOpen,
  setGroupPanelOpen,
  setCapabilitiesOpenPanel,
  capabilitiesPanelOpen,
}) => {
  const dispatch = useDispatch();
  const [capabilities, setCapabilities] = useState(
    useSelector(selectCapabilitiesList)
  );
  const [startSearch, setStartSearch] = useState(false);

  const capabilitiesList = useSelector(selectCapabilitiesList);
  const searchItems = useSelector(selectCapabilitiesSearch);
  const reload = useSelector(selectReload);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = capabilities.filter((element) => {
        if (
          element.product_line.name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          element.product_line.group.name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          return element;
        }
      });
      dispatch(setCapabilitiesSearch(result));
    } else {
      dispatch(revertSearch());
      setStartSearch(false);
    }
  };

  useEffect(() => {
    dispatch(getCapabilitiesList());
  }, [reload]);

  useEffect(() => {
    setCapabilities(capabilitiesList);
  }, [capabilitiesList]);

  return (
    <div className='bg-white'>
      <section>
        <CapabilitiesPanel
          setCapabilitiesOpenPanel={setCapabilitiesOpenPanel}
          capabilitiesPanelOpen={capabilitiesPanelOpen}
        />
      </section>
      <div className='mt-6'>
        <section className='flex justify-between mb-5'>
          <div className='mb-4 sm:mb-0'>
            <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
              Capacidades
            </h1>
          </div>
          <div className='flex space-x-3'>
            <input
              className='form-input w-72'
              placeholder='Buscar...'
              type='search'
              onChange={handleSearch}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCapabilitiesOpenPanel(true);
              }}
              type='button'
              className='btn bg-primary text-white w-54 space-x-2'
            >
              <svg
                className='w-4 h-4 fill-current opacity-50 shrink-0'
                viewBox='0 0 16 16'
              >
                <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
              </svg>
              <span>Crear capacidad</span>
            </button>
          </div>
        </section>
        {capabilities?.length > 0 ? (
          <>
            <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
              {!startSearch ? (
                <CapabilitiesTableItem
                  setTransactionPanelOpen={setTransactionPanelOpen}
                  setGroupPanelOpen={setGroupPanelOpen}
                  capabilitiesList={capabilities}
                  setCapabilities={setCapabilities}
                />
              ) : startSearch && searchItems.length > 0 ? (
                <CapabilitiesTableItem
                  setTransactionPanelOpen={setTransactionPanelOpen}
                  setGroupPanelOpen={setGroupPanelOpen}
                  capabilitiesList={searchItems}
                  setCapabilities={setCapabilities}
                />
              ) : (
                <section className='justify-center items-center flex h-96'>
                  <h2 className='font-semibold text-2xl'>
                    Sin datos que mostrar
                  </h2>
                </section>
              )}
            </div>
          </>
        ) : (
          <>
            <section className='justify-center items-center flex h-96'>
              <h2 className='font-semibold text-2xl'>Sin datos que mostrar</h2>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default CapabilitiesTable;
