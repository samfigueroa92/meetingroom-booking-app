const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (res, req) => {
    res.status(200).send('Service is running!');
});

app.get('*', (req,res) => {
    res.status(404).send("Error: not found");
})

module.exports = app;
