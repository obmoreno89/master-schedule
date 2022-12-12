import React, { useEffect, useState } from 'react';
import CapabilitiesTableItem from './CapabilitiesTableItem';
import PaginationCapabilities from '../../components/PaginationCapabilities';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCapabilitiesList,
  getCapabilitiesList,
} from '../../store/slice/capabilitiesSlice';

const CapabilitiesTable = ({ setTransactionPanelOpen, setGroupPanelOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const capabilitiesList = useSelector(selectCapabilitiesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCapabilitiesList());
  }, [capabilitiesList]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = capabilitiesList.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='bg-white'>
      <div className='mt-6'>
        {capabilitiesList.length ? (
          <>
            <div className='overflow-x-auto rounded-xl border border-slate-300'>
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
                    capabilitiesList={currentPost}
                  />
                </tbody>
              </table>
            </div>
            <section className='mt-5'>
              <PaginationCapabilities
                totalPosts={capabilitiesList.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </section>
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
