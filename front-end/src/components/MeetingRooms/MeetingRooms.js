import "./MeetingRooms.css";

import MeetingRoom from "./MeetingRoom/MeetingRoom";

const MeetingRooms = ({ meetingRooms }) => {

    return (
        <div className='MeetingRooms'>
            {meetingRooms.map(room => <MeetingRoom room={room} key={room.id} />)}
        </div>
    );
};

export default MeetingRooms;