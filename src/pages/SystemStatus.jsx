import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import Status from '../partials/systemStatus/Status';

function SystemStatus() {
  return (
    <Layout
      icon={icons.systemStatusIcon}
      nameRoute={'Estado del sistema'}
      nameSubRoute={'Estado del sistema'}
    >
      <section className='mx-auto'>
        <h2 className='text-3xl font-semibold text-black'>
          Estado del sistema
        </h2>
      </section>
      <section className='h-screen mt-5'>
        <Status />
      </section>
    </Layout>
  );
}

export default SystemStatus;
