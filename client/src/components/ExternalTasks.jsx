import React, { useEffect, useState } from "react";
import axios from "axios";

const ExternalTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTasks(response.data);
      } catch (err) {
        setError("Failed to fetch tasks. Please try again later.");
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">External Tasks</h2>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.map((task) => (
          <div key={task.id} className="p-4 border border-gray-300 rounded">
            <h3 className="font-semibold">{task.title}</h3>
            <p>Status: {task.completed ? "Completed" : "Pending"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExternalTasks;
