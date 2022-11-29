import { useForm } from "react-hook-form";
import icons from "../images/icon/icons";
import AuthImage from "../images/auth-image.jpg";
import SuccessMessage from "../helpers/SuccessMessage";
import ButtonLoading from "../helpers/ButtonLoading";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsCorrect,
  selectIsCorrect,
  selectLoading,
  confirmNewPass,
} from "../store/slice/authSlice";
import { useEffect } from "react";

function ConfirmNewPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (data) => dispatch(confirmNewPass(data, navigate));
  const isCorrect = useSelector(selectIsCorrect);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (isCorrect) {
      reset();
    }
  }, [isCorrect]);

  const clearSessionStorage = () => {
    sessionStorage.clear();
    dispatch(setIsCorrect(false));
  };

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                  className="block"
                  to="/mp-pro/signin"
                  onClick={clearSessionStorage}
                >
                  <img src={icons.logoNide} alt="Logo" className="w-36" />
                </Link>
              </div>
            </div>

            <div className="max-w-sm mx-auto px-4 py-8">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">
                Ingresa la nueva contraseña
              </h1>

              <form onSubmit={handleSubmit(submit)}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Nueva contraseña <span className="text-rose-500">*</span>
                    </label>
                    <input
                      autoComplete="off"
                      className="form-input w-full"
                      type="password"
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
                <div className="flex justify-end mt-6">
                  {!loading ? (
                    <button
                      type="submit"
                      className="btn bg-secondary hover:bg-hover hover:text-white text-primary whitespace-nowrap font-bold"
                    >
                      Cambiar
                    </button>
                  ) : (
                    <ButtonLoading loading="Enviando" />
                  )}
                </div>
              </form>
              <footer className="pt-5 mt-6 border-t border-slate-200">
                {isCorrect && (
                  <SuccessMessage message="La contraseña se actualizó correctamente. Aguarde y será redirigido." />
                )}
              </footer>
            </div>
          </div>
        </div>

        <figure
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
        </figure>
      </div>
    </main>
  );
}

export default ConfirmNewPassword;
