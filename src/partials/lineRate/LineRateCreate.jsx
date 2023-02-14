import React from 'react';
import LineRateCreateForm from './LineRateCreateForm';

const LineRateCreate = ({ LineRatePanelOpen, setLineRateOpenPanel }) => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <LineRateCreateForm
            LineRatePanelOpen={LineRatePanelOpen}
            setLineRateOpenPanel={setLineRateOpenPanel}
          />
        </section>
      </div>
    </div>
  );
};

export default LineRateCreate;
