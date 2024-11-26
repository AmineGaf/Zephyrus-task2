import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-primary mb-6">Task Manager</h1>

        <div className="mb-8">
          <TaskForm />
        </div>

        <TaskList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
