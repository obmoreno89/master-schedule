import React, { useState } from "react";
import Layout from "../components/Layout";
import icons from "../images/icon/icons";
import CalendarContent from "../partials/planning/calendar/CalendarContent";
import ModalCalendar from "./component/ModalCalendar";

function Calendar() {
  const [openModalCalendar, setOpenModalCalendar] = useState(false);

  return (
    <>
      <Layout
        icon={icons.planningIcon}
        nameRoute={"Planeación"}
        nameSubRoute={"Calendario"}
      >
        <div className="px-4 sm:px-6 lg:px-0 py-1 w-full max-w-9xl mx-auto">
          <div className="sm:flex sm:justify-between sm:items-center mb-4 md:mb-2"></div>

          <section className="lg:px-8 mt-5 pb-10">
            <CalendarContent setOpenModalCalendar={setOpenModalCalendar} />
            <ModalCalendar
              openModalCalendar={openModalCalendar}
              setOpenModalCalendar={setOpenModalCalendar}
            />
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Calendar;
