import React from 'react'
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const Home = () => {
    return (

        <main className="flex-grow container mx-auto py-6 px-4">
            <h1 className="text-3xl font-bold text-primary mb-6">Task Manager</h1>

            <div className="mb-8">
                <TaskForm />
            </div>

            <TaskList />
        </main>

    )
}

export default Home