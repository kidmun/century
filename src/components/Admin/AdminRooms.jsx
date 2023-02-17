import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import AdminNavbar from './AdminNavbar'
import { statusActions } from '../../store/statusSlice'
import { useDispatch } from 'react-redux'

const AdminRooms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/rooms").then((response) => {
      if (!response.ok){
        throw new Error("response not ok");
      }
      return response.json();
    }).then(result => {
      console.log(result);
      setRooms(result.rooms);
    }).catch(err => {
      dispatch(statusActions.turnNotification({
        message:"There is a problem with the server",
        status: "error",
        title: "Get Rooms"
      }));
      setTimeout(() => {
        dispatch(statusActions.turnoffNotification());
      }, 9000)
    });
  }, []);
  return (
    <>
    <AdminNavbar/>
    <button style={{width: "150px", backgroundColor:"#041d51", color: "white",height: "45px"}} onClick={() => {
                  navigate("/admin/add_room");
            }}>Add Room</button>
    <div className="Deal__container">
    
    
      <div className="Deal__container-header01">
      {rooms && rooms.map(room => <div className="Deal__container-header">
        <img src={"http://localhost:8080/images/" +
                room.imageUrl.slice(7, room.imageUrl.length)} alt="Deal"/>
        <div className="Deal__container-header-heading">
          <h1>{room.title}</h1>
      {room.available ? <p>available</p>:<p>not available</p>}
        </div>
        <div className="Deal__container-header-subheading">
          <h4>Floor No {room.floorNo}</h4>
          <h4>Room No {room.roomNo}</h4>
        </div>
        <button style={{width: "100px",backgroundColor:"#041d51", color: "white",height: "45px"}} onClick={() => {
          navigate("/admin/edit_room/"+room._id);
        }}>Edit</button>
                <button style={{width: "100px", color: "white", backgroundColor:"#8a0404", height: "45px"}} onClick={() => {
                     
                     navigate("/room/delete/"+room._id);
                   }}>Delete</button>
        </div>)}
        {rooms.length === 0 && <h2>No Rooms</h2>}
     
      </div> 


      {/* <div className="Deal__container-header01">
        <div className="Deal__container-header">
        <img src={Deal} alt="Deal"/>
        <div className="Deal__container-header-heading">
          <h1>Fana kids</h1>
          <p>Not-available</p>
        </div>
        <div className="Deal__container-header-subheading">
          <h3>Ground Floor</h3>
          <h4>No.01</h4>
        </div>
        <Link to= "/About" className="Deal__header-content-button">More Info</Link>
        </div>

        <div className="Deal__container-header">
        <img src={Deal} alt="Deal"/>
        <div className="Deal__container-header-heading">
          <h1>Fana kids</h1>
          <p>Not-available</p>
        </div>
        <div className="Deal__container-header-subheading">
          <h3>Ground Floor</h3>
          <h4>No.01</h4>
        </div>
        <Link to= "/About" className="Deal__header-content-button">More Info</Link>
        </div>

        <div className="Deal__container-header">
        <img src={Deal} alt="Deal"/>
        <div className="Deal__container-header-heading">
          <h1>Fana kids</h1>
          <p>Not-available</p>
        </div>
        <div className="Deal__container-header-subheading">
          <h3>Ground Floor</h3>
          <h4>No.01</h4>
        </div>
        <Link to= "/About" className="Deal__header-content-button">More Info</Link>
        </div>

      </div>

      <div className="Deal__container-header01">
        <div className="Deal__container-header">
        <img src={Deal} alt="Deal"/>
        <div className="Deal__container-header-heading">
          <h1>Fana kids</h1>
          <p>Not-available</p>
        </div>
        <div className="Deal__container-header-subheading">
          <h3>Ground Floor</h3>
          <h4>No.01</h4>
        </div>
        <Link to= "/About" className="Deal__header-content-button">More Info</Link>
        </div>

        <div className="Deal__container-header">
        <img src={Deal} alt="Deal"/>
        <div className="Deal__container-header-heading">
          <h1>Fana kids</h1>
          <p>Not-available</p>
        </div>
        <div className="Deal__container-header-subheading">
          <h3>Ground Floor</h3>
          <h4>No.01</h4>
        </div>
        <Link to= "/About" className="Deal__header-content-button">More Info</Link>
        </div>

        <div className="Deal__container-header">
        <img src={Deal} alt="Deal"/>
        <div className="Deal__container-header-heading">
          <h1>Fana kids</h1>
          <p>Not-available</p>
        </div>
        <div className="Deal__container-header-subheading">
          <h3>Ground Floor</h3>
          <h4>No.01</h4>
        </div>
        <Link to= "/About" className="Deal__header-content-button">More Info</Link>
        </div>

      </div> */}


    </div>
    </>
  )
}

export default AdminRooms
