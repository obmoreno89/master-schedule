import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import RegisterUser from "../partials/management/RegisterUser";
import icons from "../images/icon/icons";

function Management() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          icon={icons.administratorIcon}
          nameRoute="Administración"
          nameSubRoute="Crear cuenta"
        />

        <main className="bg-white h-full">
          <div className="py-6 w-screen mx-auto">
            <div 
            className="w-full"
            //className="lg:px-8"
            >
              <RegisterUser />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Management;
