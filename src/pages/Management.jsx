import RegisterUser from "../partials/management/user/RegisterUser";
import icons from "../images/icon/icons";
import Layout from "../components/Layout";

function Management() {
  return (
    <Layout
      icon={icons.administratorIcon}
      nameRoute={"Administración"}
      nameSubRoute={"Crear cuenta"}
    >
      <div className="w-[47rem] mx-auto">
        <div className="">
          <RegisterUser />
        </div>
      </div>
    </Layout>
  );
}

export default Management;
