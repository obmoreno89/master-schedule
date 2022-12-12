import { useEffect } from 'react';
import AddButtonForTable from '../../pages/component/AddButtonForTable';
import FakeProductList from '../../pages/FakeProductList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPLines,
  getProductLines,
} from '../../store/slice/capabilitiesSlice.js';

function CapabilitiesProductListPanelTableItem({ setOpenModalPL }) {
  const dispatch = useDispatch();
  const productLines = useSelector(selectPLines);

  useEffect(() => {
    dispatch(getProductLines());
  }, [productLines]);

  return (
    <>
      <AddButtonForTable
        buttonName='Nueva línea de producto'
        setOpenModalPL={setOpenModalPL}
        group={false}
      />
      {productLines.map((pl, index) => (
        <tr key={index} className='text-textTableItem'>
          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <div className='flex items-center'>
              <p className='capitalize'>{pl.name}</p>
            </div>
          </td>
          <td className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
            <p className='text-left font-bold '>{pl.group.name}</p>
          </td>
        </tr>
      ))}
    </>
  );
}

export default CapabilitiesProductListPanelTableItem;
