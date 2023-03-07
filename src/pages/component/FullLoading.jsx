import icons from '../../images/icon/icons';
import GetMinMaxModal from './GetMinMaxModal';
import { useState, useEffect } from 'react';

function FullLoading() {
  const [getMinMaxModalOpen, setGetMinMaxModalOpen] = useState(false);

  useEffect(() => {
    setGetMinMaxModalOpen(true);
  }, []);

  return (
    <>
      <section>
        <GetMinMaxModal
          getMinMaxModalOpen={getMinMaxModalOpen}
          setGetMinMaxModalOpen={setGetMinMaxModalOpen}
        />
      </section>
      <div className='flex flex-col space-y-6 items-center justify-center min-h-screen'>
        <div className='flex justify-center relative top-10'>
          <img
            className='w-28 relative -top-60'
            src={icons.logoNide}
            alt='Logo'
          />
        </div>
        <div
          style={{ borderTopColor: 'transparent' }}
          className='w-8 h-8 border-4 border-primary rounded-full animate-spin'
        ></div>
        <div className='flex flex-col justify-center items-center'>
          <p className='ml-2 animate-pulse'>Generando planeación</p>
          <p className=''>Esto puede demorar algunos segundos...</p>
        </div>
        <div className='relative top-[234.4px] w-full h-6 bg-primary '></div>
      </div>
    </>
  );
}

export default FullLoading;
