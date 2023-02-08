import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DemandPlanningReportTableItem from './DemandPlanningReportTableItem';
import icons from '../../../images/icon/icons';
import ButtonLoading from '../../../helpers/ButtonLoading';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectDemandPlanning,
  postDemandPlanningOrders,
  selectDemandLoading,
} from '../../../store/slice/demandPlanningOrdersSlice';

function DemandPlanningReportTable() {
  const demandPlanningList = useSelector(selectDemandPlanning);
  const navigate = useNavigate();
  const loading = useSelector(selectDemandLoading);
  const dispatch = useDispatch();
  const [changeNumber, setchangeNumber] = useState(demandPlanningList);

  return (
    <>
      <section className='mb-5 flex justify-between'>
        <div className='mb-4 sm:mb-0'>
          <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Demanda de Planning Report
          </h1>
        </div>
      </section>

      {changeNumber.length > 0 ? (
        <>
          <section className='overflow-x-auto rounded-xl border border-slate-300 h-[550px]'>
            <DemandPlanningReportTableItem
              changeNumber={changeNumber}
              setchangeNumber={setchangeNumber}
            />
          </section>
          <div className='flex justify-end py-5'>
            <Link to='/mp-pro/planning/plannings/'>
              <button className='border border-slate-300 rounded w-64 h-12 text-base font-semibold mr-6'>
                Cancelar
              </button>
            </Link>
            {!loading ? (
              <button
                onClick={() =>
                  dispatch(postDemandPlanningOrders(changeNumber, navigate))
                }
                className={`w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary `}
              >
                <span className='my-auto'>Continuar</span>

                <img
                  src={icons.arrowRight}
                  alt='icon-arrow-right'
                  className='my-auto ml-3 text-white'
                />
              </button>
            ) : (
              <ButtonLoading loading='Enviando' demand={true} />
            )}
          </div>
        </>
      ) : (
        <section className='justify-center items-center flex orders-table'>
          <h2 className='font-semibold text-2xl'>Sin datos para mostrar</h2>
        </section>
      )}
    </>
  );
}

export default DemandPlanningReportTable;
