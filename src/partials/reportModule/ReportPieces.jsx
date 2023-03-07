import { useEffect, useState } from 'react';
import BarChart from '../../charts/BarChart01';
import { useDispatch, useSelector } from 'react-redux';
import ReportPiecesTable from './ReportPiecesTable';
import {
  getReportList,
  selectReportList,
  selectDataFilter,
  selectDataReload,
  selectValueFilter,
} from '../../store/slice/reportSlice';
import DropdownReport from '../../pages/component/DropDownReport';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function ReportPieces() {
  const dispatch = useDispatch();
  const reportList = useSelector(selectReportList);
  const dataFilter = useSelector(selectDataFilter);
  const load = useSelector(selectDataReload);
  const valueFilter = useSelector(selectValueFilter);
  const sideBar = localStorage.getItem('sidebar-expanded');

  console.log(valueFilter);

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

  return (
    <>
      {reportList.length > 0 ? (
        <div className='flex space-x-3'>
          <section className='mb-2'>
            <article className='flex justify-between mb-5'>
              <h2 className='text-2xl md:text-3xl text-slate-800 font-bold mb-5'>
                Tabla de reportes
              </h2>
              <DropdownReport />
            </article>
            <div className={`grid gap-4 grid-cols-${valueFilter ? '2' : '1'}`}>
              {dataFilter.length > 0 ? (
                <ReportPiecesTable
                  reportList={reportList}
                  dataFilter={dataFilter}
                />
              ) : (
                <ReportPiecesTable
                  dataFilter={dataFilter}
                  reportList={reportList}
                />
              )}

              <section className={` ${valueFilter ? '' : 'hidden'}`}>
                <div
                  className={`flex flex-col  col-span-full sm:col-span-6 bg-white shadow-lg border border-slate-200 `}
                >
                  <header className='px-5 py-4 border-b border-slate-100'>
                    <h2 className='font-semibold text-slate-800'>
                      Piezas planeadas por grupo
                    </h2>
                  </header>
                  <BarChart data={chartData} width={795} height={450} />
                </div>
              </section>
            </div>
          </section>
        </div>
      ) : (
        <section className='justify-center items-center flex orders-table'>
          <h2 className='font-semibold text-2xl'>Sin datos para mostrar</h2>
        </section>
      )}
    </>
  );
}

export default ReportPieces;
