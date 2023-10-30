const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const meetingRoomsController = require('./controllers/meetingRoomsController');
const bookingsController = require('./controllers/bookingsController');

app.use('/meeting-rooms', meetingRoomsController);
app.use('/bookings', bookingsController);

app.get('/', (req, res) => {
    res.status(200).json({ data: 'Service is running.' });
});

app.get('*', (req, res) => {
    res.status(404).json({ data: 'Error: Not Found.'});
})

module.exports = app;
