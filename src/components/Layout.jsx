import { useState } from "react";
import Header from "../partials/Header";
import NavBar from "../partials/NavBar";

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden ">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <section>
            <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </section>
          <section className="px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto">
            {children}
          </section>
        </main>
      </div>
    </div>
  );
}

export default Layout;
