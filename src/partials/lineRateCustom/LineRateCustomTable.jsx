import { useEffect, useState } from 'react';
import CapabilitesCustomTableItem from './LineRateCustomTableItem';
import Loading from '../../pages/component/Loading';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLineRateCustom,
  getLineRateCustom,
  selectReloadList,
  selectCapCustomSearch,
  setCapCustomSearch,
  revertCapCustSearch,
} from '../../store/slice/LineRateCustomSlice';

function LineRateCustomTable({
  setLineRateCustomCreateOpenPanel,
  setOpenModalLineRateCustomDelete,
  setLineRateCustomEditOpenPanel,
}) {
  const dispatch = useDispatch();
  const [LineRate, setLineRate] = useState(useSelector(selectLineRateCustom));
  const [startSearch, setStartSearch] = useState(false);
  const lineRateCustomList = useSelector(selectLineRateCustom);
  const reloadList = useSelector(selectReloadList);
  const searchItems = useSelector(selectCapCustomSearch);

  useEffect(() => {
    dispatch(getLineRateCustom());
  }, [reloadList]);

  useEffect(() => {
    setLineRate(lineRateCustomList);
  }, [lineRateCustomList, reloadList]);

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
      dispatch(setCapCustomSearch(result));
    } else {
      dispatch(revertCapCustSearch());
      setStartSearch(false);
    }
  };

  return (
    <>
      <div className='bg-white'>
        <div className='mt-6'>
          <section className='flex justify-between mb-5'>
            <div className='mb-4 sm:mb-0'>
              <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                Line Rate Custom
              </h1>
            </div>
            <div className='flex space-x-3'>
              <input
                className='form-input w-72'
                placeholder='Buscar por línea de productos y grupo...'
                type='search'
                onChange={handleSearch}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLineRateCustomCreateOpenPanel(true);
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
                <span>Crear capacidad custom</span>
              </button>
            </div>
          </section>
          {LineRate?.length > 0 ? (
            <>
              <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
                {!startSearch ? (
                  <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
                    <CapabilitesCustomTableItem
                      lineRateCustomList={LineRate}
                      setOpenModalLineRateCustomDelete={
                        setOpenModalLineRateCustomDelete
                      }
                      setLineRateCustomEditOpenPanel={
                        setLineRateCustomEditOpenPanel
                      }
                      setLineRate={setLineRate}
                    />
                  </div>
                ) : startSearch && searchItems.length > 0 ? (
                  <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
                    <CapabilitesCustomTableItem
                      lineRateCustomList={searchItems}
                      setOpenModalLineRateCustomDelete={
                        setOpenModalLineRateCustomDelete
                      }
                      setLineRateCustomEditOpenPanel={
                        setLineRateCustomEditOpenPanel
                      }
                      setLineRate={setLineRate}
                    />
                  </div>
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
    </>
  );
}

export default LineRateCustomTable;
