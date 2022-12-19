import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const PlanningOptions = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/mp-pro/planning/orders");
  };

  const onSubmit = (data) => console.log(data);

  const selectAll = watch("selectAll");
  console.log("selectAll", selectAll);

  return (
    <section>
      <div>
        <h2>Selecciona los grupos a planear</h2>
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            {...register("selectAll")}
            value="all"
          />
          <span className="text-sm font-medium ml-2">Seleccionar todos</span>
        </label>
      </div>
      <div>
        {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter, index) => (
          <div key={index}>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                {...register(`${letter}`)}
                value={letter}
                //checked={selectAll ? selectAll : false}
              />
              <span className="text-sm font-medium ml-2">{letter}</span>
            </label>
          </div>
        ))}
      </div>
      <div>
        <button
          //onClick={handleSubmit(onSubmit)}
          onClick={handleNav}
        >
          Continuar
        </button>
      </div>
    </section>
  );
};

export default PlanningOptions;
