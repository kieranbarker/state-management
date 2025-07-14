import useTaskStore from "../../stores/taskStore.js";
import Task from "../Task/Task.jsx";
import TaskForm from "../TaskForm/TaskForm.jsx";
import TaskList from "../TaskList/TaskList.jsx";

function App() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <>
      <h1>Tasks</h1>
      <TaskForm />
      <TaskList>
        {tasks.map((task) => (
          <Task {...task} key={task.id} />
        ))}
      </TaskList>
    </>
  );
}

export default App;
