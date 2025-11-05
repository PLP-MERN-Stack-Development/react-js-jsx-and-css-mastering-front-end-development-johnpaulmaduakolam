import React, { useState, useEffect } from "react";

// ✅ Custom Hook: manage tasks with localStorage
const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text, completed: false, createdAt: new Date().toISOString() },
      ]);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

// ✅ Main Component
export default function TaskManager() {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks =
    filter === "active"
      ? tasks.filter((t) => !t.completed)
      : filter === "completed"
      ? tasks.filter((t) => t.completed)
      : tasks;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="max-w-lg w-full mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md transition-all duration-300">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Task Manager
      </h1>

      {/* ✅ Task Input */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border rounded-lg text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
        >
          Add
        </button>
      </form>

      {/* ✅ Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              filter === f
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            } transition`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* ✅ Task List */}
      <ul className="space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border rounded-lg p-3 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span
                  className={`break-words ${
                    task.completed
                      ? "line-through text-gray-500 dark:text-gray-400"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {task.text}
                </span>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="mt-2 sm:mt-0 bg-red-500 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>

      {/* ✅ Task Stats */}
      <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
        {tasks.filter((t) => !t.completed).length} task(s) remaining
      </div>
    </div>
  );
}
