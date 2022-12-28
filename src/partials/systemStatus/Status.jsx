import React from 'react';
import status from '../../images/status.png';
import icons from '../../images/icon/icons';

function Status() {
  return (
    <>
      <article>
        <h2 className='text-2xl md:text-3xl text-slate-800 font-bold'>
          Estado del sistema
        </h2>
      </article>
      <figure className='flex justify-center items-center'>
        <img src={status} alt='server' />
      </figure>
      <section className='mt-8 flex justify-center space-x-5'>
        <article className='border border-borderInput rounded w-2/5 flex justify-between p-3'>
          <div>
            <h2 className='font-semibold text-2xl'>Servicio 1</h2>
            <p className='text-sm '>Ejecutado por ult. vez hoy a las 12:30</p>
            <button className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'>
              <img src={icons.refresh} alt='Refresh' />
              <span className='font-semibold text-primary'>
                Volver a sincronizar
              </span>
            </button>
          </div>
          <figure>
            <img src={icons.check} alt='Success' />
          </figure>
        </article>
        <article className='border border-borderInput rounded w-2/5 flex justify-between p-3'>
          <div>
            <h2 className='font-semibold text-2xl'>Servicio 1</h2>
            <p className='text-sm '>Ejecutado por ult. vez hoy a las 12:30</p>
            <button className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'>
              <img src={icons.refresh} alt='Refresh' />
              <span className='font-semibold text-primary'>
                Volver a sincronizar
              </span>
            </button>
          </div>
          <figure>
            <img src={icons.check} alt='Success' />
          </figure>
        </article>
      </section>
      <section className='mt-3 flex justify-center space-x-5'>
        <article className='border border-borderInput rounded w-2/5 flex justify-between p-3'>
          <div>
            <h2 className='font-semibold text-2xl'>Servicio 1</h2>
            <p className='text-sm '>Ejecutado por ult. vez hoy a las 12:30</p>
            <button className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'>
              <img src={icons.refresh} alt='Refresh' />
              <span className='font-semibold text-primary'>
                Volver a sincronizar
              </span>
            </button>
          </div>
          <figure>
            <img src={icons.warning} alt='Success' />
          </figure>
        </article>
        <article className='border border-borderInput rounded w-2/5 flex justify-between p-3'>
          <div>
            <h2 className='font-semibold text-2xl'>Servicio 1</h2>
            <p className='text-sm '>Ejecutado por ult. vez hoy a las 12:30</p>
            <button className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'>
              <img src={icons.refresh} alt='Refresh' />
              <span className='font-semibold text-primary'>
                Volver a sincronizar
              </span>
            </button>
          </div>
          <figure>
            <img src={icons.check} alt='Success' />
          </figure>
        </article>
      </section>
      <section className='mt-3 flex justify-center space-x-5'>
        <article className='border border-borderInput rounded w-2/5 flex justify-between p-3'>
          <div>
            <h2 className='font-semibold text-2xl'>Servicio 1</h2>
            <p className='text-sm '>Ejecutado por ult. vez hoy a las 12:30</p>
            <button className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'>
              <img src={icons.refresh} alt='Refresh' />
              <span className='font-semibold text-primary'>
                Volver a sincronizar
              </span>
            </button>
          </div>
          <figure>
            <img src={icons.circleDown} alt='Success' />
          </figure>
        </article>
        <article className='border border-borderInput rounded w-2/5 flex justify-between p-3'>
          <div>
            <h2 className='font-semibold text-2xl'>Servicio 1</h2>
            <p className='text-sm '>Ejecutado por ult. vez hoy a las 12:30</p>
            <button className='text-sm flex justify-center items-center space-x-2 mt-3 bg-green-50 rounded h-6 w-[165px]'>
              <img src={icons.refresh} alt='Refresh' />
              <span className='font-semibold text-primary'>
                Volver a sincronizar
              </span>
            </button>
          </div>
          <figure>
            <img src={icons.check} alt='Success' />
          </figure>
        </article>
      </section>
    </>
  );
}

export default Status;
