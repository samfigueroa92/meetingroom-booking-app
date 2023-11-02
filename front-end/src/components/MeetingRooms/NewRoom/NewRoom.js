import "./NewRoom.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const API_URL = process.env.REACT_APP_API_URL;

const NewRoom = ({ setFormSuccess }) => {
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
                setFormSuccess(true)
                navigate("/");
            }else{
                alert("Error: room could not be created.");
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
            <div className="NewRoom-header">Create a Room</div>
            <div className="NewRoom-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        Room Name: <input type="text" id="name" value={newRoom.name} onChange={handleTextChange} />
                    </label>
                    <label>
                        Floor: <input type="text" id="floor" value={newRoom.floor} onChange={handleTextChange} />
                    </label>
                    <label>
                        Capacity: <input type="number" id="capacity" value={newRoom.capacity} onChange={handleTextChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>

            </div>

        </div>
    );
};

export default NewRoom;