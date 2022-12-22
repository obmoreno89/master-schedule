import React, { useState } from "react";
import CapabilitiesTable from "../partials/capabilities/CapabilitiesTable";
import PaginationNumeric from "../components/PaginationNumeric";
import CapabilitiesProductListPanel from "../partials/capabilities/CapabilitiesProductListPanel";
import CabalitiesGroupPanel from "../partials/capabilities/CapabilitiesGroupPanel";
import icons from "../images/icon/icons";
import ModalProductLine from "./component/ModalProductLine";
import ModalGroup from "./component/ModalGroup";
import Layout from "../components/Layout";

function Capabilities() {
  const [transactionPanelOpen, setTransactionPanelOpen] = useState(false);
  const [groupPanelOpen, setGroupPanelOpen] = useState(false);
  const [openModalPL, setOpenModalPL] = useState(false);
  const [openModalGroup, setOpenModalGroup] = useState(false);

  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={"Planeación"}
        nameSubRoute={"Capacidades"}
      >
        <div className="px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-5">
          <div className="sm:flex sm:justify-between sm:items-center mb-4 md:mb-2"></div>

          {/* Table */}
          <div className="lg:px-8">
            <CapabilitiesTable
              setTransactionPanelOpen={setTransactionPanelOpen}
              setGroupPanelOpen={setGroupPanelOpen}
            />
          </div>
          {/* Pagination */}
          <div className="mt-4">
            <PaginationNumeric />
          </div>
          <CapabilitiesProductListPanel
            transactionPanelOpen={transactionPanelOpen}
            setTransactionPanelOpen={setTransactionPanelOpen}
            setOpenModalPL={setOpenModalPL}
          />
          <CabalitiesGroupPanel
            groupPanelOpen={groupPanelOpen}
            setGroupPanelOpen={setGroupPanelOpen}
            setOpenModalGroup={setOpenModalGroup}
          />
        </div>
      </Layout>

      <ModalProductLine
        openModalPL={openModalPL}
        setOpenModalPL={setOpenModalPL}
      />
      <ModalGroup
        openModalGroup={openModalGroup}
        setOpenModalGroup={setOpenModalGroup}
      />
    </>
  );
}

export default Capabilities;
