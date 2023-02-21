import { useEffect, useRef, useState } from 'react';
import Transition from '../../../utils/Transition';
import icons from '../../../images/icon/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderOrMinMaxValue } from '../../../store/slice/planningSlice';

const OrdersAndMinMaxPanel = ({
  setOrdersAndMinMaxPanelOpen,
  ordersAndMinMaxPanelOpen,
  setGroupOptionsPanel,
}) => {
  const closeBtn = useRef(null);
  const panelContent = useRef(null);

  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [openOrderstLetterChosen, setOpenOrdersLetterChosen] = useState(null);
  const [minMaxLetterChosen, setMinMaxLetterChosen] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 5000);
    }
  }, [error]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (openOrderstLetterChosen === '1') {
      dispatch(setOrderOrMinMaxValue(openOrderstLetterChosen));
      setOrdersAndMinMaxPanelOpen(false);
      setGroupOptionsPanel(true);
      setOpenOrdersLetterChosen(null);
    } else if (minMaxLetterChosen === '2') {
      dispatch(setOrderOrMinMaxValue(minMaxLetterChosen));
      setOrdersAndMinMaxPanelOpen(false);
      setGroupOptionsPanel(true);
      setMinMaxLetterChosen(null);
    } else {
      setError(true);
    }
  };

  const handleOpenOrders = (e) => {
    const { value } = e.target;
    setOpenOrdersLetterChosen(value);
  };

  const handleMinMax = (e) => {
    const { value } = e.target;
    setMinMaxLetterChosen(value);
  };

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!ordersAndMinMaxPanelOpen || keyCode !== 27) return;
      setOrdersAndMinMaxPanelOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={ordersAndMinMaxPanelOpen}
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
        show={ordersAndMinMaxPanelOpen}
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
            ordersAndMinMaxPanelOpen ? 'translate-x-' : 'translate-x-full'
          }`}
        >
          <section className='mb-10 flex items-center justify-between'>
            <h2 className='mt-4 ml-5 w-full font-bold text-black text-2xl'>
              Selecciona, Que quieres planear?
            </h2>

            <button
              ref={closeBtn}
              onClick={() => {
                setOrdersAndMinMaxPanelOpen(false);
              }}
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
            <form>
              <div className='h-[470px] 2xl:h-[460px] overflow-y-auto mb-8 ml-5'>
                <div>
                  <div className='mb-7'>
                    <label className='flex items-center'>
                      <input
                        type='radio'
                        name='radio'
                        className='form-checkbox'
                        value='1'
                        onChange={handleOpenOrders}
                        disabled={minMaxLetterChosen === '2'}
                      />
                      <span className='text-base font-medium ml-2 text-black'>
                        Demanda de Open Orders
                      </span>
                    </label>
                  </div>

                  <div className='mb-7'>
                    <label className='flex items-center'>
                      <input
                        type='radio'
                        name='radio-buttons'
                        className='form-checkbox'
                        value='2'
                        onChange={handleMinMax}
                        disabled={openOrderstLetterChosen === '1'}
                      />
                      <span className='text-base font-medium ml-2 text-black'>
                        Demanda de MinMax
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className='flex justify-center'>
                <button
                  onClick={onSubmit}
                  className='w-80 h-12 bg-primary rounded text-white text-base flex justify-center hover:bg-green-500'
                >
                  <span className='my-auto'>Continuar</span>

                  <img
                    src={icons.arrowRight}
                    alt='icon-arrow-right'
                    className='my-auto ml-3 text-white'
                  />
                </button>
              </div>
              {error && (
                <div className='flex justify-center mt-1'>
                  <span className='font-semibold text-red-600'>
                    Debe elegir al menos una opción antes de continuar
                  </span>
                </div>
              )}
            </form>
          </section>
        </div>
      </Transition>
    </>
  );
};

export default OrdersAndMinMaxPanel;
