const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// Story route
app.get('/story', (req, res) => {
    res.render('pages/story', {
        title: 'Our Story',
        heading: 'Our Restaurant Story',
        content: 'This is where the full restaurant story would be described in detail...'
    });
});

// Ingredients route
app.get('/ingredients', (req, res) => {
    res.render('pages/ingredients', {
        title: 'Fresh Ingredients',
        heading: 'Fresh and Healthy Ingredients',
        content: 'We use locally sourced, organic ingredients to create unforgettable meals...'
    });
});

// Taste route
app.get('/taste', (req, res) => {
    res.render('pages/taste', {
        title: 'Taste Experience',
        heading: 'Savoring Every Bite',
        content: 'Each dish is designed to deliver a perfect balance of flavor and texture...'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});