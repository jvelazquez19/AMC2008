import axios from "./axios";

export const getTasksRequest = () => axios.get("/tasks");
export const getTaskRequest = (user) => axios.get(`/tasks/${user._id}`);
export const createTaskRequest = (tasks) => axios.post("/tasks", tasks);
export const updateTaskRequest = (tasks) =>
  axios.put(`/tasks/${tasks._id}`, tasks);
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
