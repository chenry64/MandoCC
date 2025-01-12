const express = require('express');
const apiRouter = express.Router();
const ChordChartDAO = require('./db/ChordChartDAO.js'); 
const TabChartDAO = require('./db/TabChartDAO.js'); 

apiRouter.use(express.json());

apiRouter.get('/chords', async (req, res) => {
    const chords = await ChordChartDAO.getAllChords();
    res.status(200).json(chords);
});

apiRouter.get('/tabs', async (req, res) => {
    const tabs = await TabChartDAO.getAllTabs();
    res.status(200).json(tabs);
});

apiRouter.post('/chords', async (req, res) => {
    const { title, content } = req.body;
    const newChord = await ChordChartDAO.addChordChart(title, content);
    res.status(201).json(newChord);
});

apiRouter.post('/tabs', async (req, res) => {
    const { title, content } = req.body;
    const newTab = await TabChartDAO.addTabChart(title, content);
    res.status(201).json(newTab);
});

module.exports = apiRouter;
