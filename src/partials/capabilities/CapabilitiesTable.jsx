import React, { useEffect, useState } from 'react';
import CapabilitiesTableItem from './CapabilitiesTableItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCapabilitiesList,
  getCapabilitiesList,
  setCapabilitiesSearch,
  revertSearch,
  selectCapabilitiesSearch,
} from '../../store/slice/capabilitiesSlice';
import Loading from '../../pages/component/Loading';

const CapabilitiesTable = ({ setTransactionPanelOpen, setGroupPanelOpen }) => {
  const dispatch = useDispatch();
  const [capabilities, setCapabilities] = useState(
    useSelector(selectCapabilitiesList)
  );
  const [startSearch, setStartSearch] = useState(false);

  const capabilitiesList = useSelector(selectCapabilitiesList);
  const searchItems = useSelector(selectCapabilitiesSearch);

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
  }, []);

  useEffect(() => {
    setCapabilities(capabilitiesList);
  }, [capabilitiesList]);

  return (
    <div className='bg-white'>
      <div className='mt-6'>
        <section className='flex justify-between mb-5'>
          <div className='mb-4 sm:mb-0'>
            <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
              Capacidades
            </h1>
          </div>
          <input
            className='form-input w-72'
            placeholder='Buscar...'
            type='search'
            onChange={handleSearch}
          />
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
            {/* <section className='justify-center items-center flex h-96'>
              <h2 className='font-semibold text-2xl'>Sin datos que mostrar</h2>
            </section> */}
            <Loading />
          </>
        )}
      </div>
    </div>
  );
};

export default CapabilitiesTable;
