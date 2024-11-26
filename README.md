# Task Manager Application

## Overview

This project is a task management application with a React-based frontend and a Node.js/Express backend using MongoDB for data storage. It supports CRUD operations for managing tasks and includes functionality to fetch and display external API data.

## Approach to Each Task

1. **Frontend (React & Vite)**:
   - Used `React` with `Vite` for fast development.
   - Styled with `Tailwind CSS` for a responsive and modern UI.
   - Key components include:
     - `TaskForm` for adding tasks.
     - `TaskList` for viewing and managing tasks.
     - `ExternalTasks` for fetching and displaying data from a public API.

2. **Backend (Node.js/Express)**:
   - Built with `Express` to handle API routes.
   - Used `Mongoose` to manage MongoDB schema and operations.
   - Provides CRUD operations for tasks.

3. **API Integration**:
   - Utilized `Axios` for API requests in the frontend.
   - Connected the backend API to the frontend for seamless task management.
   - Integrated real-time data fetching in the `ExternalTasks` component to fetch data from a public API and display it in a structured format.

## Task 3: Real-Time Data Fetching and Display

Task 3 of the coding assessment has been implemented within the `ExternalTasks` component. This component:
- Fetches data from a public API (e.g., JSONPlaceholder).
- Displays the data in a structured card layout.
- Includes error handling to manage API call failures.
- Can be accessed via the "External Tasks" link in the navigation bar.

## Libraries and Frameworks Used

### **Frontend**:
- React
- Vite
- Tailwind CSS
- Axios
- React Router

### **Backend**:
- Express
- Mongoose
- dotenv
- Nodemon

## Instructions to Set Up and Run the Project

### **Prerequisites**
- Node.js installed (v16+ recommended)
- MongoDB running locally or a connection string to a cloud MongoDB instance

### **Steps**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AmineGaf/Zephyrus-task2.git
   cd task-manager
2. **Setup the backend**:
   ```bash
   cd server
   npm install
-Create a .env file and add your MongoDB connection string :
MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
  npm start
