import React from 'react';
import BaseCapabilitiesCreateForm from './BaseCapabilitiesCreateForm';

const BaseCapabilitiesCreate = ({
  baseCapabilitiesPanelOpen,
  setBaseCapabilitiesOpenPanel,
}) => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <BaseCapabilitiesCreateForm
            baseCapabilitiesPanelOpen={baseCapabilitiesPanelOpen}
            setBaseCapabilitiesOpenPanel={setBaseCapabilitiesOpenPanel}
          />
        </section>
      </div>
    </div>
  );
};

export default BaseCapabilitiesCreate;
