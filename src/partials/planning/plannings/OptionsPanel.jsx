import { useEffect, useRef, useState } from 'react';
import Transition from '../../../utils/Transition';
import icons from '../../../images/icon/icons';

const OptionsPanel = ({
  chooseOption,
  setChooseOption,
  setOrdersPanelOpen,
}) => {
  const closeBtn = useRef(null);
  const panelContent = useRef(null);

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
      if (!chooseOption || keyCode !== 27) return;
      setChooseOption(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={chooseOption}
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
        show={chooseOption}
        enter='transition ease-in-out duration-500'
        enterStart='opacity-0 translate-x-4'
        enterEnd='opacity-100 translate-x-0'
        leave='transition ease-in-out duration-500'
        leaveStart='opacity-100 translate-x-0'
        leaveEnd='opacity-0 translate-x-4'
      >
        <div
          ref={panelContent}
          className={`w-[480px] bg-white absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
            chooseOption ? 'translate-x-' : 'translate-x-full'
          }`}
        >
          <section className='mb-10 flex justify-center items-center'>
            <h2 className='mt-4 ml-5 w-full font-bold text-black text-2xl'>
              Selecciona una opción
            </h2>
            <div className='flex justify-center items-center'>
              <button
                onClick={() => {
                  setChooseOption(false);
                  setOrdersPanelOpen(true);
                }}
                className='mt-4'
              >
                <img src={icons.arrowLeft} alt='' className='w-8' />
              </button>
              <button
                ref={closeBtn}
                onClick={() => setChooseOption(false)}
                className=' top-1 right-0 mt-4 mr-3 group p-1'
              >
                <svg
                  className='w-4 h-4 fill-slate-800 group-hover:fill-slate-600 pointer-events-none'
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
                </svg>
              </button>
            </div>
          </section>
          <section className='flex justify-center'>
            {/* <button
              onClick={() => {
                setChooseOption(false);
              }}
              className='w-80 h-12 bg-primary rounded text-white text-base flex justify-center items-center hover:bg-secondary hover:text-primary'
            >
              Siguiente
            </button> */}
          </section>
        </div>
      </Transition>
    </>
  );
};

export default OptionsPanel;
