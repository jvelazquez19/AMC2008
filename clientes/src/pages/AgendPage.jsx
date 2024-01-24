// Módulos de React
import { useEffect, useState } from "react";
import { CiCalendar, CiCalendarDate } from "react-icons/ci";
// Módulos de terceros
import { Calendar, momentLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import moment from "moment";

// Estilos de terceros
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

// Tus propios módulos
import { useTasks } from "../context/TaskContext";

// Tus propios estilos
import "../styles/CalendaryStyles.css";
const localizer = momentLocalizer(moment);

const Calendary = () => {
  const { getTasks, tasks } = useTasks();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [view, setView] = useState("month");

  useEffect(() => {
    getTasks();
  }, []);

  const events = tasks.map((task) => ({
    title: [task.title, " ", task.description],
    start: new Date(task.date),
    end: new Date(task.date),
  }));
  const components = {
    event: (events) => {
      return (
        <div
          style={{ fontSize: "0.7em", display: "flex", alignItems: "center" }}
        >
          <CiCalendarDate />
          <span>{events.title}</span>
          {"  "}
        </div>
      );
    },
  };

  const filteredEvents = events.filter((event) => {
    const eventDate = moment(event.start);
    return (
      (!startDate || eventDate.isSameOrAfter(moment(startDate))) &&
      (!endDate || eventDate.isSameOrBefore(moment(endDate)))
    );
  });
  const handleSelectEvent = (event) => {
    setView("agenda");
  };
  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center rounded-md">
      <div className="flex h-[calc(100vh-100px)] justify-center items-center rounded-md">
        <div
          style={{
            position: "fixed",
            top: "200px",
            left: "1029px",
            color: "black",
            margin: "10px",
            zIndex: 9999,
          }}
        >
          <label>Buscar Por Fecha:</label>
          <div
            style={{
              display: "flex",
              border: "1px solid #898FE5",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{
                color: "black",
                margin: "10px",
                padding: "2px",
                borderRadius: "5px",
                border: "1px solid #898FE5",
                textAlign: "center",
              }}
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              style={{
                color: "black",
                margin: "10px",
                padding: "2px",
                borderRadius: "5px",
                border: "1px solid #898FE5",
                textAlign: "center",
              }}
            />
          </div>
        </div>
      </div>
      <div className="calendar-wrapper">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          events={filteredEvents}
          className="calendar-container"
          view={view}
          onView={setView}
          views={["month", "agenda"]}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={(event) => {
            let newStyle = {
              className: event.isMine ? "event-mine" : "event",
            };

            return newStyle;
          }}
          components={components}
        />
      </div>
    </div>
  );
};

export default Calendary;
