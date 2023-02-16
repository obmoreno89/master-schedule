import React, { useEffect, useState } from 'react';
import BaseCapabilitiesTableItem from './BaseCapabilitiesTableItem';
import BaseCapabilitiesPanel from './BaseCapabilitiesPanel';
import icons from '../../images/icon/icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBaseCapabilitiesList,
  getBaseCapabilitiesList,
  setBaseCapabilitiesSearch,
  revertSearch,
  selectBaseCapabilitiesSearch,
  selectReloadCap,
  getBaseCapabilitiesFile,
} from '../../store/slice/BaseCapabilitiesSlice';
import Loading from '../../pages/component/Loading';
import BaseCapabilitiesEditPanel from './BaseCapabilitiesEditPanel';

const BaseCapabilitiesTable = ({
  setTransactionPanelOpen,
  setGroupPanelOpen,
  setBaseCapabilitiesOpenPanel,
  baseCapabilitiesPanelOpen,
  baseCapabilitiesEditOpen,
  setbaseCapabilitiesEditOpen,
  setOpenModalCapDelete,
  setModalBaseCapabilitiesExportOpen,
}) => {
  const dispatch = useDispatch();
  const [LineRate, setLineRate] = useState(
    useSelector(selectBaseCapabilitiesList)
  );
  const [startSearch, setStartSearch] = useState(false);

  const baseCapabilitiesList = useSelector(selectBaseCapabilitiesList);
  const searchItems = useSelector(selectBaseCapabilitiesSearch);
  const reload = useSelector(selectReloadCap);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setStartSearch(true);
      let result = LineRate.filter((element) => {
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
      dispatch(setBaseCapabilitiesSearch(result));
    } else {
      dispatch(revertSearch());
      setStartSearch(false);
    }
  };

  useEffect(() => {
    dispatch(getBaseCapabilitiesList());
  }, [reload]);

  useEffect(() => {
    setLineRate(baseCapabilitiesList);
  }, [baseCapabilitiesList, reload]);

  return (
    <div className='bg-white'>
      <section>
        <BaseCapabilitiesPanel
          setBaseCapabilitiesOpenPanel={setBaseCapabilitiesOpenPanel}
          baseCapabilitiesPanelOpen={baseCapabilitiesPanelOpen}
        />
        <BaseCapabilitiesEditPanel
          baseCapabilitiesEditOpen={baseCapabilitiesEditOpen}
          setbaseCapabilitiesEditOpen={setbaseCapabilitiesEditOpen}
        />
      </section>
      <div className='mt-6'>
        <section className='flex justify-between mb-5'>
          <div className='mb-4 sm:mb-0'>
            <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
              Capacidades Base
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
                setModalBaseCapabilitiesExportOpen(true);
                dispatch(getBaseCapabilitiesFile());
              }}
              type='button'
              className='font-medium text-sm bg-white text-primary w-54 space-x-2 border border-primary rounded px-2 flex justify-center items-center hover:text-green-500 hover:border-green-500'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='19'
                height='19'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#009B4A'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='stroke-current text-gray-500'
              >
                <path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'></path>
                <polyline points='13 2 13 9 20 9'></polyline>
              </svg>
              <span>Exportar reporte (CSV) </span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBaseCapabilitiesOpenPanel(true);
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
        {LineRate?.length > 0 ? (
          <>
            <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
              {!startSearch ? (
                <BaseCapabilitiesTableItem
                  setTransactionPanelOpen={setTransactionPanelOpen}
                  setGroupPanelOpen={setGroupPanelOpen}
                  baseCapabilitiesList={LineRate}
                  setLineRate={setLineRate}
                  setbaseCapabilitiesEditOpen={setbaseCapabilitiesEditOpen}
                  setOpenModalCapDelete={setOpenModalCapDelete}
                />
              ) : startSearch && searchItems.length > 0 ? (
                <BaseCapabilitiesTableItem
                  setTransactionPanelOpen={setTransactionPanelOpen}
                  setGroupPanelOpen={setGroupPanelOpen}
                  baseCapabilitiesList={searchItems}
                  setLineRate={setLineRate}
                  setbaseCapabilitiesEditOpen={setbaseCapabilitiesEditOpen}
                  setOpenModalCapDelete={setOpenModalCapDelete}
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
            <Loading />
          </>
        )}
      </div>
    </div>
  );
};

export default BaseCapabilitiesTable;
