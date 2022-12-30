import { useState } from 'react';
import Layout from '../components/Layout';
import icons from '../images/icon/icons';
import PlanningsTable from '../partials/planning/plannings/PlanningsTable';
import GroupsOptionsPanel from '../partials/planning/plannings/GroupsOptionsPanel';

function Planning() {
  const [groupOptionsPanel, setGroupOptionsPanel] = useState(false);
  return (
    <Layout
      icon={icons.planningIcon}
      nameRoute={'Planeación'}
      nameSubRoute={'Planeaciones'}
    >
      <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto'>
        <div className='lg:px-8 mt-5'>
          <PlanningsTable
            setGroupOptionsPanel={setGroupOptionsPanel}
            groupOptionsPanel={groupOptionsPanel}
          />
        </div>
        <section>
          <GroupsOptionsPanel
            setGroupOptionsPanel={setGroupOptionsPanel}
            groupOptionsPanel={groupOptionsPanel}
          />
        </section>
      </div>
    </Layout>
  );
}

export default Planning;
