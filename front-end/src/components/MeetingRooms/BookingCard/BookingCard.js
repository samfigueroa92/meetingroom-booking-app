import "./BookingCard.css";

import ScheduleIcon from '@mui/icons-material/Schedule';

const BookingCard = ({ booking }) => {

    const convertDate = (string) => {
        const date = new Date(string);
        const newDate = date.toLocaleDateString();
        return newDate;
    };

    return (
        <div className="BookingCard">
            <div className="BookingCard-header">{booking.meeting_name}</div>
            <div className="BookingCard-start"><ScheduleIcon/> Start: {convertDate(booking.start_date)}</div>
            <div className="BookingCard-end"><ScheduleIcon/> End: {convertDate(booking.end_date)}</div>
        </div>
    );
};

export default BookingCard;