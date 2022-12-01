import React, { useState } from 'react';

function Pruebas({ children, activecondition }) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className=''>
      <li
        className={` px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
          activecondition && ' lg:bg-white '
        }`}
      >
        {children(handleClick, open)}
      </li>
    </div>
  );
}

export default Pruebas;
