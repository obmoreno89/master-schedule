import ModalBasic from '../../components/ModalBasic';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../helpers/ButtonLoading';
import {
  getGroupList,
  selectGroup,
  createPLines,
  selectLoading,
} from '../../store/slice/BaseCapabilitiesSlice';

function ModalProductLine({ openModalPL, setOpenModalPL }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const groupList = useSelector(selectGroup);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    let defaultValues = {};
    defaultValues.product_line = '';
    defaultValues.group_id = '';
    reset({ ...defaultValues });
  }, [reset, openModalPL]);

  // useEffect(() => {
  //   let defaultValues = {};
  //   defaultValues.product_line = openModalPL?.data;
  //   reset({ ...defaultValues });
  // }, [reset, openModalPL]);

  const onSubmit = (data) => {
    dispatch(createPLines(data, setOpenModalPL, reset));
  };

  useEffect(() => {
    dispatch(getGroupList());
  }, [dispatch]);

  return (
    <ModalBasic
      id='basic-modal'
      modalOpen={openModalPL}
      setModalOpen={() => setOpenModalPL(false)}
      title='Agregar línea de producto'
    >
      {/* Modal content */}
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
                Guardar línea de producto
              </button>
            ) : (
              <ButtonLoading loading='Enviando' />
            )}
          </form>
        </div>
      </div>
    </ModalBasic>
  );
}

export default ModalProductLine;
