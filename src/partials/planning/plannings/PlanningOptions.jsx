import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import icons from "../../../images/icon/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroupList,
  selectGroup,
} from "../../../store/slice/capabilitiesSlice";

const PlanningOptions = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectGroup);
  const navigate = useNavigate();

  // console.log(groups)

  useEffect(() => {
    dispatch(getGroupList());
  }, []);

  useEffect(() => {
    setLetters(groups);
  }, [groups]);

  // const lettersDB = [
  //   { name: "A" },
  //   { name: "B" },
  //   { name: "C" },
  //   { name: "D" },
  //   { name: "E" },
  //   { name: "F" },
  //   { name: "G" },
  //   { name: "H" },
  //   { name: "I" },
  // ];

  // const [isChecked, setIsChecked] = useState(false)
  const [letters, setLetters] = useState([]);
  const [error, setError] = useState(false);
  const [all, setAll] = useState(false);

  useEffect(() => {
    setLetters(groups);
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 5000);
    }
  }, [error]);

  const handleNav = () => {
    navigate("/mp-pro/planning/orders");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = letters.filter((letter) => letter?.isChecked === true);
    if (data.length > 0) {
      console.log(data)
      navigate("/mp-pro/planning/orders");
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempLetter = letters.map((letter) => {
        return { ...letter, isChecked: checked };
      });
      setLetters(tempLetter);
      setAll(true);
    } else {
      let tempLetter = letters.map((letter) =>
        letter.group === name ? { ...letter, isChecked: checked } : letter
      );
      setLetters(tempLetter);
      setAll(false);
    }
  };

  // const onSubmit = (data) => console.log(data);

  // const onChangeAll = (data) => {
  //   console.log(data)
  // setIsChecked(!isChecked)
  // }

  // const onChangeEach = (data) => {
  //   console.log(data)
  // }

  // const selectAll = watch("selectAll");
  // console.log("selectAll", selectAll);

  //  useEffect(()=> {
  //   let defaultValues= {}
  //   defaultValues.selectAll = false;
  //   defaultValues.groups = false;

  //   reset({...defaultValues})
  //  }, [reset])

  return (
    // <section>
    //   <div>
    //     <h2 className="text-3xl font-semibold text-slate-900 mt-5">Selecciona los grupos a planear</h2>
    //   </div>
    //   <div className="mt-5 mb-7">
    //     <label className="flex items-center">
    //       <input
    //         type="checkbox"
    //         className="form-checkbox"
    //         {...register("selectAll")}
    //         value='all'
    //         checked={isChecked}
    //         onChange={onChangeAll}
    //       />
    //       <span className="text-base font-medium ml-2 text-black">Seleccionar todos</span>
    //     </label>
    //   </div>
    //   <div>
    //     {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter, index) => (
    //       <div key={index} className="mb-7">
    //         <label className="flex items-center">
    //           <input
    //             type="checkbox"
    //             className="form-checkbox"
    //             {...register('groups')}
    //             value={letter}

    //             checked={isChecked}
    //             onChange={onChangeEach}
    //           />
    //           <span className="text-base font-medium ml-2 text-black">{letter}</span>
    //         </label>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="flex justify-center">
    //     <button
    //       onClick={handleSubmit(onSubmit)}
    //       className="w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary "
    //     >
    //       <span className="my-auto">Continuar</span>

    //       <img src={icons.arrowRight} alt="icon-arrow-right" className="my-auto ml-3 text-white" />
    //     </button>
    //   </div>
    // </section>
    <section>
      <div>
        <h2 className="text-3xl font-semibold text-slate-900 pt-5 pb-3">
          Selecciona los grupos a planear
        </h2>
      </div>
      <form>
        <div className="h-[400px] 2xl:h-[500px] overflow-y-auto mb-8">
          <div className="mt-5 mb-7">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                name="allSelect"
                checked={
                  letters.filter((letter) => letter?.isChecked !== true)
                    .length < 1
                }
                onChange={handleChange}
              />
              <span className="text-base font-medium ml-2 text-black">
                Seleccionar todos
              </span>
            </label>
          </div>
          <div>
            {letters.map((letter, index) => (
              <div key={index} className="mb-7">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    name={letter?.group}
                    checked={letter?.isChecked || false}
                    onChange={handleChange}
                  />
                  <span className="text-base font-medium ml-2 text-black">
                    {letter.group}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            //onClick={handleSubmit(onSubmit)}
            onClick={onSubmit}
            className="w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-secondary hover:text-primary "
          >
            <span className="my-auto">Continuar</span>

            <img
              src={icons.arrowRight}
              alt="icon-arrow-right"
              className="my-auto ml-3 text-white"
            />
          </button>
        </div>
        {error && (
          <div className="flex justify-center mt-5">
            <span className="font-semibold text-red-600">
              Debe elegir al menos un grupo antes de continuar
            </span>
          </div>
        )}
      </form>
    </section>
  );
};

export default PlanningOptions;
