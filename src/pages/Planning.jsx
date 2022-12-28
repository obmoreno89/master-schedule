import Layout from "../components/Layout";
import icons from "../images/icon/icons";
import PlanningOptions from "../partials/planning/plannings/PlanningOptions";

function Planning() {
  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={"Planeación"}
      nameSubRoute={"Planeaciones"}
    >
        <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
      <div className="lg:px-8 mt-5">
        <PlanningOptions />
      </div>
      </div>
    </Layout>
  );
}

export default Planning;
