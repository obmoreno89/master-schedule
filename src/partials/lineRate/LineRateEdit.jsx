import LineRateEditForm from './LineRateEditForm';

const LineRateEdit = ({ LineRateEditOpen, setLineRateEditOpen }) => {
  return (
    <div className='bg-white'>
      <div className='mt-6 px-3'>
        <section>
          <LineRateEditForm
            LineRateEditOpen={LineRateEditOpen}
            setLineRateEditOpen={setLineRateEditOpen}
          />
        </section>
      </div>
    </div>
  );
};

export default LineRateEdit;
