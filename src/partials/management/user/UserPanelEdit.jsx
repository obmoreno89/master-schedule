import React from 'react';
import UserPanelEditForm from './UserPanelEditForm';

const UserPanelEdit = ({ setUserPanelOpen }) => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <UserPanelEditForm setUserPanelOpen={setUserPanelOpen} />
        </section>
      </div>
    </div>
  );
};

export default UserPanelEdit;
