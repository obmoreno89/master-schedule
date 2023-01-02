import React, { useEffect } from 'react';
import status from '../../images/status.png';
import icons from '../../images/icon/icons';
import ToastStatus from '../../components/ToastStatus';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStatusList,
  selectStatusList,
} from '../../store/slice/systemStatusSlice';

function Status({ openStatusToast, setOpenStatusToast }) {
  const dispatch = useDispatch();
  const statusList = useSelector(selectStatusList);

  useEffect(() => {
    dispatch(getStatusList());
  }, []);

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
          <img className='w-[230px]' src={status} alt='server' />
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
                <button
                  onClick={() => {
                    setOpenStatusToast(true);
                    setTimeout(() => {
                      setOpenStatusToast(false);
                    }, 5000);
                  }}
                  className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'
                >
                  <img src={icons.refresh} alt='Refresh' />
                  <span className='font-semibold text-primary'>
                    Volver a sincronizar
                  </span>
                </button>
              </div>
              <figure>
                {status.STATUS_CODE === '200' ? (
                  <img src={icons.check} alt='Success' />
                ) : status.STATUS_CODE === '500' ? (
                  <img src={icons.warning} alt='Alerta' />
                ) : (
                  <img src={icons.circleDown} alt='Peligro' />
                )}
              </figure>
            </article>
          ))}
        </div>
      </section>
      <section className='flex justify-end -mt-20'>
        <ToastStatus
          type='success'
          open={openStatusToast}
          setOpen={setOpenStatusToast}
          className={'animate-bounce'}
        >
          <span className='flex flex-col'>
            Sincronizando interfaz{' '}
            <span className='font-medium w-72'>
              Te notificaremos por correo electrónico cuando el proceso
              finalice.
            </span>
          </span>
        </ToastStatus>
      </section>
    </>
  );
}

export default Status;
