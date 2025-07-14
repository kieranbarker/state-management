import { useReducer } from "react";

import Task from "../Task/Task.jsx";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import tasksReducer from "./tasksReducer.js";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, [
    { id: "Task-u9WREVxTuxsjimpXsSK1-", text: "Walk the dogs", done: true },
    { id: "Task-tBKDCfNqXKR6IsHrUOnDW", text: "Buy groceries", done: false },
    { id: "Task-45sJ0mx6nS7P1FutwXVyY", text: "Work out", done: false },
  ]);

  function addTask(text) {
    dispatch({
      type: "added",
      text,
    });
  }

  function toggleTask(id) {
    dispatch({
      type: "toggled",
      id,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: "deleted",
      id,
    });
  }

  return (
    <>
      <h1>Tasks</h1>
      <TaskForm addTask={addTask} />
      <TaskList>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </TaskList>
    </>
  );
}

export default App;
