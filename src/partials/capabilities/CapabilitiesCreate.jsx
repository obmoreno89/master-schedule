import React from 'react';
import CapabilitiesCreateForm from './CapabilitiesCreateForm';

const CapabilitiesCreate = ({
  capabilitiesPanelOpen,
  setCapabilitiesOpenPanel,
}) => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <CapabilitiesCreateForm
            capabilitiesPanelOpen={capabilitiesPanelOpen}
            setCapabilitiesOpenPanel={setCapabilitiesOpenPanel}
          />
        </section>
      </div>
    </div>
  );
};

export default CapabilitiesCreate;
