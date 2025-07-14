import { createContext, useContext, useReducer } from "react";
import tasksReducer from "./tasksReducer.js";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [
    { id: "Task-u9WREVxTuxsjimpXsSK1-", text: "Walk the dogs", done: true },
    { id: "Task-tBKDCfNqXKR6IsHrUOnDW", text: "Buy groceries", done: false },
    { id: "Task-45sJ0mx6nS7P1FutwXVyY", text: "Work out", done: false },
  ]);

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  );
}
