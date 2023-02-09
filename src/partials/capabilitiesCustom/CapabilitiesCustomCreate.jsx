import React from 'react';
import CapabilitiesCustomCreateForm from './CapabilitiesCustomCreateForm';

function CapabilitiesCustomCreate({
  setCapabilitiesCustomCreateOpenPanel,
  capabilitiesCustomCreateOpenPanel,
}) {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <CapabilitiesCustomCreateForm
            capabilitiesCustomCreateOpenPanel={
              capabilitiesCustomCreateOpenPanel
            }
            setCapabilitiesCustomCreateOpenPanel={
              setCapabilitiesCustomCreateOpenPanel
            }
          />
        </section>
      </div>
    </div>
  );
}

export default CapabilitiesCustomCreate;
