import { nanoid } from "nanoid";
import { useState } from "react";

import Task from "../Task/Task.jsx";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: "Task-u9WREVxTuxsjimpXsSK1-", text: "Walk the dogs", done: true },
    { id: "Task-tBKDCfNqXKR6IsHrUOnDW", text: "Buy groceries", done: false },
    { id: "Task-45sJ0mx6nS7P1FutwXVyY", text: "Work out", done: false },
  ]);

  function addTask(text) {
    const newTask = { text, done: false, id: `Task-${nanoid()}` };
    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, done: !task.done };
    });

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
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
