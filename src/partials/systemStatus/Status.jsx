import React, { useEffect } from 'react';
import status from '../../images/status.png';
import icons from '../../images/icon/icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStatusList,
  selectStatusList,
} from '../../store/slice/systemStatusSlice';

function Status() {
  const dispatch = useDispatch();
  const statusList = useSelector(selectStatusList);

  useEffect(() => {
    dispatch(getStatusList());
  }, []);

  console.log(statusList);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES');
  };

  return (
    <>
      <section className='mb-5'>
        <article>
          <h2 className='text-2xl md:text-3xl text-slate-800 font-bold'>
            Estado del sistema
          </h2>
        </article>
        <figure className='flex justify-center items-center'>
          <img src={status} alt='server' />
        </figure>
      </section>

      <section className='flex items-center justify-center'>
        <div className='grid grid-cols-2 gap-4'>
          {statusList?.map((status, index) => (
            <article
              key={index}
              className='border border-borderInput rounded w-[500px] flex justify-between p-3'
            >
              <div>
                <h2 className='font-semibold text-2xl'>{status.name}</h2>
                <p className='text-sm '>
                  Ejecutado por ult.{' '}
                  {formatDate(status?.ORACLE_PROCESS_DATE_START)}
                </p>
                <button className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'>
                  <img src={icons.refresh} alt='Refresh' />
                  <span className='font-semibold text-primary'>
                    Volver a sincronizar
                  </span>
                </button>
              </div>
              <figure>
                {status.STATUS_CODE === '200' ? (
                  <img src={icons.check} alt='Success' />
                ) : (
                  <img src={icons.warning} alt='Success' />
                )}
              </figure>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Status;
