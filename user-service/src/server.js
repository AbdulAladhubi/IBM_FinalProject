const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Error handling middleware
app.use(require('./middlewares/errorHandlingMiddleware'));

// Start server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));