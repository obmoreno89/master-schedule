import { useNavigate } from "react-router-dom";

const PlanningOptions = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/mp-pro/planning/orders");
  };
  return (
    <section>
      <div>
        <h2>Selecciona los grupos a planear</h2>
      </div>
      <div>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-sm font-medium ml-2">Seleccionar todos</span>
        </label>
      </div>
      <div>
        {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter, index) => (
          <div key={index}>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-sm font-medium ml-2">{letter}</span>
            </label>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleNav}>Continuar</button>
      </div>
    </section>
  );
};

export default PlanningOptions;
