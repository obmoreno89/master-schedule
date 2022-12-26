import icons from '../images/icon/icons';
import Layout from '../components/Layout';
import Kpis from '../partials/dashboard/Kpis';

function Dashboard() {
  return (
    <Layout
      icon={icons.dashboardIcon}
      nameRoute={'Dashboard'}
      nameSubRoute={'Dashboard'}
    >
      <Kpis />
    </Layout>
  );
}

export default Dashboard;
