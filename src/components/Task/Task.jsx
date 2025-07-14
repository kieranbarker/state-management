import classNames from "classnames";
import useTaskStore from "../../stores/taskStore.js";
import "./Task.css";

function Task({ id, text, done }) {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleChange = (id) => () => {
    toggleTask(id);
  };

  function handleClick() {
    if (window.confirm(`Are you sure you want to delete '${text}'?`)) {
      deleteTask(id);
    }
  }

  return (
    <li className={classNames("Task", { "Task-isDone": done })}>
      <label htmlFor={id} className="Task-label">
        <input
          type="checkbox"
          id={id}
          checked={done}
          className="Task-input"
          onChange={handleChange(id)}
        />
        {text}
      </label>
      <button type="button" className="Task-button" onClick={handleClick}>
        Delete <span className="visually-hidden">'{text}'</span>
      </button>
    </li>
  );
}

export default Task;
