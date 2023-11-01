import './Home.css'

import MeetingRooms from "../MeetingRooms/MeetingRooms";

const Home = ({ meetingRooms }) => {
    return (
        <div className="Home">
            <h1>Home Page</h1>
            <MeetingRooms meetingRooms={meetingRooms} />
        </div>
    );
};

export default Home;