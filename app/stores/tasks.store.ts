import { defineStore } from "pinia";
export type TaskPriority = "Low" | "Mid" | "High";
const STORAGE_KEY = "taskflow_tasks";
export type TaskFilter = "All" | "Active" | "Completed";

export interface Task {
  id: number;
  title: string;
  priority: TaskPriority;
  done: boolean;
  createdAt: string;
}

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    filter: "All" as TaskFilter,
    sortDirection: "desc" as "asc" | "desc",
    searchQuery: "",
    tasks: [
      {
        id: 1,
        title: "Prepare Nuxt 4 project",
        priority: "High" as const,
        done: false,
        createdAt: "2026-06-22",
      },
      {
        id: 2,
        title: "Learn GraphQL mutation",
        priority: "Low" as const,
        done: false,
        createdAt: "2026-06-22",
      },
      {
        id: 3,
        title: "Connect Hasura",
        priority: "Mid" as const,
        done: true,
        createdAt: "2026-06-22",
      },
    ],
  }),
  getters: {
    filteredTasks(state) {
      const priorityOrder = {
        High: 1,
        Mid: 2,
        Low: 3,
      };

      let tasks = [...state.tasks];

      if (state.filter === "Active") {
        tasks = tasks.filter((task) => !task.done);
      }

      if (state.filter === "Completed") {
        tasks = tasks.filter((task) => task.done);
      }
      const query = state.searchQuery.trim().toLowerCase();

      if (query) {
        tasks = tasks.filter((task) =>
          task.title.toLowerCase().includes(query),
        );
      }

      tasks.sort((a, b) => {
        if (state.sortDirection === "desc") {
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }

        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });

      return tasks;
    },
    totalTasks: (state) => state.tasks.length,

    completedTasks: (state) => {
      return state.tasks.filter((task) => task.done).length;
    },

    activeTasks: (state) => {
      return state.tasks.filter((task) => !task.done).length;
    },

    highPriorityTasks: (state) => {
      return state.tasks.filter((task) => task.priority === "High").length;
    },
  },

  actions: {
    addTask(title: string, priority: TaskPriority) {
      this.tasks.push({
        id: Date.now(),
        title,
        priority,
        done: false,
        createdAt: new Date().toISOString(),
      });
      this.saveTasks();
    },

    toggleTask(id: number) {
      const task = this.tasks.find((t) => t.id === id);

      if (task) {
        task.done = !task.done;
        this.saveTasks();
      }
    },

    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      this.saveTasks();
    },
    toggleSortDirection() {
      this.sortDirection = this.sortDirection === "desc" ? "asc" : "desc";
    },
    saveTasks() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    },
    loadTasks() {
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    },
    deleteAllTasks() {
      this.tasks = [];
      localStorage.removeItem(STORAGE_KEY);
    },
    setFilter(filter: TaskFilter) {
      this.filter = filter;
    },
    updateTask(id: number, title: string, priority: TaskPriority) {
      const task = this.tasks.find((task) => task.id === id);

      if (task) {
        task.title = title;
        task.priority = priority;
        this.saveTasks();
      }
    },
  },
});
