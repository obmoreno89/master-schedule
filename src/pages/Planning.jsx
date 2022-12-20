import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import PlanningOptions from '../partials/planning/plannings/PlanningOptions';

function Planning() {
  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={'Planeación'}
      nameSubRoute={'Planeaciones'}
    >
      <PlanningOptions />
    </Layout>
  );
}

export default Planning;
