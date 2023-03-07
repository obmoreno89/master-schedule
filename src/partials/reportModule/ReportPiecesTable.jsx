import React from 'react';

function ReportPiecesTable({ reportList, dataFilter }) {
  console.log(dataFilter);
  return (
    <table
      className={`table-fixed w-full table border border-slate-200 shadow-lg 
    }`}
    >
      <thead className='text-xs text-textTableHeader font-semibold border-b border-slate-200 bg-slate-50'>
        <tr>
          <th className='px-5 py-3 cursor-pointer'>
            <div className='flex items-center space-x-2'>
              <div className='font-semibold'>Grupo</div>
            </div>
          </th>
          <th className='px-5 py-3'>
            <p className='font-semibold text-left'>Fecha</p>
          </th>
          <th className='py-3'>Piezas planeadas</th>
        </tr>
      </thead>
      {!dataFilter?.length > 0 ? (
        <tbody className='text-sm divide-y divide-slate-200'>
          {reportList?.map((report, index) => (
            <tr key={index} className='text-textTableItem'>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <div className='flex items-center'>
                  <p className='text-textTableItem capitalize font-semibold'>
                    {report.GROUPASSYLINE}
                  </p>
                </div>
              </td>
              <td className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='truncate text-left'>{report.fecha}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-center'>
                {report.piezas_planeadas}
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody className='text-sm divide-y divide-slate-200'>
          {dataFilter?.map((report, index) => (
            <tr key={index} className='text-textTableItem'>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <div className='flex items-center'>
                  <p className='text-textTableItem capitalize font-semibold'>
                    {report.GROUPASSYLINE}
                  </p>
                </div>
              </td>
              <td className='px-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                <p className='truncate text-left'>{report.fecha}</p>
              </td>
              <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-center'>
                {report.piezas_planeadas}
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default ReportPiecesTable;
