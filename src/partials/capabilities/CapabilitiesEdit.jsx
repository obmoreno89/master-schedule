import CapabilitiesEditForm from "./CapabilitiesEditForm";

const CapabilitiesEdit = ({
    capabilitiesEditOpen,
    setCapabilitiesEditOpen,
}) => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <CapabilitiesEditForm
            capabilitiesEditOpen={capabilitiesEditOpen}
            setCapabilitiesEditOpen={setCapabilitiesEditOpen}
          />
        </section>
      </div>
    </div>
  );
};

export default CapabilitiesEdit;