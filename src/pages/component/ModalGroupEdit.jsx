import ModalBasic from '../../components/ModalBasic';
import { useForm } from 'react-hook-form';
import ButtonLoading from '../../helpers/ButtonLoading';
import { useSelector, useDispatch } from 'react-redux';
import {
  editGroup,
  revertError,
  revertGroupEdit,
  selectError,
  selectGroupEdit,
  selectLoading,
} from '../../store/slice/BaseCapabilitiesSlice';
import { useEffect } from 'react';

function ModalGroupEdit({ openModalGroupEdit, setOpenModalGroupEdit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const groupFromTable = useSelector(selectGroupEdit);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(revertError());
      }, 4000);
    }
  }, [error]);

  useEffect(() => {
    let defaultValues = {};
    defaultValues.group = groupFromTable?.group;
    defaultValues.comments = groupFromTable?.comments;
    reset({ ...defaultValues });
  }, [reset, openModalGroupEdit]);

  const onSubmit = (data) => {
    dispatch(editGroup(data, groupFromTable.id, setOpenModalGroupEdit));
  };

  return (
    <ModalBasic
      id='basic-modal'
      modalOpen={openModalGroupEdit}
      setModalOpen={() => {
        dispatch(revertGroupEdit());
        setOpenModalGroupEdit(false);
      }}
      title='Editar grupo'
    >
      {openModalGroupEdit ? (
        groupFromTable && (
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
                    className='bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold hover:bg-green-500'
                  >
                    Editar grupo
                  </button>
                ) : (
                  <ButtonLoading loading='Creando' createGroup={true} />
                )}
                {error && (
                  <span className='text-red-600 text-sm font-bold'>
                    Ocurrió un error. Por favor vuelva a intentarlo.
                  </span>
                )}
              </form>
            </div>
          </div>
        )
      ) : (
        <p>Cargando</p>
      )}
    </ModalBasic>
  );
}

export default ModalGroupEdit;
