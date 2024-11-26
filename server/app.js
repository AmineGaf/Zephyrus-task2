const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const tasksRoutes = require('./routes/tasks');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

// Routes
app.use('/tasks', tasksRoutes);

// Start Server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
