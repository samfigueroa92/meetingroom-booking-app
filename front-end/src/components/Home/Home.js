import './Home.css'

import MeetingRooms from "../MeetingRooms/MeetingRooms";

const Home = ({ meetingRooms }) => {
    return (
        <div className="Home">
            <MeetingRooms meetingRooms={meetingRooms} />
        </div>
    );
};

export default Home;