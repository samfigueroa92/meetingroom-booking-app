import "./MeetingRoom.css";

import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';

const MeetingRoom = ({ room }) => {
  const { name, capacity, floor } = room;

  return (
    <div className="MeetingRoom">
      <a href={`/meeting-rooms/${room.id}`}>
        <div className="MeetingRoom-header">{name}</div>
        <div className="MeetingRoom-capacity"> <GroupIcon/> Capacity: {capacity}</div>
        <div className="MeetingRoom-floor"> <BusinessIcon/> Floor: {floor}</div>
      </a>
    </div>
  );
};

export default MeetingRoom;
