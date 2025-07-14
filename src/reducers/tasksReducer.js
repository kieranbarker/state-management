import { nanoid } from "nanoid";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      const newTask = {
        id: `Task-${nanoid()}`,
        text: action.text,
        done: false,
      };

      return [...tasks, newTask];
    }

    case "toggled": {
      const updatedTasks = tasks.map((task) => {
        if (task.id !== action.id) return task;
        return { ...task, done: !task.done };
      });

      return updatedTasks;
    }

    case "deleted": {
      const updatedTasks = tasks.filter((task) => task.id !== action.id);
      return updatedTasks;
    }

    default: {
      throw new RangeError(`Unknown action: ${action.type}`);
    }
  }
}

export default tasksReducer;
