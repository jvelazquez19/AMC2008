import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useTasks } from "../context/TaskContext";
import "../App.css";
import { getEvent } from "../components/calendarData";

// npm install date-fns, ya que es necesario para el funcionamiento del calendario y proptypes ya es nativo esto para evitar que salga error en la validacion del props
import { startOfWeek, endOfWeek, format, startOfMonth } from "date-fns";

const Calendario = () => {
  const { getTasks, tasks } = useTasks();
  const [getView, setgetView] = useState("Month");
  const [getDate, setgetDate] = useState("2024-01-01");

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  // aqui el use effect para tener fecha, mes, semana y dia por eso necesito date-fns ya que aplique el formato de fecha
  useEffect(() => {
    console.log("Vista: ", getView);

    if (getView === "Week") {
      const Inicio = startOfWeek(new Date(getDate));
      const Final = endOfWeek(new Date(getDate));
      console.log(
        format(Inicio, "yyyy-MM-dd"),
        " - ",
        format(Final, "yyyy-MM-dd")
      );
    } else if (getView === "Month") {
      console.log(
        "Fecha: ",
        format(startOfMonth(new Date(getDate)), "yyyy/MM/01")
      );
    } else {
      console.log("Fecha: ", format(new Date(getDate), "yyyy/MM/dd"));
    }
  }, [getView, getDate]);

  const events = getEvent(tasks);

  // crear nuevo componente para el tooltip no tiene css
  function Tooltip({ appointmentData }) {
    const startDate = new Date(appointmentData.startDate);
    const endDate = new Date(appointmentData.endDate);
    return (
      <div>
        <h2>{appointmentData.title}</h2>
        <br />
        <p>
          Inicio: {startDate.toLocaleTimeString()} - Final:{" "}
          {endDate.toLocaleTimeString()}
        </p>
        <p>{appointmentData.description}</p>
      </div>
    );
  }

  return (
    <Paper>
      <Scheduler data={events}>
        <ViewState
          defaultCurrentDate="2024-01-01"
          currentDate={getDate}
          onCurrentDateChange={setgetDate}
          currentViewName={getView}
          onCurrentViewNameChange={setgetView}
        />
        <DayView />
        <WeekView />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
        <TodayButton />
        <Appointments />
        {/* aqui se llama el nuevo tooltip como componente  */}
        <AppointmentTooltip contentComponent={Tooltip} />
      </Scheduler>
    </Paper>
  );
};

export default Calendario;
