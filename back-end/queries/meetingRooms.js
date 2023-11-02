const db = require('../db/dbConfig');

const getAllMeetingRooms = async () => {
    try {
        const allMeetingRooms = await db.any('SELECT * FROM meetingRooms');
        return allMeetingRooms;
    } catch(err) {
        return err;
    };
};

const getMeetingRoom = async (id) => {
    try{
        const meetingRoom = await db.one('SELECT * FROM meetingRooms WHERE id=$1', id);
        return meetingRoom;

    } catch (err) {
        return err;
    };
};

const createMeetingRoom = async (meetingRoom) => {
    const { name, capacity, floor } = meetingRoom;

    try {
        const newMeetingRoom = await db.one('INSERT INTO meetingRooms (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *', [name, capacity, floor]);
        return newMeetingRoom;
    } catch (err) {
        return err;
    };
};

module.exports = {
    getAllMeetingRooms,
    getMeetingRoom,
    createMeetingRoom,
};
