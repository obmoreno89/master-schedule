import React from 'react';
import LineRateCustomCreateForm from './LineRateCustomCreateForm';

function LineRateCustomCreate({
  setLineRateCustomCreateOpenPanel,
  LineRateCustomCreateOpenPanel,
}) {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <LineRateCustomCreateForm
            Line
            RateCustomCreateOpenPanel={LineRateCustomCreateOpenPanel}
            setLineRateCustomCreateOpenPanel={setLineRateCustomCreateOpenPanel}
          />
        </section>
      </div>
    </div>
  );
}

export default LineRateCustomCreate;
