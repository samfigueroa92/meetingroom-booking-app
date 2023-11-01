const express = require('express');
const meetingRooms = express.Router();

const {
    getAllMeetingRooms,
    getMeetingRoom,
    createMeetingRoom,
} = require('../queries/meetingRooms');

meetingRooms.get('/', async (req, res) => {
    const allMeetingRooms = await getAllMeetingRooms();

    if(allMeetingRooms[0]){
        res.status(200).json({ payload: allMeetingRooms, success: true });
    }else{
        res.status(500).json({ payload: "Servor Error", success: false });
    };
});

meetingRooms.get('/:id', async (req, res) => {
    const { id } = req.params;
    const meetingRoom = await getMeetingRoom(id);
    if(meetingRoom.id){
        res.json({ payload: meetingRoom, success:true });
    }else{
        res.status(404).json({ payload:`Meeting Room ${id} not found.`, success: false })
    };
});

meetingRooms.post('/', async (req, res) => {
    const { body } = req;
    try {
        const newMeetingRoom = await createMeetingRoom(body);
        if (newMeetingRoom.id){
            res.status(200).json({ payload: newMeetingRoom, success: true});
        } else {
            throw error;
        };
    } catch (err) {
        res.status(422).json({ payload: "Server Error. Could Not Create Room.", success: false });
    };
});

module.exports = meetingRooms;