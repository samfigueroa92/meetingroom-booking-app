import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import MeetingRooms from "./components/MeetingRooms/MeetingRooms";
import Bookings from "./components/Bookings/Bookings";
import MeetingRoomPage from "./components/MeetingRooms/MeetingRoomPage/MeetingRoomPage";
import BookingPage from "./components/Bookings/BookingPage/BookingPage";
import NewRoom from "./components/MeetingRooms/NewRoom/NewRoom";
import Toast from "./components/Toast/Toast";

const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [formSuccess, setFormSuccess] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  

  useEffect(() => {
    axios
      .get(`${API_URL}/meeting-rooms`)
      .then(res => setMeetingRooms(res.data.payload))
      .catch(err => console.error(err));

    axios
      .get(`${API_URL}/bookings`)
      .then((res) => setBookings(res.data.payload))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Router>
        <Container>
            <NavBar />
            <Toast setFormSuccess={setFormSuccess} formSuccess={formSuccess} success={success} error={error} />
          <Routes>
            <Route path="/" element={<Home meetingRooms={meetingRooms} />} />
            <Route path="/meeting-rooms" element={<MeetingRooms meetingRooms={meetingRooms} />} />
            <Route path="/meeting-rooms/new" element={<NewRoom setFormSuccess={setFormSuccess} setError={setError} setSuccess={setSuccess} />} />
            <Route path="/bookings" element={<Bookings bookings={bookings} meetingRooms={meetingRooms} />} />
            <Route path="/meeting-rooms/:id" element={<MeetingRoomPage bookings={bookings} setFormSuccess={setFormSuccess} setError={setError} setSuccess={setSuccess} />} />
            <Route path="/bookings/:id" element={<BookingPage meetingRooms={meetingRooms} setFormSuccess={setFormSuccess} setError={setError} setSuccess={setSuccess} />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
