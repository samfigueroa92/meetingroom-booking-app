import './Home.css'

import MeetingRooms from "../MeetingRooms/MeetingRooms";

const Home = () => {
    return (
        <div className="Home">
            <h1>Home Page</h1>
            <MeetingRooms />
        </div>
    );
};

export default Home;