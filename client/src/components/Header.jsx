import React from "react";

const Header = () => (
  <header className="bg-primary text-white py-4 px-6">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Task Manager</h1>
      <nav>
        <a href="/" className="mx-3 text-sm hover:underline">Home</a>
        <a href="/externel-tasks" className="mx-3 text-sm hover:underline">Externel tasks</a>
      </nav>
    </div>
  </header>
);

export default Header;
