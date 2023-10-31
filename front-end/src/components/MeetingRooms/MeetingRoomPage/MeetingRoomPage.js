import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import "./MeetingRoomPage.css";
import BookingCard from "../BookingCard/BookingCard";

const API = process.env.REACT_APP_API_URL;

const MeetingRoomPage = () => {
  const { id } = useParams();
  const [meetingRoom, setMeetingRoom] = useState({});
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/meeting-rooms/${id}`)
      .then((response) => setMeetingRoom(response.data.payload))
      .catch((err) => console.error(err));

    axios
      .get(`${API}/bookings`)
      .then((response) => {
        const data = response.data.payload;
        const filteredList = data.filter(booking => booking.meeting_room_id === +id)
        setBookings(filteredList)
    })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="MeetingRoomPage">
      <div className="MeetingRoomPage_header">
        <div className="MeetingRoomPage_header-name">{meetingRoom.name}</div>
        <div className="MeetingRoomPage_header-capacity">
          <GroupIcon /> Capacity: {meetingRoom.capacity}
        </div>
        <div className="MeetingRoomPage_header-floor">
          <BusinessIcon /> Floor: {meetingRoom.floor}
        </div>
      </div>
      <div className="MeetingRoomPage-border"></div>
      <div className="MeetingRoomPage-form">
        <div>Book room:</div>
        <form>
          <label>
            Meeting Name: <input type="text" />
          </label>
          <label>
            Start: <input type="datetime-local" /><CalendarMonthIcon/>
          </label>
          <label>
            End: <input type="datetime-local" /><CalendarMonthIcon/>
          </label>
          <label>
            Attendees: <input type="text" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="MeetingRoomPage-border"></div>
      <div className="MeetingRoomPage-bookings">
        {bookings.length > 0 ? bookings.map(booking => <BookingCard booking={booking} key={booking.id} />) : <div className="No-Bookings">No bookings found for this room.</div>}

      </div>
    </div>
  );
};

export default MeetingRoomPage;