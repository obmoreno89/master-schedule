import { useEffect, useRef, useState } from 'react';
import Transition from '../../../utils/Transition';
import icons from '../../../images/icon/icons';
import {
  selectTypeSort,
  setPlanningOption,
} from '../../../store/slice/planningSlice';
import { useDispatch, useSelector } from 'react-redux';

const OptionsPanel = ({
  chooseOption,
  setChooseOption,
  setOrdersPanelOpen,
}) => {
  const dispatch = useDispatch();
  const sortChoose = useSelector(selectTypeSort);
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
          <section className='mb-10 flex items-center justify-between  '>
            <div className='flex ml-5  '>
              <button
                onClick={() => {
                  setChooseOption(false);
                  setOrdersPanelOpen(true);
                }}
                className='mt-[17px]'
              >
                <img src={icons.arrowLeft} alt='' className='w-8' />
              </button>
              <h2 className='mt-4 ml-5 w-full font-bold text-black text-2xl'>
                Selecciona una opción
              </h2>
            </div>

            <button
              ref={closeBtn}
              onClick={() => setChooseOption(false)}
              className=' top-1 right-0 mt-4 mr-3 group p-1'
            >
              <svg
                className='w-5 h-5 fill-slate-800 group-hover:fill-slate-600 pointer-events-none'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
              </svg>
            </button>
          </section>
          <section>
            <section className='w-full px-5 pt-4 2xl:pt-8'>
              <ul>
                {sortChoose.map((data, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      dispatch(setPlanningOption(data));
                      setChooseOption(false);
                    }}
                    className='border rounded border-slate-300 flex py-4 mb-4 justify-between items-center cursor-pointer'
                  >
                    <div className='flex'>
                      <div className='flex flex-col w-flil px-5'>
                        <span className='text-base font-semibold text-black'>
                          {data.name}
                        </span>
                        <div>
                          <span className='text-sm text-primary font-medium bg-secondary px-1 py-1 rounded'>
                            {data.form_apply}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </div>
      </Transition>
    </>
  );
};

export default OptionsPanel;
