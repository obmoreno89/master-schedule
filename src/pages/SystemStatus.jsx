import { useState } from 'react';
import icons from '../images/icon/icons';
import Status from '../partials/systemStatus/Status';
import Layout from '../components/Layout';

const SystemStatus = () => {
  const [openStatusToast, setOpenStatusToast] = useState(false);

  return (
    <Layout
      icon={icons.administratorIcon}
      nameRoute={'Estado del Sistema'}
      nameSubRoute={'Interfaces'}
    >
      <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
        <div className='sm:flex sm:justify-between sm:items-center pb-4 md:pb-2'></div>

        <section className='lg:px-8 pt-3 pb-8'>
          <Status
            openStatusToast={openStatusToast}
            setOpenStatusToast={setOpenStatusToast}
          />
        </section>
      </div>
    </Layout>
  );
};

export default SystemStatus;
