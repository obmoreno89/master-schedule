import { useEffect, useState } from 'react';
import BarChart from '../../charts/BarChart01';
import { useDispatch, useSelector } from 'react-redux';
import {
  getReportList,
  selectReportList,
  selectDataFilter,
} from '../../store/slice/reportSlice';
import DropdownReport from '../../pages/component/DropDownReport';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function ReportPieces() {
  const dispatch = useDispatch();
  const reportList = useSelector(selectReportList);
  const dataFilter = useSelector(selectDataFilter);
  const sideBar = localStorage.getItem('sidebar-expanded');

  console.log(sideBar);

  console.log(dataFilter);

  useEffect(() => {
    dispatch(getReportList());
  }, []);

  // Ordenamos los datos por fecha
  const sortedData = dataFilter.sort(
    (a, b) => new Date(a.fecha) - new Date(b.fecha)
  );

  // Creamos el objeto para los datos del chart
  const chartData = {
    labels: sortedData.map((item) => {
      const dateParts = item.fecha.split('-');
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1;
      const day = parseInt(dateParts[2]);
      const date = new Date(Date.UTC(year, month, day));

      const formattedDate = `${date
        .getUTCDate()
        .toString()
        .padStart(2, '0')}-${(date.getUTCMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getUTCFullYear()}`;

      return formattedDate;
    }),
    datasets: [
      {
        label: sortedData[0]?.GROUPASSYLINE, // Usamos el primer valor del grupo como etiqueta
        data: sortedData.map((item) => item.piezas_planeadas),
        backgroundColor: tailwindConfig().theme.colors.green[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
        borderWidth: 1,
      },
    ],
  };

  console.log(chartData);

  return (
    <>
      <div className='flex space-x-3'>
        <section className='mb-2'>
          <article className='flex justify-between mb-5'>
            <h2 className='text-2xl md:text-3xl text-slate-800 font-bold mb-5'>
              Tabla de reportes
            </h2>
            <DropdownReport />
          </article>
          <div className='grid grid-cols-2 gap-4'>
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
              <tbody className='text-sm divide-y divide-slate-200'>
                {reportList.map((report, index) => (
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
            </table>
            <section>
              <div className='flex flex-col  col-span-full sm:col-span-6 bg-white shadow-lg border border-slate-200'>
                <header className='px-5 py-4 border-b border-slate-100'>
                  <h2 className='font-semibold text-slate-800'>
                    Piezas planeadas por grupo
                  </h2>
                </header>
                {/* Chart built with Chart.js 3 */}
                {/* Change the height attribute to adjust the chart height */}

                <BarChart data={chartData} width={795} height={450} />
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default ReportPieces;
