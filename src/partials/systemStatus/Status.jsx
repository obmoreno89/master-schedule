import React, { useEffect, useState } from "react";
import status from "../../images/status.png";
import icons from "../../images/icon/icons";
import ToastStatus from "../../components/ToastStatus";
import { useSelector, useDispatch } from "react-redux";
import {
  getStatusList,
  selectStatusList,
  selectSyncUrl,
  sendUrl,
} from "../../store/slice/systemStatusSlice";
import Tooltip from "../../components/Tooltip";

function Status({ openStatusToast, setOpenStatusToast }) {
  const dispatch = useDispatch();
  const statusList = useSelector(selectStatusList);
  const syncUrl = useSelector(selectSyncUrl);
  const [syncChosen, setSyncChosen] = useState();

  useEffect(() => {
    dispatch(getStatusList());
  }, []);

  useEffect(() => {
    if (!syncUrl.isLoading && syncUrl.isSuccess) {
      dispatch(getStatusList());
    }
  }, [syncUrl]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const today = new Date();

    const newDateFinal = newDate.toLocaleDateString("es-ES");
    const todayFinal = today.toLocaleDateString("es-ES");

    if (newDateFinal === todayFinal) {
      return "hoy";
    } else {
      return newDateFinal;
    }
  };

  const formatHour = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleClick = (status) => {
    setSyncChosen(status.name);
    dispatch(sendUrl(status.url_to_activate));
    setOpenStatusToast(true);
    setTimeout(
      () => {
        setOpenStatusToast(false);
      },
      syncUrl.isError ? 6000 : 5000
    );
  };

  return (
    <>
      <section className="mb-5">
        <article>
          <h2 className="text-2xl md:text-3xl text-slate-800 font-bold">
            Estado del sistema
          </h2>
        </article>
        <figure className="flex justify-center items-center">
          <img className="w-[230px]" src={status} alt="server" />
        </figure>
      </section>
      <section className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4">
          {statusList?.map((status, index) => (
            <article
              key={index}
              className="border border-borderInput rounded w-[500px] flex justify-between p-3"
            >
              <div>
                <h2 className="font-semibold text-2xl">{status.name}</h2>
                <p className="text-sm ">
                  Ejecutado por ult. vez{" "}
                  {formatDate(status?.ORACLE_PROCESS_DATE_START)} a las{" "}
                  {formatHour(status?.ORACLE_PROCESS_DATE_START)}
                </p>
                <div className="flex">
                  <button
                    onClick={() => handleClick(status)}
                    className={`text-sm flex justify-center items-center space-x-2 mt-3 rounded h-6 w-[165px] ${
                      status?.is_active
                        ? "bg-green-50"
                        : "bg-slate-400 cursor-not-allowed"
                    }`}
                    disabled={status?.is_active ? false : true}
                  >
                    {status?.is_active ? (
                      <img src={icons.refresh} alt="Refresh" />
                    ) : (
                      <img src={icons.refreshGray} alt="Refresh" />
                    )}

                    <span
                      className={`font-semibold ${
                        status?.is_active ? "text-primary" : "text-slate-600"
                      }`}
                    >
                      Volver a sincronizar
                    </span>
                  </button>
                  {!status?.is_active && (
                    <Tooltip bg="dark" className="mt-4 ml-1">
                      <div className="text-sm font-medium text-slate-200">
                        Deshabilitado
                      </div>
                    </Tooltip>
                  )}

                  {syncUrl.isLoading && status.name === syncChosen && (
                    <div className="justify-center items-end flex ml-8">
                      <div className="loader w-5 h-5"></div>

                      <span className="ml-2 text-primary font-semibold text-xs">
                        Sincronizando...
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <figure>
                {status.is_active ? (
                  status.STATUS_CODE === "200" ? (
                    <img src={icons.check} alt="Success" />
                  ) : status.STATUS_CODE === "500" ? (
                    <img src={icons.warning} alt="Alerta" />
                  ) : (
                    <img src={icons.circleDown} alt="Peligro" />
                  )
                ) : (
                  <div className="bg-slate-400 rounded-[50%] p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-lock"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#5b636f"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <circle cx="12" cy="16" r="1" />
                      <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                  </div>
                )}
              </figure>
            </article>
          ))}
        </div>
      </section>
      <section className="flex justify-end relative top-14">
        {syncUrl.isError && (
          <ToastStatus
            type="error"
            open={openStatusToast}
            setOpen={setOpenStatusToast}
            className={"animate-bounce absolute"}
          >
            <span className="flex flex-col">
              Sincronizando interfaz{" "}
              <span className="font-medium w-72">
                Ocurrió un error, no se pudo sincronizar. Por favor intente
                nuevamente más tarde.
              </span>
            </span>
          </ToastStatus>
        )}

        {syncUrl.isSuccess && (
          <ToastStatus
            type="success"
            open={openStatusToast}
            setOpen={setOpenStatusToast}
            className={"animate-bounce absolute"}
          >
            <span className="flex flex-col">
              Sincronizando interfaz{" "}
              <span className="font-medium w-72">
                Te notificaremos por correo electrónico cuando el proceso
                finalice.
              </span>
            </span>
          </ToastStatus>
        )}
      </section>
    </>
  );
}

export default Status;
