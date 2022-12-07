import ModalBasic from "../../components/ModalBasic";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function ModalProductLine({ openModalPL, setOpenModalPL }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.plName = openModalPL?.data;
    reset({ ...defaultValues });
  }, [reset, openModalPL]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <ModalBasic
      id="basic-modal"
      modalOpen={openModalPL.state}
      setModalOpen={()=>setOpenModalPL({state: false, data: null})}
      title="Agregar línea de producto"
    >
      {/* Modal content */}
      <div className="px-5 pt-4 pb-1">
        <div className="text-sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 mb-5">
              <label
                htmlFor="plName"
                className="text-[14px] font-semibold leading-[17px]"
              >
                Nombre de la línea de producto
              </label>
              <input
                type="text"
                className="w-full form-input h-12 border-slate-100"
                {...register("plName")}
              />
            </div>
            <div className="space-y-2 mb-5">
              <label
                htmlFor="plGroup"
                className="text-[14px] font-semibold leading-[17px]"
              >
                Grupo asignado
              </label>
              <select
                className="w-full form-select h-12 border-slate-100"
                {...register("plGroup")}
              >
                {["A", "B", "C", "D"].map((letter, index) => (
                  <option key={index} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-primary text-white w-full h-[51px] rounded-[4px] font-semibold"
            >
              Guardar línea de producto
            </button>
          </form>
        </div>
      </div>
    </ModalBasic>
  );
}

export default ModalProductLine;
