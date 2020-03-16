const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.post('/upload', (req, res) => {
    console.log(req.file);
    res.send("file recieved");
})

app.listen( 5000, () => console.log(`server is started`));
