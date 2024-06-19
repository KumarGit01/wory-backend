const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
dotenv.config();
connectDB();

const app = express();

// Middleware

app.use(express.json());

// Routes

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/tags', require('./routes/tagRoutes'));

// Start server

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
