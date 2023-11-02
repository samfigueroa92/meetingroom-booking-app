import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import "./MeetingRoomPage.css";
import BookingCard from "../BookingCard/BookingCard";

const API = process.env.REACT_APP_API_URL;

const MeetingRoomPage = ({ bookings }) => {
  const { id } = useParams();
  const [meetingRoom, setMeetingRoom] = useState({});
  const navigate = useNavigate();
  
  const bookingsCopy = [...bookings];
  const filteredBookings = bookingsCopy.filter(booking => booking.meeting_room_id === +id);

  const [newBooking, setNewBooking] = useState({
    meeting_name: "",
    start_date: "",
    end_date: "",
    meeting_room_id: +id,
    attendees: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/meeting-rooms/${id}`)
      .then((response) => setMeetingRoom(response.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  const addBooking = () => {
    axios
      .post(`${API}/bookings`, newBooking)
      .then((res) => {
        if(res.data.success){
          alert("Booking Created.");
          navigate("/");
      }else{
          alert("Error: booking could not be created.");
      }
      })
      .catch((err) => console.error(err));
  };

  // const date = new Date("2023-11-08T01:12").toISOString() 

  const handleTextChange = (e) => {
    setNewBooking({ ...newBooking, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking();
  };

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
        <form onSubmit={handleSubmit}>
          <label>
            Meeting Name: <input type="text" id="meeting_name" value={newBooking.meeting_name} onChange={handleTextChange} />
          </label>
          <label>
            Start: <input type="datetime-local" id="start_date" value={newBooking.start_date} onChange={handleTextChange}/><CalendarMonthIcon/>
          </label>
          <label>
            End: <input type="datetime-local" id="end_date" value={newBooking.end_date} onChange={handleTextChange}  /><CalendarMonthIcon/>
          </label>
          <label>
            Attendees: <input type="text" id="attendees" value={newBooking.attendees} onChange={handleTextChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="MeetingRoomPage-border"></div>
      <div className="MeetingRoomPage-bookings">
        {filteredBookings.length > 0 ? filteredBookings.map(booking => <BookingCard booking={booking} key={booking.id} />) : <div className="No-Bookings">No bookings found for this room.</div>}
      </div>
    </div>
  );
};

export default MeetingRoomPage;
