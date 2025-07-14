import { useTasksDispatch } from "../App/TasksContext.jsx";
import "./TaskForm.css";

function TaskForm() {
  const dispatch = useTasksDispatch();

  function handleSubmit(formData) {
    dispatch({
      type: "added",
      text: formData.get("task"),
    });
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
