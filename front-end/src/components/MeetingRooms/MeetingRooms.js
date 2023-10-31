import axios from 'axios';
import { useEffect, useState } from 'react';

import "./MeetingRooms.css";

import MeetingRoom from "./MeetingRoom/MeetingRoom";

const API_URL = process.env.REACT_APP_API_URL;

const MeetingRooms = () => {
    const [meetingRooms, setMeetingRooms] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLaoding] = useState('')

    useEffect(() => {
        axios
        .get(`${API_URL}/meeting-rooms`)
        .then(res => setMeetingRooms(res.data.payload))
        .catch(err => console.error(err))
        
    }, []);


    return (
        <div className='MeetingRooms'>
            {meetingRooms.map(room => <MeetingRoom room={room} />)}
        </div>
    );
};

export default MeetingRooms;