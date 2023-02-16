import React, { useState } from 'react';
import BaseCapabilitiesTable from '../partials/baseCapabilities/BaseCapabilitiesTable';
import PaginationNumeric from '../components/PaginationNumeric';
import BaseCapabilitiesProductListPanel from '../partials/baseCapabilities/BaseCapabilitiesProductListPanel';
import CabalitiesGroupPanel from '../partials/baseCapabilities/BaseCapabilitiesGroupPanel';
import icons from '../images/icon/icons';
import ModalProductLine from './component/ModalProductLine';
import ModalGroup from './component/ModalGroup';
import Layout from '../components/Layout';
import ModalGroupEdit from './component/ModalGroupEdit';
import ModalGroupDelete from './component/ModalGroupDelete';
import ModalProductLineEdit from './component/ModalProductLineEdit';
import ModalProductLineDelete from './component/ModalProductLineDelete';
import ModalCapDelete from './component/ModalCapDelete';
import ModalBaseCapabilitiesExport from './component/ModalBaseCapabilitiesExport';

function BaseCapabilities() {
  const [transactionPanelOpen, setTransactionPanelOpen] = useState(false);
  const [groupPanelOpen, setGroupPanelOpen] = useState(false);
  const [openModalPL, setOpenModalPL] = useState(false);
  const [openModalGroup, setOpenModalGroup] = useState(false);
  const [openModalGroupEdit, setOpenModalGroupEdit] = useState(false);
  const [openModalGroupDelete, setOpenModalGroupDelete] = useState(false);
  const [openModalPLEdit, setOpenModalPLEdit] = useState(false);
  const [openModalPLDelete, setOpenModalPLDelete] = useState(false);
  const [baseCapabilitiesPanelOpen, setBaseCapabilitiesOpenPanel] =
    useState(false);
  const [baseCapabilitiesEditOpen, setbaseCapabilitiesEditOpen] =
    useState(false);
  const [openModalCapDelete, setOpenModalCapDelete] = useState(false);
  const [modalBaseCapabilitiesExportOpen, setModalBaseCapabilitiesExportOpen] =
    useState(false);
  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={'Planeación'}
        nameSubRoute={'Capacidades Base'}
      >
        <div className='px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto pb-6'>
          <div className='sm:flex sm:justify-between sm:items-center mb-4 md:mb-2'></div>

          {/* Table */}
          <div className='lg:px-8'>
            <BaseCapabilitiesTable
              setTransactionPanelOpen={setTransactionPanelOpen}
              setGroupPanelOpen={setGroupPanelOpen}
              baseCapabilitiesPanelOpen={baseCapabilitiesPanelOpen}
              setBaseCapabilitiesOpenPanel={setBaseCapabilitiesOpenPanel}
              baseCapabilitiesEditOpen={baseCapabilitiesEditOpen}
              setbaseCapabilitiesEditOpen={setbaseCapabilitiesEditOpen}
              setOpenModalCapDelete={setOpenModalCapDelete}
              setModalBaseCapabilitiesExportOpen={
                setModalBaseCapabilitiesExportOpen
              }
            />
          </div>
          {/* Pagination */}
          <div className='mt-4'>
            <PaginationNumeric />
          </div>
          <BaseCapabilitiesProductListPanel
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
        setOpenModalCapDelete={setOpenModalCapDelete}
      />
      <ModalBaseCapabilitiesExport
        modalBaseCapabilitiesExportOpen={modalBaseCapabilitiesExportOpen}
        setModalBaseCapabilitiesExportOpen={setModalBaseCapabilitiesExportOpen}
      />
    </>
  );
}

export default BaseCapabilities;
