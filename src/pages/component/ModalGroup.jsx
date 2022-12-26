import ModalBasic from '../../components/ModalBasic';
import { useForm } from 'react-hook-form';
import ButtonLoading from '../../helpers/ButtonLoading';
import { useSelector, useDispatch } from 'react-redux';
import {
  createGroup,
  selectLoading,
} from '../../store/slice/capabilitiesSlice';

function ModalGroup({ openModalGroup, setOpenModalGroup }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   let defaultValues = {};
  //   defaultValues.gName = openModalGroup?.data;
  //   defaultValues.gDesc = 'Grupo destinado para...';
  //   reset({ ...defaultValues });
  // }, [reset, openModalGroup]);

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const onSubmit = (data) => {
    dispatch(createGroup(data, setOpenModalGroup, reset));
  };

  return (
    <ModalBasic
      id='basic-modal'
      modalOpen={openModalGroup}
      setModalOpen={() => setOpenModalGroup(false)}
      title='Agregar grupo'
    >
      <div className='px-5 pt-1 pb-1'>
        <div className='text-sm'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-2 mb-5'>
              <label
                htmlFor='group'
                className='text-[14px] font-semibold leading-[17px] font-work'
              >
                Nombre del grupo
              </label>
              <input
                type='text'
                className='w-full form-input h-12'
                {...register('group', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                })}
              />
              {errors.group && (
                <span className='text-red-500 text-sm'>
                  {errors.group.message}
                </span>
              )}
            </div>
            <div className='space-y-2 mb-5'>
              <label
                htmlFor='comments'
                className='text-[14px] font-semibold leading-[17px]'
              >
                Descripción
              </label>
              <input
                type='text'
                className='w-full form-input h-12'
                {...register('comments', {
                  required: {
                    value: false,
                    message: 'El campo es requerido',
                  },
                })}
              />
              {errors.comments && (
                <span className='text-red-500 text-sm'>
                  {errors.comments.message}
                </span>
              )}
            </div>
            {!loading ? (
              <button
                type='submit'
                className='bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold'
              >
                Guardar grupo
              </button>
            ) : (
              <ButtonLoading loading='Creando' createGroup={true} />
            )}
          </form>
        </div>
      </div>
    </ModalBasic>
  );
}

export default ModalGroup;
