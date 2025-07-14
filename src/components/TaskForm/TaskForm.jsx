import useTaskStore from "../../stores/taskStore.js";
import "./TaskForm.css";

function TaskForm() {
  const addTask = useTaskStore((state) => state.addTask);

  function handleSubmit(formData) {
    const task = formData.get("task");
    addTask(task);
  }

  return (
    <form action={handleSubmit} className="TaskForm">
      <p>
        <label htmlFor="task">What do you need to do?</label>
        <input type="text" name="task" id="task" />
      </p>
      <p>
        <button type="submit">Add Task</button>
      </p>
    </form>
  );
}

export default TaskForm;
