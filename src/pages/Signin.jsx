import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../images/icon/icons";
import { useForm } from "react-hook-form";
import AuthImage from "../images/auth-image.jpg";
import ButtonLoading from "../helpers/ButtonLoading";
import ErrorMessage from "../helpers/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  sendData,
  selectIsCorrect,
  selectLoading,
} from "../store/slice/authSlice";

function Signin() {
  const dispatch = useDispatch();
  
  const isCorrect = useSelector(selectIsCorrect);
  const loading = useSelector(selectLoading);

  const navigate = useNavigate();

  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);

  const submit = (data) => {
    dispatch(sendData(data, navigate));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleButtonLogin = () => {
    return !loading ? (
      <button
        type="submit"
        className="btn bg-primary hover:bg-secondary text-white hover:text-primary font-semibold w-full h-12"
      >
        Iniciar sesión
      </button>
    ) : (
      <div>
        <ButtonLoading loading="Iniciando" />
      </div>
    );
  };

  const handleErrorMsg = () => {
    return (
      <>
        {isCorrect?.state === true && isCorrect?.code === 500 && (
          <ErrorMessage
            message="
              Error de servidor. Por favor vuelva a intentarlo más tarde."
          />
        )}
        {isCorrect?.state === true && isCorrect?.code === 400 && (
          <ErrorMessage
            message="
              Correo o contraseña incorrectos."
          />
        )}
        {isCorrect?.state === true && isCorrect?.code === 401 && (
          <ErrorMessage
            message="
            Correo o contraseña incorrectos."
          />
        )}
        {isCorrect?.state === true && isCorrect?.code === 404 && (
          <ErrorMessage
            message="
            Error de servidor. Por favor vuelva a intentarlo más tarde."
          />
        )}
      </>
    );
  };

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <section className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <figure className="relative flex justify-between w-[29rem] mx-auto items-center mt-10">
                  <img src={icons.logoNide} alt="Logo" className="w-36" />
                  {/* <figure>
                    <img src={icons.logoMotors} alt="logo" className="w-14" />
                  </figure> */}
                </figure>
              </section>
            </div>

            <div className="w-[29rem] mx-auto px-1 mt-14">
              <h1 className="text-3xl text-slate-800 font-semibold mb-6">
                Hola de nuevo{" "}
                <p className="text-sm font-normal">
                  Inicia sesión para acceder al sistema MP Pro
                </p>
              </h1>

              {/* Form */}
              <form onSubmit={handleSubmit(submit)}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1 text-black"
                      htmlFor="email"
                    >
                      Correo:
                    </label>
                    <input
                      id="email"
                      className="form-input w-full h-12"
                      type="text"
                      autoComplete="off"
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
                  <div className="relative">
                    <label
                      className="block text-sm font-semibold mb-1 text-black"
                      htmlFor="password"
                    >
                      Contraseña:
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
                </div>
                <div className="flex flex-col mt-1">
                  <div className="text-right mb-8">
                    <Link
                      className="text-sm font-semibold text-black"
                      to="/mp-pro/reset-password"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  {handleButtonLogin()}
                </div>
              </form>

              <footer className="pt-5 mt-6">
                {handleErrorMsg()}
              </footer>
            </div>
          </div>
        </div>
        <div
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
        </div>
      </div>
    </main>
  );
}

export default Signin;
