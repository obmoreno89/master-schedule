import React, { useState } from "react";
import icons from "../images/icon/icons";
import UserTable from "../partials/management/user/UserTable";
import Layout from "../components/Layout";

function Management() {
  const [userPanelOpen, setUserPanelOpen] = useState(false);
  const [openModalUserDelete, setOpenModalUserDelete] = useState(false);

  return (
    <Layout
      icon={icons.administratorIcon}
      nameRoute={"Administración"}
      nameSubRoute={"Usuario"}
    >
      <div className="px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-10">
        <div className="sm:flex sm:justify-between sm:items-center mb-4 md:mb-2"></div>

        <section className="lg:px-8 mt-5">
          <UserTable
            setUserPanelOpen={setUserPanelOpen}
            setOpenModalUserDelete={setOpenModalUserDelete}
            openModalUserDelete={openModalUserDelete}
            userPanelOpen={userPanelOpen}
          />
        </section>
      </div>
    </Layout>
  );
}

export default Management;
