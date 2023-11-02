import "./Bookings.css";

import Booking from "./Booking/Booking";

const Bookings = ({ bookings, meetingRooms }) => {

    return (
        <div className="Bookings">
            {bookings?.map(booking => <Booking booking={booking} key={booking.id} meetingRooms={meetingRooms} />)}
        </div>
    );
};

export default Bookings;