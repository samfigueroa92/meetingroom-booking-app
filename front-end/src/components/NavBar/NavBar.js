import "./NavBar.css";

import HomeIcon from "@mui/icons-material/Home";

const NavBar = () => {
  return (
    <div className="NavBar">
      <a href="/">
        <HomeIcon fontSize="large" />
      </a>
      <button className="NavBar-meetings">
        <a href="/meeting-rooms">Meeting Rooms</a>
      </button>
      <button className="NavBar-bookings">Bookings</button>
      <button className="NavBar-new">New Room</button>
    </div>
  );
};

export default NavBar;
