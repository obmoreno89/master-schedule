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

  const user = useSelector(selectUser);
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
        className="btn bg-secondary hover:bg-hover text-primary hover:text-white ml-3 font-bold"
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
                <figure className="relative flex justify-between w-full items-center mt-10">
                  <img src={icons.logoNide} alt="Logo" className="w-36" />
                  <figure>
                    <img src={icons.logoMotors} alt="logo" className="w-14" />
                  </figure>
                </figure>
              </section>
            </div>

            <div className="w-96 mx-auto px-1 py-8">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">
                Bienvenido de nuevo{" "}
                <p className="text-sm font-medium">
                  Ingresa tus credenciales para acceder al sistema MP Pro
                </p>
              </h1>

              {/* Form */}
              <form onSubmit={handleSubmit(submit)}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      className="form-input w-full"
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
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>

                    <div className="focus-within:text-primary ">
                      <input
                        maxLength="35"
                        className="form-input w-full"
                        type={eye ? "text" : "password"}
                        autoComplete="off"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "El campo es requerido",
                          },
                        })}
                      />

                      <section className="relative ">
                        <button
                          type="button"
                          className="absolute inset-2 -top-7 left-auto flex items-center"
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
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/mp-pro/reset-password"
                    >
                      ¿Olvidaste la contraseña?
                    </Link>
                  </div>
                  {handleButtonLogin()}
                </div>
              </form>

              <footer className="pt-5 mt-6 border-t border-slate-200">
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
