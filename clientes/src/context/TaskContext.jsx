import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";
import { set } from "mongoose";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addnewTask = async (task) => {
    const res = await createTaskRequest(task);
  };
  const getTasks = async () => {
    const res = await getTasksRequest();
    setTasks(res.data);
  };
  return (
    <TaskContext.Provider value={{ tasks, addnewTask, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
