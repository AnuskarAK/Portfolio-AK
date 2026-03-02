require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173', // Vite default port
    methods: ['GET', 'POST'],
    credentials: true
}));

// Routes
app.use('/api/contact', contactRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio')
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('MongoDB Connection Error:', err.message);
        // Exit process with failure or start server without DB for dev purposes
        // Here we'll start it anyway so frontend doesn't crash entirely on fetch, 
        // but the DB calls will fail.
        app.listen(PORT, () => console.log(`Server running on port ${PORT} (without DB)`));
    });
