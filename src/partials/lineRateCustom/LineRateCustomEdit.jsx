import React from 'react';
import LineRateCustomEditForm from './LineRateCustomEditForm';

function LineRateCustomEdit({
  setLineRateCustomEditOpenPanel,
  LineRateCustomEditOpenPanel,
}) {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <LineRateCustomEditForm
            setLineRateCustomEditOpenPanel={setLineRateCustomEditOpenPanel}
            LineRateCustomEditOpenPanel={LineRateCustomEditOpenPanel}
          />
        </section>
      </div>
    </div>
  );
}

export default LineRateCustomEdit;
