import React from 'react';
import UserPanelEditForm from './UserPanelEditForm';

const CapabilitiesGroupPanelTable = ({ first_name, last_name }) => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <UserPanelEditForm first_name={first_name} last_name={last_name} />
        </section>
      </div>
    </div>
  );
};

export default CapabilitiesGroupPanelTable;
