import React, { useState } from "react";
import CapabilitiesTable from "../partials/capabilities/CapabilitiesTable";
import PaginationNumeric from "../components/PaginationNumeric";
import CapabilitiesProductListPanel from "../partials/capabilities/CapabilitiesProductListPanel";
import CabalitiesGroupPanel from "../partials/capabilities/CapabilitiesGroupPanel";
import icons from "../images/icon/icons";
import ModalProductLine from "./component/ModalProductLine";
import ModalGroup from "./component/ModalGroup";
import Layout from "../components/Layout";
import ModalGroupEdit from "./component/ModalGroupEdit";
import ModalGroupDelete from "./component/ModalGroupDelete";
import ModalProductLineEdit from "./component/ModalProductLineEdit";
import ModalProductLineDelete from "./component/ModalProductLineDelete";
import ModalCapDelete from "./component/ModalCapDelete";

function Capabilities() {
  const [transactionPanelOpen, setTransactionPanelOpen] = useState(false);
  const [groupPanelOpen, setGroupPanelOpen] = useState(false);
  const [openModalPL, setOpenModalPL] = useState(false);
  const [openModalGroup, setOpenModalGroup] = useState(false);
  const [openModalGroupEdit, setOpenModalGroupEdit] = useState(false);
  const [openModalGroupDelete, setOpenModalGroupDelete] = useState(false);
  const [openModalPLEdit, setOpenModalPLEdit] = useState(false);
  const [openModalPLDelete, setOpenModalPLDelete] = useState(false);
  const [capabilitiesPanelOpen, setCapabilitiesOpenPanel] = useState(false);
  const [capabilitiesEditOpen, setCapabilitiesEditOpen] = useState(false);
  const [openModalCapDelete, setOpenModalCapDelete] = useState(false);

  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={"Planeación"}
        nameSubRoute={"Capacidades"}
      >
        <div className="px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-6">
          <div className="sm:flex sm:justify-between sm:items-center mb-4 md:mb-2"></div>

          {/* Table */}
          <div className="lg:px-8">
            <CapabilitiesTable
              setTransactionPanelOpen={setTransactionPanelOpen}
              setGroupPanelOpen={setGroupPanelOpen}
              capabilitiesPanelOpen={capabilitiesPanelOpen}
              setCapabilitiesOpenPanel={setCapabilitiesOpenPanel}
              capabilitiesEditOpen={capabilitiesEditOpen}
              setCapabilitiesEditOpen={setCapabilitiesEditOpen}
              setOpenModalCapDelete={setOpenModalCapDelete}
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
            setOpenModalPLEdit={setOpenModalPLEdit}
            setOpenModalPLDelete={setOpenModalPLDelete}
          />
          <CabalitiesGroupPanel
            groupPanelOpen={groupPanelOpen}
            setGroupPanelOpen={setGroupPanelOpen}
            setOpenModalGroup={setOpenModalGroup}
            setOpenModalGroupEdit={setOpenModalGroupEdit}
            setOpenModalGroupDelete={setOpenModalGroupDelete}
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
      <ModalGroupEdit
        openModalGroupEdit={openModalGroupEdit}
        setOpenModalGroupEdit={setOpenModalGroupEdit}
      />
      <ModalGroupDelete
        openModalGroupDelete={openModalGroupDelete}
        setOpenModalGroupDelete={setOpenModalGroupDelete}
      />
      <ModalProductLineEdit
        openModalPLEdit={openModalPLEdit}
        setOpenModalPLEdit={setOpenModalPLEdit}
      />
      <ModalProductLineDelete
        openModalPLDelete={openModalPLDelete}
        setOpenModalPLDelete={setOpenModalPLDelete}
      />
      <ModalCapDelete
      openModalCapDelete={openModalCapDelete}
      setOpenModalCapDelete={setOpenModalCapDelete} />
    </>
  );
}

export default Capabilities;
