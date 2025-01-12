const express = require('express');
const app = express();
const path = require('path');


const routes = require('./src/routes');
app.use(routes);

app.use(express.static('static'));
app.use('/static', express.static(path.join(__dirname, 'static')));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));