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

  console.log(dataFilter);

  useEffect(() => {
    dispatch(getReportList());
  }, []);

  const uniqueDates = [];
  reportList.forEach((obj) => {
    if (!uniqueDates.includes(obj.fecha)) {
      uniqueDates.push(obj.fecha);
    }
  });

  console.log(reportList);
  console.log(dataFilter);

  const datasets = [];
  uniqueDates.forEach((fecha) => {
    const objetosParaFecha = reportList.filter((obj) => obj.fecha === fecha);
    const valores = objetosParaFecha.map((obj) => obj.piezas_planeadas);
    const group = objetosParaFecha.map((obj) => obj.GROUPASSYLINE);
    const dateParts = fecha.split('-');
    const formattedDate = `${dateParts[2].padStart(
      2,
      '0'
    )}-${dateParts[1].padStart(2, '0')}-${dateParts[0]}`;
    datasets.push({
      label: `L1`,
      data: [35],
      backgroundColor: tailwindConfig().theme.colors.green[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
      group: group,
    });
  });

  const chartData = {
    labels: ['06-03-2023'],
    // labels: uniqueDates.map((fecha) => {
    //   const dateParts = fecha.split('-');
    //   return `${dateParts[2].padStart(2, '0')}-${dateParts[1].padStart(
    //     2,
    //     '0'
    //   )}-${dateParts[0]}`;
    // }),
    datasets: datasets,
  };
  console.log(chartData);

  // const chartData = {
  //   labels: ['06-03-2023', '07-03-2023', '08-03-2023'],
  //   datasets: [
  //     // Light blue bars
  //     {
  //       label: 'L1',
  //       data: [95, 100, 200],
  //       backgroundColor: tailwindConfig().theme.colors.blue[400],
  //       hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
  //       barPercentage: 0.66,
  //       categoryPercentage: 0.66,
  //     },
  //   ],
  // };

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
            <table className='table-fixed w-full table border border-slate-200 shadow-lg h-[518px]'>
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
            <section className='mb-5'>
              <div className='flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg border border-slate-200'>
                <header className='px-5 py-4 border-b border-slate-100'>
                  <h2 className='font-semibold text-slate-800'>
                    Direct VS Indirect
                  </h2>
                </header>
                {/* Chart built with Chart.js 3 */}
                {/* Change the height attribute to adjust the chart height */}
                <BarChart data={chartData} width={795} height={400} />
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default ReportPieces;
