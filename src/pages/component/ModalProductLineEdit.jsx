import ModalBasic from '../../components/ModalBasic';
import { useForm } from 'react-hook-form';
import ButtonLoading from '../../helpers/ButtonLoading';
import { useSelector, useDispatch } from 'react-redux';
import {
  revertGroupEdit,
  selectLoading,
  selectGroup,
  selectPLEdit,
  editPLine,
  selectError,
  revertError,
} from '../../store/slice/BaseCapabilitiesSlice';
import { useEffect } from 'react';

function ModalProductLineEdit({ openModalPLEdit, setOpenModalPLEdit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const groupList = useSelector(selectGroup);
  const plFromTable = useSelector(selectPLEdit);
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
    defaultValues.product_line = plFromTable?.name;
    defaultValues.group_id = plFromTable?.group?.id;
    reset({ ...defaultValues });
  }, [reset, openModalPLEdit]);

  const onSubmit = (data) => {
    dispatch(editPLine(data, plFromTable.id, setOpenModalPLEdit));
  };

  return (
    <ModalBasic
      id='basic-modal'
      modalOpen={openModalPLEdit}
      setModalOpen={() => {
        dispatch(revertGroupEdit());
        setOpenModalPLEdit(false);
      }}
      title='Editar línea de producto'
    >
      {openModalPLEdit ? (
        plFromTable && (
          <div className='px-5 pt-4 pb-1'>
            <div className='text-sm'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-2 -mt-3 mb-5'>
                  <label
                    htmlFor='product_line'
                    className='text-[14px] font-semibold leading-[17px]'
                  >
                    Nombre de la línea de producto
                  </label>
                  <input
                    type='text'
                    className='w-full form-input h-12 border-slate-100'
                    {...register('product_line', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}
                  />
                  {errors.product_line && (
                    <span className='text-red-500 text-sm'>
                      {errors.product_line.message}
                    </span>
                  )}
                </div>
                <div className='space-y-2 mb-6'>
                  <label
                    htmlFor='group_id'
                    className='text-[14px] font-semibold leading-[17px]'
                  >
                    Grupo asignado
                  </label>
                  <select
                    className='w-full form-select h-12 border-slate-100'
                    {...register('group_id', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}
                  >
                    <option value=''>Selecciona...</option>
                    {groupList.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.group}
                      </option>
                    ))}
                  </select>
                  {errors.group_id && (
                    <span className='text-red-500 text-sm'>
                      {errors.group_id.message}
                    </span>
                  )}
                </div>
                {!loading ? (
                  <button
                    type='submit'
                    className='bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold'
                  >
                    Editar línea de producto
                  </button>
                ) : (
                  <ButtonLoading loading='Enviando' />
                )}
                {error && (
                  <span className='text-red-500 text-sm font-bold'>
                    Ocurrió un error. Por favor vuelva a intentarlo.
                  </span>
                )}
              </form>
            </div>
          </div>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </ModalBasic>
  );
}

export default ModalProductLineEdit;
