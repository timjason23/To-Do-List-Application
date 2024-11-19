"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen p-4"
      style={{
        backgroundColor: "#7fffd4", // Minimalist light gray background
      }}
    >
      <div className="bg-white shadow-md rounded-xl w-full max-w-lg p-6 border border-gray-200">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          My Minimalist To-Do List
        </h1>

        {/* Input Section */}
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-gray-700 text-white px-6 py-2 rounded-r-lg hover:bg-gray-800"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div>
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center italic">
              No tasks added yet. Start by adding one above!
            </p>
          ) : (
            <ul className="space-y-4">
              {tasks.map((t) => (
                <li
                  key={t.id}
                  className="flex justify-between items-center bg-gray-50 border rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={t.completed}
                      onChange={() => toggleTaskCompletion(t.id)}
                      className="mr-3 accent-gray-700"
                    />
                    <span
                      className={`${
                        t.completed
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      } font-medium`}
                    >
                      {t.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTask(t.id)}
                    className="text-gray-500 hover:text-red-500 transition"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
