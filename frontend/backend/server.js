const express = require('express');
const cors = require('cors');
const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/api/Login/login', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

// Login endpoint (temporary for testing)
app.post('/api/Login/login', (req, res) => {
    console.log('Login attempt:', req.body);
    // Temporary response - replace with real authentication
    res.json({
        id_token: 'temp-token-123',
        id: 1
    });
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});