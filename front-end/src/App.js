import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import MeetingRooms from "./components/MeetingRooms/MeetingRooms";
import Bookings from "./components/Bookings/Bookings";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Container>
            <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meeting-rooms" element={<MeetingRooms />} />
            <Route path="/bookings" element={<Bookings/>} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
