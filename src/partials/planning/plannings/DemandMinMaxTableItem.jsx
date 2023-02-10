import React, { useState } from 'react';
import icons from '../../../images/icon/icons';
import { useDispatch } from 'react-redux';

function DemandMinMaxTableItem({ setchangeNumber, changeNumber }) {
  const [editFinalReorder, setEditFinalReorder] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => setInputValue(e.target.value);

  const onSubmit = (id) => {
    setchangeNumber(
      changeNumber?.map((data) => {
        if (data.id === id) {
          return { ...data, final_reorder_quantity: inputValue };
        }
        return data;
      })
    );
  };

  return (
    <>
      <table className='table-auto w-full table'>
        <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50 sticky top-0 z-40'>
          <tr>
            <th className='first:pl-5'>
              <p className='font-semibold text-left'>Item - Categoria</p>
            </th>
            <th className='py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Organización</p>
            </th>
            <th
              className='py-3 whitespace-nowrap '
              //   onClick={() => {
              //     setOrderMin({ state: true, asc: !orderMin.asc });
              //   }}
            >
              <div className='flex items-center space-x-2 justify-center '>
                <div className='font-semibold '>Mínimo</div>
                {/* <img
                  src={orderMin.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                /> */}
              </div>
            </th>
            <th
              className='py-3 whitespace-nowrap'
              //   onClick={() => {
              //     setOrderMax({ state: true, asc: !orderMax.asc });
              //   }}
            >
              <div className='flex items-center space-x-2 justify-center'>
                <div className='font-semibold'>Máximo</div>
                {/* <img
                  src={orderMax.asc ? icons.doubleDown : icons.doubleUp}
                  alt='Flecha abajo'
                  className='w-5'
                /> */}
              </div>
            </th>
            <th className='py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>On Hand</p>
            </th>
            <th className='py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>Re Order QTY</p>
            </th>
            <th className='py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'>
                Final Reorder Quantity
              </p>
            </th>
            <th className='py-3 whitespace-nowrap'>
              <p className='font-semibold text-center'></p>
            </th>
          </tr>
        </thead>

        <tbody className='text-sm divide-y divide-slate-200'>
          {changeNumber.map((order, index) => (
            <tr key={index}>
              <td className='px-2 first:pl-5 py-3 whitespace-nowrap md:w-1/6'>
                <span className='text-slate-400'>
                  {order.EMRPRODUCTIONLINE}
                </span>
                <p className='text-textTableItem font-medium '>{order.item}</p>
                <span className='text-primary'>{order.category}</span>
              </td>
              <td className='py-3 whitespace-nowrap'>
                <p className='text-center'>{order.org}</p>
              </td>
              <td className='py-3 whitespace-nowrap md:w-1/6'>
                <p className='font-medium capitalize text-center'>
                  {order.minimum_quantity === null
                    ? '0'
                    : parseInt(order.minimum_quantity)}
                </p>
              </td>
              <td className='py-3 whitespace-nowrap'>
                <p className='font-medium text-center'>
                  {order.maximum_quantity === null
                    ? '0'
                    : parseInt(order.maximum_quantity)}
                </p>
              </td>
              <td className='py-3 whitespace-nowrap md:w-1/6'>
                <p className='text-center'>
                  {parseInt(order.on_hand_quantity)}
                </p>
              </td>
              <td className='py-3 whitespace-nowrap '>
                <p className='text-center'>
                  {parseInt(order.reorder_quantity)}
                </p>
              </td>
              <td className='py-3 whitespace-nowrap text-center'>
                {editFinalReorder === order.id ? (
                  <form className='relative top-3'>
                    <input
                      className='form-input w-28 text-center'
                      type='text'
                      autoComplete='off'
                      onChange={onChange}
                      required
                    />
                    <div className='flex justify-center'>
                      <button
                        onClick={() => {
                          setEditFinalReorder(null);
                          onSubmit(order.id);
                        }}
                        type='button'
                      >
                        <img src={icons.confirm} alt='Confirmar' />
                      </button>
                      <button
                        type='button'
                        onClick={() => {
                          setEditFinalReorder(null);
                        }}
                      >
                        <img src={icons.cancel} alt='Cancelar' />
                      </button>
                    </div>
                  </form>
                ) : (
                  <p className='text-center'>
                    {parseInt(order.final_reorder_quantity)}
                  </p>
                )}
              </td>
              <td className='py-3 whitespace-nowrap'>
                {!editFinalReorder && (
                  <button
                    onClick={() => {
                      setEditFinalReorder(order.id);
                    }}
                  >
                    <img src={icons.pencilIcon} alt='Lapiz' />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DemandMinMaxTableItem;
