import icons from '../images/icon/icons';
import Layout from '../components/Layout';
import Kpis from '../partials/dashboard/Kpis';
import GanttPreview from '../partials/dashboard/GanttPreview';

function Dashboard() {
  return (
    <Layout
      icon={icons.dashboardIcon}
      nameRoute={'Dashboard'}
      nameSubRoute={'Dashboard'}
    >
      <Kpis />
      <section className='lg:px-8'>
        <GanttPreview />
      </section>
    </Layout>
  );
}

export default Dashboard;
