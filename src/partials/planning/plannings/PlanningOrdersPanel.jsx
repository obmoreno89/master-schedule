import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../../images/icon/icons";
import Transition from "../../../utils/Transition";

const PlanningOrdersPanel = ({ ordersPanelOpen, setOrdersPanelOpen }) => {
  const closeBtn = useRef(null);
  const panelContent = useRef(null);
  const navigate = useNavigate()

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (
  //       !groupPanelOpen ||
  //       panelContent.current.contains(target) ||
  //       closeBtn.current.contains(target)
  //     )
  //       return;
  //     setGroupPanelOpen(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!ordersPanelOpen || keyCode !== 27) return;
      setOrdersPanelOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const data = [
    { title: "Monto total de la orden", tag: "Ascendente" },
    { title: "Request Date", tag: "Fecha más lejana" },
    { title: "ETO", tag: "Orden Prioritario" },
    { title: "Schedule Ship Date", tag: "Orden Prioritario" },
    { title: "ACB Code", tag: "Ascendente" },
  ];

  const goToGantt = ()=> {
    navigate("/mp-pro/demo-gantt/")
  }

  return (
    <>
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={ordersPanelOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      <Transition
        id="panelG"
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={ordersPanelOpen}
        enter="transition ease-in-out duration-500"
        enterStart="opacity-0 translate-x-4"
        enterEnd="opacity-100 translate-x-0"
        leave="transition ease-in-out duration-500"
        leaveStart="opacity-100 translate-x-0"
        leaveEnd="opacity-0 translate-x-4"
      >
        <div
          ref={panelContent}
          className={`w-[480px] bg-white absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
            ordersPanelOpen ? "translate-x-" : "translate-x-full"
          }`}
        >
          <div className="top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 w-full h-screen">
            <h2 className="mt-4 ml-5 w-full font-bold text-black text-2xl">
              Elegir criterios de ordenamiento
            </h2>
            <button
              ref={closeBtn}
              onClick={() => setOrdersPanelOpen(false)}
              className="absolute top-1 right-0 mt-4 mr-3 group p-1"
            >
              <svg
                className="w-4 h-4 fill-slate-800 group-hover:fill-slate-600 pointer-events-none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z" />
              </svg>
            </button>

            <div className="mx-5 pt-4 2xl:pt-8">
              <div>
                {data.map((each, index) => (
                  <div
                    key={index}
                    className="border rounded border-slate-300 flex py-4 mb-4 cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6 fill-slate-300 my-auto mx-3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="4" y="5" width="16" height="2" />
                      <rect x="4" y="11" width="16" height="2" />
                      <rect x="4" y="17" width="16" height="2" />
                    </svg>
                    <div className="flex flex-col w-full">
                      <span className="text-base font-semibold text-black">
                        {each.title}
                      </span>
                      <div>
                        <span className="text-sm text-primary font-medium bg-secondary px-2 py-1 rounded">
                          {each.tag}
                        </span>
                      </div>
                    </div>
                    <div className="my-auto">
                      <img
                        src={icons.smallArrowRight}
                        alt="small-arrow-right"
                        className="mx-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={()=>goToGantt()} className="h-12 bg-primary text-white rounded w-full text-base font-semibold 2xl:mt-6 hover:bg-secondary hover:text-primary">
                Ir a la planeación de órdenes
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default PlanningOrdersPanel;
