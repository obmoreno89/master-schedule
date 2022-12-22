import icons from "../images/icon/icons";
import Layout from "../components/Layout";

function Dashboard() {
  return (
    <Layout
      icon={icons.dashboardIcon}
      nameRoute={"Dashboard"}
      nameSubRoute={"Dashboard"}
    >
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="max-w-full mx-4 py-0 sm:mx-auto sm:px-6 lg:px-0">
          <div className="sm:flex sm:space-x-4">
            <div className="inline-block align-bottom bg-white rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
              <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                    <h3 className="text-sm leading-6 font-medium text-gray-400">
                      Número de Órdenes en PastDue
                    </h3>
                    <p className="text-3xl font-bold text-black">2003</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
              <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                    <h3 className="text-sm leading-6 font-medium text-gray-400">
                      Monto en PastDue
                    </h3>
                    <p className="text-3xl font-bold text-black">16MDD</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
              <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                    <h3 className="text-sm leading-6 font-medium text-gray-400">
                      Órdenes por programar
                    </h3>
                    <p className="text-3xl font-bold text-black">23</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg border border-slate-200 text-left overflow-hidden mb-4 w-full sm:w-1/3 sm:my-8">
              <div className="bg-white p-5">
                <div className="sm:flex sm:items-start">
                  <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                    <h3 className="text-sm leading-6 font-medium text-gray-400">
                      Exceso de Inventario
                    </h3>
                    <p className="text-3xl font-bold text-black">30 Pz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
