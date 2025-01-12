const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates', 'home.html')); 
});

router.get('/chordchart', (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates', 'chordchart.html')); 
});

router.get('/tabs', (req, res) => {
    res.sendFile(path.join(__dirname, '../../templates', 'tabs.html')); 
});

module.exports = router;
