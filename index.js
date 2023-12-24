// index.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'skills.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.get('/contact', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, 'public', `contact.html`));
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
