import ModalBasic from "../components/ModalBasic";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function ModalGroup({ openModalGroup, setOpenModalGroup }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.gName = openModalGroup?.data;
    defaultValues.gDesc = "Grupo destinado para...";
    reset({ ...defaultValues });
  }, [reset, openModalGroup]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <ModalBasic
      id="basic-modal"
      modalOpen={openModalGroup.state}
      setModalOpen={() => setOpenModalGroup({ state: false, data: null })}
      title="Agregar grupo"
    >
      {/* Modal content */}
      <div className="px-5 pt-4 pb-1">
        <div className="text-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 mb-5">
              <label
                htmlFor="gName"
                className="text-[14px] font-semibold leading-[17px] font-work"
              >
                Nombre del grupo
              </label>
              <input
                type="text"
                className="w-full h-[50px] rounded-[4px] border-1 border-slate-100"
                {...register("gName")}
              />
            </div>
            <div className="space-y-2 mb-5">
              <label
                htmlFor="gDesc"
                className="text-[14px] font-semibold leading-[17px]"
              >
                Descripción
              </label>
              <input
                type="text"
                className="w-full h-[50px] rounded-[4px] border-1 border-slate-100"
                {...register("gDesc")}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold"
              >
                Guardar grupo
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalBasic>
  );
}

export default ModalGroup;
