import React from 'react';
import CapabilitiesCustomEditForm from './CapabilitiesCustomEditForm';

function CapabilitiesCustomEdit({
  setCapabilitiesCustomEditOpenPanel,
  capabilitiesCustomEditOpenPanel,
}) {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <CapabilitiesCustomEditForm
            setCapabilitiesCustomEditOpenPanel={
              setCapabilitiesCustomEditOpenPanel
            }
            capabilitiesCustomEditOpenPanel={capabilitiesCustomEditOpenPanel}
          />
        </section>
      </div>
    </div>
  );
}

export default CapabilitiesCustomEdit;
