import { nanoid } from "nanoid";
import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: "Task-u9WREVxTuxsjimpXsSK1-", text: "Walk the dogs", done: true },
    { id: "Task-tBKDCfNqXKR6IsHrUOnDW", text: "Buy groceries", done: false },
    { id: "Task-45sJ0mx6nS7P1FutwXVyY", text: "Work out", done: false },
  ],

  addTask(text) {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          text,
          done: false,
          id: `Task-${nanoid()}`,
        },
      ],
    }));
  },

  toggleTask(id) {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));
  },

  deleteTask(id) {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
}));

export default useTaskStore;
