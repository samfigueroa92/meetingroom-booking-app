const db = require('../db/dbConfig');

const getAllBookings = async () => {
    try {
        const allBookings = await db.any('SELECT * FROM bookings ORDER BY id ASC;');
        return allBookings;
    } catch (err){
        return err;
    };
};

const getBooking = async (id) => {
    try{
        const booking = await db.one('SELECT * FROM bookings WHERE id=$1', id);
        return booking;
    } catch (err){
        return err
    };
};

const createBooking = async (booking) => {
    const {meeting_name, meeting_room_id, start_date, end_date, attendees } = booking;

    try {
        const booking = await db.one('INSERT INTO bookings (meeting_name, meeting_room_id, start_date, end_date, attendees) VALUES ($1, $2, $3, $4, $5) RETURNING *', [
            meeting_name, meeting_room_id, start_date, end_date, attendees
        ]);
        return booking;

    } catch (err){
        return err;
    };
};

const deleteBooking = async (id) => {
    try {
        const booking = await db.one('DELETE FROM bookings WHERE id=$1 RETURNING *', id);
        return booking;
    } catch (err){
        return err
    };
};

module.exports = {
    getAllBookings,
    getBooking,
    createBooking,
    deleteBooking,
};