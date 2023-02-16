import React, { useEffect } from 'react';
import ModalBlank from '../../components/ModalBlank';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectGroups } from '../../store/slice/planningSlice';
import { getDemandList } from '../../store/slice/demandPlanningOrdersSlice';
import { generatePlanningFromSalesOrder } from '../../store/slice/planningSlice';

function GetMinMaxModal({
  setGetMinMaxModalOpen,
  getMinMaxModalOpen,
  setFullLoading,
  orders,
  groups,
}) {
  const navigate = useNavigate();
  const letter = useSelector(selectGroups);
  const dispatch = useDispatch();

  const goToGeneratePlanningFromSalesOrder = () => {
    const data = {
      orders: orders,
      selected_groups: groups,
      criteria: ['A'],
    };
    dispatch(generatePlanningFromSalesOrder(data, navigate));
  };

  return (
    <ModalBlank
      id='success-modal'
      modalOpen={getMinMaxModalOpen}
      setModalOpen={setGetMinMaxModalOpen}
    >
      <div className='p-5 flex space-x-4'>
        <div>
          {/* Modal header */}
          <div className='mb-2 flex justify-between items-center'>
            <div className='text-lg font-bold text-slate-800 w-72'>
              Demanda del planning report
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGetMinMaxModalOpen(false);
              }}
            >
              <svg
                className='w-5 h-5 fill-black group-hover:fill-slate-600 pointer-events-none'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
              </svg>
            </button>
          </div>
          {/* Modal content */}
          <div className='text-sm mb-10'>
            <div className='space-y-2'>
              <p>
                ¿Deseas agregar la consideración de la demanda del Planning
                Report a tu planeación?
              </p>
            </div>
          </div>
          {/* Modal footer */}
          <div className='flex justify-center items-center space-x-8'>
            <button
              onClick={() => {
                dispatch(
                  getDemandList(letter, navigate, setGetMinMaxModalOpen)
                );
              }}
              className='btn-lg bg-primary font-semibold text-white w-full hover:bg-green-500'
            >
              Si, agregar
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFullLoading(true);
                goToGeneratePlanningFromSalesOrder();
              }}
              className='btn-lg bg-red-600 hover:bg-red-500 font-semibold text-white w-full'
            >
              No, ignorar
            </button>
          </div>
        </div>
      </div>
    </ModalBlank>
  );
}

export default GetMinMaxModal;
