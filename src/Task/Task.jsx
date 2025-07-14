import classNames from "classnames";
import "./Task.css";

function Task({ task, toggleTask, deleteTask }) {
  const handleChange = (id) => () => {
    toggleTask(id);
  };

  function handleClick() {
    if (window.confirm(`Are you sure you want to delete '${task.text}'?`)) {
      deleteTask(task.id);
    }
  }

  return (
    <li className={classNames("Task", { "Task-isDone": task.done })}>
      <label htmlFor={task.id} className="Task-label">
        <input
          type="checkbox"
          id={task.id}
          checked={task.done}
          className="Task-input"
          onChange={handleChange(task.id)}
        />
        {task.text}
      </label>
      <button type="button" className="Task-button" onClick={handleClick}>
        Delete <span className="visually-hidden">'{task.text}'</span>
      </button>
    </li>
  );
}

export default Task;
