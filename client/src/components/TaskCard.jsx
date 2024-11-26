import React from "react";
import { deleteTask } from "../api";

const TaskCard = ({ task }) => {
  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      window.location.reload(); 
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-primary">{task.title}</h3>
      <p className="text-gray-700 text-sm">{task.description}</p>
      <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
      <div className="mt-4 flex space-x-2">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
