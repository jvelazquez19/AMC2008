import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "../App.css";
function CreateTask() {
  const { register, handleSubmit, reset } = useForm();
  const { addnewTask } = useTasks();

  const onSubmit = handleSubmit(async (data) => {
    confirmAlert({
      title: "Confirmación",
      message: "¿Estás seguro de que quieres guardar estos datos?",
      buttons: [
        {
          label: "Sí",
          onClick: async () => {
            await addnewTask(data);
            reset({ title: "", description: "" });
            confirmAlert({
              title: "Éxito",
              message: "¡Listo!",
              buttons: [
                {
                  label: "Ok",
                },
              ],
            });
          },
        },
        {
          label: "No",
        },
      ],
    });
  });

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center rounded-md">
      <div className="bg-zinc-800 max-w-md p-5 rounded-md">
        <h2 className="text-3xl font-bold text-white">Create Task</h2>
        <div>
          <br></br>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              autoFocus
              className="w-full bg-zinc-700 text-white px-2 py-1 rounded-md my-1 text-left"
            />
            <br />
            <textarea
              rows="3"
              placeholder="Description"
              {...register("description", { required: true })}
              className="w-full bg-zinc-700 text-white px-2 py-1 rounded-md my-1 text-left"
            ></textarea>
            <br />
            <button
              type="Submit"
              className="w-full bg-zinc-700 text-white px-7 py-1
             rounded-md"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
