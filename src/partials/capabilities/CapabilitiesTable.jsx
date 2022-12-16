import React, { useEffect, useState } from 'react';
import CapabilitiesTableItem from './CapabilitiesTableItem';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  selectCapabilitiesList,
  getCapabilitiesList,
  setCapabilitiesList,
} from '../../store/slice/capabilitiesSlice';

const CapabilitiesTable = ({ setTransactionPanelOpen, setGroupPanelOpen }) => {
  const capabilitiesList = useSelector(selectCapabilitiesList);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCapabilitiesList());
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === '') {
      dispatch(getCapabilitiesList());
    } else {
      setSearch(e.target.value);
      filter(e.target.value);
    }
  };

  const filter = (searchTerm) => {
    let searchResult = [];
    searchResult = capabilitiesList.filter((element) => {
      if (
        element.product_line.name
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        element.product_line.group.name
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return element;
      }
    });
    dispatch(setCapabilitiesList(searchResult));
  };

  return (
    <div className='bg-white'>
      <form className='flex justify-end space-x-2'>
        <div className='relative'>
          <input
            className='form-input w-72'
            type='search'
            placeholder='Buscar...'
            value={search}
            onChange={handleSearch}
          />
        </div>
      </form>
      <div className='mt-6'>
        {capabilitiesList.length ? (
          <>
            <div className='overflow-x-auto rounded-xl border border-slate-300 h-[500px] overflow-auto'>
              <table className='table-auto w-full table'>
                {/* Table header */}
                <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
                  <tr>
                    <th className='px-2 first:pl-5 w-1/4'>
                      <div className='font-semibold text-left'>
                        Línea de productos
                      </div>
                    </th>
                    <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                      <p className='font-semibold text-left'>Tipo</p>
                    </th>
                    <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap '>
                      <p className='font-semibold text-left'>Grupo</p>
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
