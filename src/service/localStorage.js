export const readUser = () => {
  const userStr = localStorage.getItem("users");
  return userStr ? JSON.parse(userStr) : "";
};
export const readTasks = () => {
  const tasksStr = localStorage.getItem("tasks");
  return tasksStr ? JSON.parse(tasksStr) : "";
};
