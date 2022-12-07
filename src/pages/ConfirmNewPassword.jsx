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
import { useEffect, useState } from "react";

function ConfirmNewPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    watch,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCorrect = useSelector(selectIsCorrect);
  const loading = useSelector(selectLoading);

  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);

  const submit = (data) => {
    if (data.password === data.password2) {
      dispatch(confirmNewPass(data, navigate));
    }
  };

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
            <div className="flex-1 w-[29rem] mx-auto">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link
                  className="relative flex justify-between w-full items-center"
                  to="/mp-pro/signin"
                  onClick={clearSessionStorage}
                >
                  <figure className="relative flex justify-between w-full items-center mt-10">
                    <img src={icons.logoNide} alt="Logo" className="w-36" />
                    {/* <div>
                      <img src={icons.logoMotors} alt="logo" className="w-14" />
                    </div> */}
                  </figure>
                </Link>
              </div>
            </div>

            <div className="mx-auto w-[29rem] mt-16">
              <h1 className="text-3xl text-slate-800 font-semibold mb-6">
                Restablece tu contraseña
              </h1>

              <form onSubmit={handleSubmit(submit)}>
                <div className="space-y-4">
                  <div className="relative mb-6">
                    <label
                      className="block text-sm font-semibold mb-1 text-black"
                      htmlFor="password"
                    >
                      Nueva contraseña:
                    </label>

                    <div className="focus-within:text-primary w-full h-12">
                      <input
                        maxLength="35"
                        className="form-input w-full h-12"
                        type={eye ? "text" : "password"}
                        autoComplete="off"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "El campo es requerido",
                          },
                        })}
                      />

                      <section className="relative">
                        <button
                          type="button"
                          className="absolute inset-2 -top-10 left-auto flex items-center mr-2"
                        >
                          {eye ? (
                            <img
                              onClick={toggleEye}
                              src={icons.openEye}
                              alt="Ojo abierto"
                            />
                          ) : (
                            <img
                              onClick={toggleEye}
                              src={icons.closedEye}
                              alt="Ojo cerrado"
                            />
                          )}
                        </button>
                      </section>
                    </div>
                    {errors.password && (
                      <span className="text-red-500 text-sm">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <label
                      className="block text-sm font-semibold mb-1 text-black"
                      htmlFor="password2"
                    >
                      Repite tu contraseña:
                    </label>

                    <div className="focus-within:text-primary w-full h-12">
                      <input
                        maxLength="35"
                        className="form-input w-full h-12"
                        type={eye ? "text" : "password"}
                        autoComplete="off"
                        {...register("password2", {
                          required: {
                            value: true,
                            message: "El campo es requerido",
                          },
                        })}
                      />

                      <section className="relative">
                        <button
                          type="button"
                          className="absolute inset-2 -top-10 left-auto flex items-center mr-2"
                        >
                          {eye ? (
                            <img
                              onClick={toggleEye}
                              src={icons.openEye}
                              alt="Ojo abierto"
                            />
                          ) : (
                            <img
                              onClick={toggleEye}
                              src={icons.closedEye}
                              alt="Ojo cerrado"
                            />
                          )}
                        </button>
                      </section>
                    </div>
                    {errors.password2 && (
                      <span className="text-red-500 text-sm">
                        {errors.password2.message}
                      </span>
                    )}
                    {watch("password2") !== watch("password") &&
                    getValues("password2") ? (
                      <span className="text-red-500 text-sm">
                        Las contraseñas no coinciden
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  {!loading ? (
                    <button
                      type="submit"
                      className="btn bg-primary hover:bg-secondary hover:text-primary text-white whitespace-nowrap font-bold w-full h-12"
                    >
                      Restablecer contraseña
                    </button>
                  ) : (
                    <ButtonLoading loading="Enviando" />
                  )}
                </div>
              </form>
              <footer className="pt-5 mt-6">
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
