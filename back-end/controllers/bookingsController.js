const express = require('express');
const bookings = express.Router();

const {
    getAllBookings,
    getBooking,
    createBooking,
    deleteBooking,
} = require('../queries/bookings');

bookings.get('/', async (req, res) => {
    const allBookings = await getAllBookings();
    if(allBookings[0]){
        res.status(200).json({ payload: allBookings, success: true });
    }else{
        res.status(500).json({ payload: "Server error." });
    };
});

bookings.get('/:id', async (req, res) => {
    const { id } = req.params;
    const booking = await getBooking(id);
    if(booking.id){
        res.status(200).json({ payload: booking, success: true });
    }else{
        res.status(404).json({ payload: `Error: Booking ${id} not found.`, success: false });
    };
});

bookings.post('/', async (req, res) => {
    const { body } = req;

    try {
        const createdBooking = await createBooking(body);
        if(createdBooking.id){
            res.status(200).json({ payload: createdBooking, success: true });
        }else{
            res.status(422).json({ payload: "Error", success: false })
        }
    } catch(err){
        return err;
    };
});

module.exports = bookings;