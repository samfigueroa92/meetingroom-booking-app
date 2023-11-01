import "./BookingPage.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BusinessIcon from "@mui/icons-material/Business";
import ScheduleIcon from "@mui/icons-material/Schedule";

const API_URL = process.env.REACT_APP_API_URL;

const BookingPage = ({ meetingRooms }) => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});

  //   const roomsCopy = [...meetingRooms];
  //   const foundRoom = roomsCopy.find(room => room.id === booking.meeting_room_id);

  useEffect(() => {
    axios
      .get(`${API_URL}/bookings/${id}`)
      .then((response) => setBooking(response.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    axios
        .delete(`${API_URL}/bookings/${id}`)
        .then((response) => alert('Success!'))
        .catch((error) => console.log(error));
};

  return (
    <div className="BookingPage">
        <div className="BookingPage-header">{booking.meeting_name}</div>
        <div className="BookingPage-start">
          <ScheduleIcon /> Start: {booking.start_date}
        </div>
        <div className="BookingPage-end">
          <ScheduleIcon /> End: {booking.end_date}
        </div>
        <div className="BookingPage-floor">
          <BusinessIcon /> Floor: {""}
        </div>
        <button type="submit" onClick={handleDelete} >Cancel</button>
    </div>
  );
};

export default BookingPage;
