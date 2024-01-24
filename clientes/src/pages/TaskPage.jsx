import { useEffect } from "react";

import { useTasks } from "../context/TaskContext";
function TaskPage() {
  const { getTasks, tasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task._id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TaskPage;
