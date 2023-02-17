import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import Deal from "../../assets/Deal.jpg"

const Deals = () => {
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
      console.log(err);
    });
  }, []);
  return (
    <div className="Deal__container">
     <div className="Deal__header">
     <h1>Explore our Deals</h1>
   
     </div>
    
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
        <Link to= "/About" className="Deal__header-content-button">More Info</Link>
        </div>)}
     
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
  )
}

export default Deals
