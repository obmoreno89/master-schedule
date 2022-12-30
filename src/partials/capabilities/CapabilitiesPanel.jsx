import React, { useEffect, useRef } from 'react';
import Transition from '../../utils/Transition';
import CapabilitiesCreate from './CapabilitiesCreate';

function CapabilitiesPanel({
  capabilitiesPanelOpen,
  setCapabilitiesOpenPanel,
}) {
  const closeBtn = useRef(null);
  const panelContent = useRef(null);

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (
  //       !capabilitiesPanelOpen ||
  //       panelContent.current.contains(target) ||
  //       closeBtn.current.contains(target)
  //     )
  //       return;
  //     setCapabilitiesOpenPanel(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!capabilitiesPanelOpen || keyCode !== 27) return;
      setCapabilitiesOpenPanel(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, []);

  return (
    <>
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={capabilitiesPanelOpen}
        enter='transition ease-out duration-200'
        enterStart='opacity-0'
        enterEnd='opacity-100'
        leave='transition ease-out duration-200'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'
        aria-hidden='true'
      />
      <Transition
        id='panelG'
        className='fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6'
        role='dialog'
        aria-modal='true'
        show={capabilitiesPanelOpen}
        enter='transition ease-in-out duration-500'
        enterStart='opacity-0 translate-x-4'
        enterEnd='opacity-100 translate-x-0'
        leave='transition ease-in-out duration-500'
        leaveStart='opacity-100 translate-x-0'
        leaveEnd='opacity-0 translate-x-4'
      >
        <div
          ref={panelContent}
          className={` absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
            capabilitiesPanelOpen ? 'translate-x-' : 'translate-x-full'
          }`}
        >
          <div className='top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 w-full sm:w-[390px] h-screen'>
            <div className='flex justify-between'>
              <h2 className='mt-4 ml-4 w-48 font-bold text-black text-2xl'>
                Crear capacidad
              </h2>
              <button
                ref={closeBtn}
                onClick={() => setCapabilitiesOpenPanel(false)}
                className=' top-0 right-0 mt-4 mr-3 group p-1'
              >
                <svg
                  className='w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none'
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
                </svg>
              </button>
            </div>
            <section className='mb-5'>
              <CapabilitiesCreate
                setCapabilitiesOpenPanel={setCapabilitiesOpenPanel}
                capabilitiesPanelOpen={capabilitiesPanelOpen}
              />
            </section>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default CapabilitiesPanel;
