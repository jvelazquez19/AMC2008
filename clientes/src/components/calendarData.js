export function getEvent(tasks) {
  return tasks.map((task) => ({
    title: task.title, //AQUI PUEDES HACER los llamados task.title,
    startDate: task.createdAt, //AQUI PUEDES HACER los llamados a las fechas, no deben ser iguales si no, no las va a mostrar
    endDate: task.updatedAt,
    description: task.description, //aqui agregas los campos que quieras mostrar
  }));
}
