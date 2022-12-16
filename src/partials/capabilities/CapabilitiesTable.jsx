import React, { useEffect, useState } from 'react';
import CapabilitiesTableItem from './CapabilitiesTableItem';
import PaginationCapabilities from '../../components/PaginationCapabilities';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCapabilitiesList,
  getCapabilitiesList,
} from '../../store/slice/capabilitiesSlice';
import icons from '../../images/icon/icons';
import { orderGAsc, orderGDesc, orderPLAsc, orderPLDesc } from './orderFunc';

const CapabilitiesTable = ({ setTransactionPanelOpen, setGroupPanelOpen }) => {
  const [capabilities, setCapabilities] = useState(
    useSelector(selectCapabilitiesList)
  );
  const [orderPL, setOrderPL] = useState({ state: false, asc: false });
  const [orderG, setOrderG] = useState({ state: false, asc: false });

  const capabilitiesList = useSelector(selectCapabilitiesList);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCapabilitiesList());
  }, [capabilitiesList]);

  useEffect(() => {
    setCapabilities(capabilitiesList);
  }, [capabilitiesList]);

  useEffect(() => {
    if (orderPL.state) {
      if (!orderPL.asc) {
        orderPLAsc(capabilitiesList, setCapabilities);
      } else {
        orderPLDesc(capabilitiesList, setCapabilities);
      }
    }
  }, [orderPL]);

  useEffect(() => {
    if (orderG.state) {
      if (!orderG.asc) {
        orderGAsc(capabilitiesList, setCapabilities);
      } else {
        orderGDesc(capabilitiesList, setCapabilities);
      }
    }
  }, [orderG]);

  return (
    <div className='bg-white'>
      <div className='mt-6'>
        {capabilities?.length ? (
          <>
            <div className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
              <table className='table-auto w-full table'>
                {/* Table header */}
                <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
                  <tr>
                    <th
                      className='px-2 first:pl-5 w-1/4 cursor-pointer'
                      onClick={() => {
                        setOrderPL({ state: true, asc: !orderPL.asc });
                      }}
                    >
                      <div className='flex items-center space-x-10'>
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
                    <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                      <p className='font-semibold text-left'>Tipo</p>
                    </th>
                    <th
                      className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap cursor-pointer '
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
                    <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                      <p className='font-semibold text-center'>Pz/Hora</p>
                    </th>
                    <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                      <p className='font-semibold text-center'>Turno/Dia</p>
                    </th>
                    <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                      <p className='font-semibold text-center'>Pz/Dia</p>
                    </th>
                    <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-2/5'>
                      <p className='font-semibold text-center'>Comentario</p>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className='text-sm divide-y divide-slate-200'>
                  <CapabilitiesTableItem
                    setTransactionPanelOpen={setTransactionPanelOpen}
                    setGroupPanelOpen={setGroupPanelOpen}
                    capabilitiesList={capabilitiesList}
                  />
                </tbody>
              </table>
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
