import React from 'react';

function PaginationProductList({ totalPosts, postsPerPage, setCurrentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='flex justify-center'>
      <nav className='flex space-x-2' role='navigation' aria-label='Navigation'>
        {/* <div className='mr-2'>
          <span className='inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border-slate-200 text-slate-300'>
            <span className='sr-only'>Previous</span>
            <wbr />
            <svg className='h-5 w-5 fill-current' viewBox='0 0 16 16'>
              <path d='M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z' />
            </svg>
          </span>
        </div> */}
        {pages.map((page, index) => (
          <section key={index} className='text-sm font-bold  shadow-sm'>
            <div>
              <button
                onClick={() => setCurrentPage(page)}
                className={`items-center justify-center rounded leading-5 px-3.5 py-2 bg-white border border-slate-50 text-primary hover:bg-primary hover:text-white`}
              >
                {page}
              </button>
            </div>
          </section>
        ))}
        {/* <div className='ml-2'>
          <a
            href='#0'
            className='inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-primary  text-slate-600 hover:text-white'
          >
            <span className='sr-only'>Next</span>
            <wbr />
            <svg className='h-5 w-5 fill-current' viewBox='0 0 16 16'>
              <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
            </svg>
          </a>
        </div> */}
      </nav>
    </div>
  );
}

export default PaginationProductList;
