const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.send('This was the last middle wae');
    // Only need to call next() if app.use does not send a response
    next(); 
});

module.exports = app;