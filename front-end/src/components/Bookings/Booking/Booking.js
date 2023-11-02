import "./Booking.css";

import ScheduleIcon from '@mui/icons-material/Schedule';
import BusinessIcon from "@mui/icons-material/Business";
import { convertDate } from "../../../utils/dateConverter";

const Booking = ({ booking, meetingRooms }) => {
  const { id, meeting_name, start_date, end_date } = booking;
  const foundRoom = meetingRooms?.find(room => room.id === booking.meeting_room_id);

  return (
    <div className="Booking">
      <a href={`/bookings/${id}`}>
        <div className="Booking-name">{meeting_name}</div>
        <div className="Booking-room">{foundRoom?.name}</div>
        <div className="Booking-start"><ScheduleIcon /> Start: {convertDate(start_date)}</div>
        <div className="Booking-end"><ScheduleIcon /> End: {convertDate(end_date)}</div>
        <div className="Booking-floor"><BusinessIcon /> Floor:{foundRoom?.floor}</div>
      </a>
    </div>
  );
};

export default Booking;
