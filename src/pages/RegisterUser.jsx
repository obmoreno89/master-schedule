import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import ButtonLoading from "../helpers/ButtonLoading";
import ErrorMessage from "../helpers/ErrorMessage";
import SuccessMessage from "../helpers/SuccessMessage";
import {
  registerUser,
  revertAll,
  selectUserFail,
  selectUserIsOk,
  selectUserLoading,
} from "../store/slice/usersSlice";

function RegisterUser() {
  const dispatch = useDispatch();

  const isCorrect = useSelector(selectUserIsOk);
  const isWrong = useSelector(selectUserFail);
  const loading = useSelector(selectUserLoading);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isCorrect) {
      reset();
      setTimeout(() => dispatch(revertAll()), 5000);
    }
  }, [isCorrect]);

  const submitForm = (data) => {
    dispatch(registerUser(data));
  };

  const handleButtonLogin = () => {
    return !loading ? (
      <button className="btn bg-primary hover:bg-indigo-600 text-white">
        <svg
          className="w-4 h-4 fill-current opacity-50 shrink-0"
          viewBox="0 0 16 16"
        >
          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
        <span className="ml-2">Añadir usuario</span>
      </button>
    ) : (
      <div>
        <ButtonLoading loading="Creando" />
      </div>
    );
  };

  return (
    <Layout>
      <section>
        <header>
          <h2 className="text-2xl text-slate-800 font-bold mb-6 text-center">
            Registrar un nuevo usuario
          </h2>
        </header>
        <main>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="grid gap-5 md:grid-cols-2 md:w-[70%] md:mx-auto">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="first_name"
                >
                  Nombre: <span className="text-rose-500">*</span>
                </label>
                <input
                  id="first_name"
                  className="form-input w-full"
                  type="text"
                  autoFocus={true}
                  {...register("first_name", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="last_name"
                  >
                    Apellido: <span className="text-rose-500">*</span>
                  </label>
                </div>
                <input
                  id="last_name"
                  className="form-input w-full"
                  type="text"
                  {...register("last_name", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email: <span className="text-rose-500">*</span>
                </label>
                <input
                  id="mandatory"
                  className="form-input w-full"
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El formato no es correcto",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="password"
                >
                  Contraseña: <span className="text-rose-500">*</span>
                </label>

                <input
                  id="password"
                  className="form-input w-full"
                  type="text"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-5 md:w-[70%] md:mx-auto">
              {handleButtonLogin()}
              {/* <button className="btn bg-primary hover:bg-indigo-600 text-white">
                <svg
                  className="w-4 h-4 fill-current opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="ml-2">Añadir usuario</span>
              </button> */}
            </div>
          </form>
        </main>
        <footer>
          {isCorrect && (
            <SuccessMessage
              message="
                  Se añadió el usuario correctamente."
            />
          )}
          {isWrong && (
            <ErrorMessage
              message="
                  Ocurrió un error. Por favor verifique los datos ingresados."
            />
          )}
        </footer>
      </section>
    </Layout>
  );
}

export default RegisterUser;
