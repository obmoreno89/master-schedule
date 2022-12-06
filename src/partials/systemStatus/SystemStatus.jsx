import Layout from "../../components/Layout";
import icons from "../../images/icon/icons";

function SystemStatus() {
  return (
    <Layout
      icon={icons.systemStatusIcon}
      nameRoute={"Estado del sistema"}
      nameSubRoute={"Estado del sistema"}
    >
      <section className="w-[70%] mx-auto">
      <h2 className="text-3xl font-semibold">Estado del sistema</h2>
      </section>
      
    </Layout>
  );
}

export default SystemStatus;
