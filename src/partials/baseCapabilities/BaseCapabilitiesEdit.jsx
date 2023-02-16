import BaseCapabilitiesEditForm from './BaseCapabilitiesEditForm';

const BaseCapabilitiesEdit = ({
  baseCapabilitiesEditOpen,
  setbaseCapabilitiesEditOpen,
}) => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <BaseCapabilitiesEditForm
            baseCapabilitiesEditOpen={baseCapabilitiesEditOpen}
            setbaseCapabilitiesEditOpen={setbaseCapabilitiesEditOpen}
          />
        </section>
      </div>
    </div>
  );
};

export default BaseCapabilitiesEdit;
