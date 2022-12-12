import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDate, selectDate } from '../../../store/slice/calendarSlice';
import QuickSelection from '../../../components/QuickSelection';

function Calendar({ setOpenModalCalendar }) {
  const [openModalCalendarEdit, setOpenModalCalendarEdit] = useState(false);
  const [reloadEvent, setReloadEvent] = useState(null);

  const dispatch = useDispatch();

  const date = useSelector(selectDate);

  const today = new Date();
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'April',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const dayNames = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];

  useEffect(() => {
    dispatch(getDate());
  }, []);

  const events = [];

  const setEvents = () => {
    date.forEach((d) => {
      const array = d.date.split('-');
      const day = array[2];
      const month = array[1];

      let event = {
        eventStart: new Date(
          new Date(d.date).getFullYear(),
          day == 1 ? month - 1 : new Date(d.date).getMonth(),

          day
        ),
        eventName: `${d.description}`,
        eventColor: 'sky',
        id: `${d.id}`,
      };

      events.push(event);
    });
  };

  useEffect(() => {
    setEvents();
  }, []);

  setEvents();

  const [month, setMonth] = useState(today.getMonth());
  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState(today.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startingBlankDays, setStartingBlankDays] = useState([]);
  const [endingBlankDays, setEndingBlankDays] = useState([]);

  console.log(events);

  const isToday = (date) => {
    const day = new Date(year, month, date);
    return today.toDateString() === day.toDateString() ? true : false;
  };

  const getEvents = (date) => {
    return events.filter(
      (e) =>
        new Date(e.eventStart).toDateString() ===
        new Date(year, month, date).toDateString()
    );
  };

  const eventColor = (color) => {
    switch (color) {
      case 'sky':
        return 'text-white bg-green-600';
      case 'indigo':
        return 'text-white bg-primary';
      case 'yellow':
        return 'text-white bg-amber-500';
      case 'emerald':
        return 'text-white bg-emerald-500';
      case 'red':
        return 'text-white bg-rose-400';
      default:
        return '';
    }
  };

  const getDays = () => {
    const days = new Date(year, month + 1, 0).getDate();

    // starting empty cells (previous month)
    const startingDayOfWeek = new Date(year, month).getDay();
    let startingBlankDaysArray = [];
    for (let i = 1; i <= startingDayOfWeek; i++) {
      startingBlankDaysArray.push(i);
    }

    // ending empty cells (next month)
    const endingDayOfWeek = new Date(year, month + 1, 0).getDay();
    let endingBlankDaysArray = [];
    for (let i = 1; i < 7 - endingDayOfWeek; i++) {
      endingBlankDaysArray.push(i);
    }

    // current month cells
    let daysArray = [];
    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }

    setStartingBlankDays(startingBlankDaysArray);
    setEndingBlankDays(endingBlankDaysArray);
    setDaysInMonth(daysArray);
  };

  useEffect(() => {
    getDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className='flex bg-white overflow-hidden'>
      <main>
        <div className=' w-full max-w-9xl mx-auto'>
          <div className='sm:flex sm:justify-between sm:items-center mb-4'>
            {/* Left: Title */}
            <div className='mb-4 sm:mb-0'>
              <h1 className='text-2xl md:text-3xl text-slate-800 font-bold'>
                <span>{`${monthNames[month]} ${year}`}</span>
              </h1>
            </div>

            {/* Right: Actions */}
            <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2'>
              {/* Previous month button */}
              <button
                className='btn px-2.5 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600 disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed'
                disabled={month === 0 ? true : false}
                onClick={() => {
                  setMonth(month - 1);
                  getDays();
                }}
              >
                <span className='sr-only'>Previous month</span>
                <wbr />
                <svg className='h-4 w-4 fill-current' viewBox='0 0 16 16'>
                  <path d='M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z' />
                </svg>
              </button>

              {/* Next month button */}
              <button
                className='btn px-2.5 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600 disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed'
                disabled={month === 11 ? true : false}
                onClick={() => {
                  setMonth(month + 1);
                  getDays();
                }}
              >
                <span className='sr-only'>Crear Dia no laborable</span>
                <wbr />
                <svg className='h-4 w-4 fill-current' viewBox='0 0 16 16'>
                  <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModalCalendar(true);
                }}
                className='btn bg-primary text-white'
              >
                <svg
                  className='w-4 h-4 fill-current opacity-50 shrink-0'
                  viewBox='0 0 16 16'
                >
                  <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                </svg>
                <span className='hidden xs:block ml-2'>
                  Crear Dia no laborable
                </span>
              </button>
            </div>
          </div>

          {/* Calendar table */}
          <div className='border border-borderInput rounded shadow overflow-hidden '>
            {/* Days of the week */}
            <div className='grid grid-cols-7 gap-px border-b border-slate-200'>
              {dayNames.map((day) => {
                return (
                  <div className='px-1 py-3' key={day}>
                    <div className='text-slate-500 text-sm font-medium text-center lg:hidden'>
                      {day.substring(0, 3)}
                    </div>
                    <div className='text-slate-500 text-sm font-medium text-center hidden lg:block'>
                      {day}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Day cells */}
            <div className='grid grid-cols-7 gap-px bg-slate-200'>
              {/* Empty cells (previous month) */}
              {startingBlankDays.map((blankday) => {
                return (
                  <div
                    className='bg-slate-50 h-20 sm:h-28 lg:h-36'
                    key={blankday}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='100%'
                      height='100%'
                    >
                      <rect width='100%' height='100%' fill='url(#stripes)' />
                    </svg>
                  </div>
                );
              })}
              {/* Days of the current month */}
              {daysInMonth.map((day) => {
                return (
                  <div
                    className=' bg-white h-20 sm:h-28 lg:h-36 overflow-hidden'
                    key={day}
                  >
                    <div className='h-full flex flex-col justify-between'>
                      {/* Events */}
                      <div className='grow flex flex-col  p-0.5 sm:p-1.5 overflow-hidden relative'>
                        {getEvents(day).map((event) => {
                          return (
                            <>
                              <section
                                className='relative w-full mt-3'
                                key={day}
                              >
                                <div
                                  className={`relative h-full py-0.5 rounded overflow-hidden ${eventColor(
                                    event.eventColor
                                  )}`}
                                >
                                  <section className='absolute'>
                                    <QuickSelection
                                      setOpenModalCalendarEdit={
                                        setOpenModalCalendarEdit
                                      }
                                      openModalCalendarEdit={
                                        openModalCalendarEdit
                                      }
                                      eventId={event.id}
                                      description={event.eventName}
                                      setReloadEvent={setReloadEvent}
                                      reloadEvent={reloadEvent}
                                    />
                                  </section>

                                  {/* Event name */}
                                  <div className='text-sm font-semibold text-center flex justify-center items-center h-20'>
                                    {event.eventName}
                                  </div>
                                </div>
                              </section>
                            </>
                          );
                        })}
                      </div>
                      {/* Cell footer */}

                      <div className='flex justify-between items-center p-0.5 sm:p-1.5'>
                        {/* More button (if more than 2 events)
                        {getEvents(day).length > 2 && (
                          <button className='text-xs text-slate-500 font-medium whitespace-nowrap text-center sm:py-0.5 px-0.5 sm:px-2 border border-slate-200 rounded'>
                            <span className='md:hidden'>+</span>
                            <span>{getEvents(day).length - 2}</span>{' '}
                            <span className='hidden md:inline'>more</span>
                          </button>
                        )} */}

                        {/* Day number */}
                        <div
                          // onClick={(e) => {
                          //   e.stopPropagation();

                          //   setOpenModalCalendar(true);
                          // }}
                          className={`inline-flex ml-auto w-6 h-6 items-center justify-center text-xs sm:text-sm font-semibold text-center ${
                            isToday(day) && 'text-white bg-primary rounded-full'
                          }`}
                        >
                          {day}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Empty cells (next month) */}
              {endingBlankDays.map((blankday) => {
                return (
                  <div
                    className='bg-slate-50 h-20 sm:h-28 lg:h-36'
                    key={blankday}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='100%'
                      height='100%'
                    >
                      <rect width='100%' height='100%' fill='url(#stripes)' />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Calendar;
