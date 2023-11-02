import "./BookingCard.css";

import ScheduleIcon from '@mui/icons-material/Schedule';
import { convertDate } from "../../../utils/dateConverter";

const BookingCard = ({ booking }) => {

    return (
        <div className="BookingCard">
            <div className="BookingCard-header">{booking.meeting_name}</div>
            <div className="BookingCard-start"><ScheduleIcon/> Start: {convertDate(booking.start_date)}</div>
            <div className="BookingCard-end"><ScheduleIcon/> End: {convertDate(booking.end_date)}</div>
        </div>
    );
};

export default BookingCard;