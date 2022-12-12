import React, { useState, useEffect } from 'react';
import CapabilitiesProductListPanelTableItem from './CapabilitiesProductListPanelTableItem';
import PaginationNumeric from '../../components/PaginationNumeric';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPLines,
  getProductLines,
} from '../../store/slice/capabilitiesSlice.js';

const CapabilitiesProductListPanelTable = ({ setOpenModalPL }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(11);
  const dispatch = useDispatch();
  const productLines = useSelector(selectPLines);

  useEffect(() => {
    dispatch(getProductLines());
  }, [productLines]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = productLines.slice(firstPostIndex, lastPostIndex);
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
                    Lista de productos
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
                currentPost={currentPost}
              />
            </tbody>
          </table>
        </div>
        <section className='mt-8'>
          <PaginationNumeric
            totalPosts={productLines.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </section>
      </div>
    </div>
  );
};

export default CapabilitiesProductListPanelTable;
