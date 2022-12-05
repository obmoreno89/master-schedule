import React, { useEffect, useRef } from 'react';
import CapabilitiesProductListPanelTable from './CapabilitiesProductListPanelTable';

function CapabilitiesProductListPanel({
  transactionPanelOpen,
  setTransactionPanelOpen,
}) {
  const closeBtn = useRef(null);
  const panelContent = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !transactionPanelOpen ||
        panelContent.current.contains(target) ||
        closeBtn.current.contains(target)
      )
        return;
      setTransactionPanelOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!transactionPanelOpen || keyCode !== 27) return;
      setTransactionPanelOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div
      ref={panelContent}
      className={`absolute inset-0 sm:left-auto z-40 transform shadow-xl transition-transform duration-200 ease-in-out ${
        transactionPanelOpen ? 'translate-x-' : 'translate-x-full'
      }`}
    >
      <div className='top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 w-full sm:w-[390px] h-screen'>
        <h2 className='mt-4 ml-4 w-48 font-bold text-black'>
          Seleccione una línea de producto
        </h2>
        <button
          ref={closeBtn}
          onClick={() => setTransactionPanelOpen(false)}
          className='absolute top-0 right-0 mt-6 mr-3 group p-1'
        >
          <svg
            className='w-4 h-4 fill-slate-400 group-hover:fill-slate-600 pointer-events-none'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z' />
          </svg>
        </button>
        <CapabilitiesProductListPanelTable />
      </div>
    </div>
  );
}

export default CapabilitiesProductListPanel;
