import React, { useEffect, useState } from 'react';
import status from '../../images/status.png';
import icons from '../../images/icon/icons';
import ToastStatus from '../../components/ToastStatus';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStatusList,
  selectStatusList,
  selectSyncUrl,
  sendUrl,
} from '../../store/slice/systemStatusSlice';

function Status({ openStatusToast, setOpenStatusToast }) {
  const dispatch = useDispatch();
  const statusList = useSelector(selectStatusList);
  const syncUrl = useSelector(selectSyncUrl);
  const [syncChosen, setSyncChosen] = useState();

  useEffect(() => {
    dispatch(getStatusList());
  }, []);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const today = new Date();

    const newDateFinal = newDate.toLocaleDateString('es-ES');
    const todayFinal = today.toLocaleDateString('es-ES');

    if (newDateFinal === todayFinal) {
      return 'hoy';
    } else {
      return newDateFinal;
    }
  };

  const formatHour = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleClick = (status) => {
    setSyncChosen(status.name);
    dispatch(sendUrl(status.url_to_activate));
    setOpenStatusToast(true);
    setTimeout(
      () => {
        setOpenStatusToast(false);
      },
      syncUrl.isError ? 6000 : 5000
    );
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
                  Ejecutado por ult. vez{' '}
                  {formatDate(status?.ORACLE_PROCESS_DATE_START)} a las{' '}
                  {formatHour(status?.ORACLE_PROCESS_DATE_START)}
                </p>
                <div className='flex'>
                  <button
                    onClick={() => handleClick(status)}
                    className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'
                  >
                    <img src={icons.refresh} alt='Refresh' />
                    <span className='font-semibold text-primary'>
                      Volver a sincronizar
                    </span>
                  </button>
                  {syncUrl.isLoading && status.name === syncChosen && (
                    <div className='justify-center items-end flex ml-8'>
                      <div className='loader w-5 h-5'></div>

                      <span className='ml-2 text-primary font-semibold text-xs'>
                        Sincronizando...
                      </span>
                    </div>
                  )}
                </div>
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
      <section className='flex justify-end relative top-14'>
        {syncUrl.isError && (
          <ToastStatus
            type='error'
            open={openStatusToast}
            setOpen={setOpenStatusToast}
            className={'animate-bounce absolute'}
          >
            <span className='flex flex-col'>
              Sincronizando interfaz{' '}
              <span className='font-medium w-72'>
                Ocurrió un error, no se pudo sincronizar. Por favor intente
                nuevamente más tarde.
              </span>
            </span>
          </ToastStatus>
        )}

        {syncUrl.isSuccess && (
          <ToastStatus
            type='success'
            open={openStatusToast}
            setOpen={setOpenStatusToast}
            className={'animate-bounce absolute'}
          >
            <span className='flex flex-col'>
              Sincronizando interfaz{' '}
              <span className='font-medium w-72'>
                Te notificaremos por correo electrónico cuando el proceso
                finalice.
              </span>
            </span>
          </ToastStatus>
        )}
      </section>
    </>
  );
}

export default Status;
