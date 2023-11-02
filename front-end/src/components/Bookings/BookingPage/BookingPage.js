import "./BookingPage.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ScheduleIcon from "@mui/icons-material/Schedule";
import Popup from "./Popup/Popup";
import { convertDate } from "../../../utils/dateConverter";

const API_URL = process.env.REACT_APP_API_URL;

const BookingPage = ({ setError, setFormSuccess, setSuccess }) => {
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/bookings/${id}`)
      .then((response) => setBooking(response.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => {
    setShow(true);
  };

  const handleDeleteConfirm = () => {
    axios
        .delete(`${API_URL}/bookings/${id}`)
        .then((res) => {
          if(res.data.success){
            setSuccess("Success! Your booking has been deleted.")
            setFormSuccess(true);
            navigate("/");
        }else{
            setError("Error. Booking could not be deleted.")
            setFormSuccess(true);
        }
        })
        .catch((error) => console.log(error));
  }

  const handleDeleteDeny = () => {
    setShow(false)
  }

  return (
    <div className="BookingPage">
        <Popup show={show} setShow={setShow} handleDeleteConfirm={handleDeleteConfirm} handleDeleteDeny={handleDeleteDeny} />
        <div className="BookingPage-header">{booking.meeting_name}</div>
        <div className="BookingPage-start">
          <ScheduleIcon /> Start: {convertDate(booking.start_date)}
        </div>
        <div className="BookingPage-end">
          <ScheduleIcon /> End: {convertDate(booking.end_date)}
        </div>
        <button type="submit" onClick={handleDelete} >Cancel</button>
    </div>
  );
};

export default BookingPage;
