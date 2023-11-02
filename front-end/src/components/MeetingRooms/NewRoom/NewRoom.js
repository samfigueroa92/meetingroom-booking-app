import "./NewRoom.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

const NewRoom = ({ setFormSuccess, setError, setSuccess }) => {
    const [newRoom, setNewRoom] = useState({
        name: "",
        capacity: "",
        floor: "",
      });

      const navigate = useNavigate();

      const addRoom = () => {
        axios
          .post(`${API_URL}/meeting-rooms`, newRoom)
          .then((res) => {
            if(res.data.success){
                setSuccess("Success! Your new room has been created.")
                setFormSuccess(true);
                navigate("/");
            }else{
                setError("Error. Room could not be created.")
                setFormSuccess(true);
            }
          })
          .catch((err) => console.log(err));
      };
    
      const handleTextChange = (e) => {
        setNewRoom({ ...newRoom, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addRoom();
      };

    return (
        <div className="NewRoom">
            <div className="NewRoom-header">
                Create a Room
                <br/>
                <span>* All fields required</span>
                </div>
            <div className="NewRoom-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        * Room Name: <input type="text" id="name" value={newRoom.name} onChange={handleTextChange} required />
                    </label>
                    <label>
                        * Floor: <input type="text" id="floor" value={newRoom.floor} onChange={handleTextChange} required />
                    </label>
                    <label>
                        * Capacity: <input type="number" id="capacity" value={newRoom.capacity} onChange={handleTextChange} required />
                    </label>
                    <button type="submit">Submit</button>
                </form>

            </div>

        </div>
    );
};

export default NewRoom;