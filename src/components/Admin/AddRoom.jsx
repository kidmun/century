import React from 'react'
import { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { statusActions } from '../../store/statusSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [floorNo, setFloorNo] = useState(null);
  const [floorNoError, setFloorNoError] = useState(false);
  const [roomNo, setRoomNo] = useState(null);
  const [roomNoError, setRoomNoError] = useState(false);
  const [available, setAvailable] = useState(false);
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
   
  };
  const imageChangeHandler = (event) => {
    setImage(event.target.files[0]);
    if (!event.target.files){
      setImageError(true);
    }
    else{
      setImageError(false);
    }
  };
  const floorNoChangeHandler = (event) => {
    setFloorNo(event.target.value);
    if (event.target.value.length < 2){
      setFloorNoError(true);
    }
    else{
      setFloorNoError(false);
    }
  };
  const roomNoChangeHandler = (event) => {
    setRoomNo(event.target.value);
    if (event.target.value.length < 3){
      setRoomNoError(true);
    }
    else{
      setRoomNoError(false);
    }
  };
  const availableChangeHandler = (event) => {
    console.log(event.target.value)
    setAvailable(prevState => {
        return !prevState
    });
  };


  const submitHandler = (event) => {
    event.preventDefault();
    
    if (image && floorNo && floorNo.length > 1 && roomNo && roomNo.length > 2){
    
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("floorNo", floorNo);
      formData.append("roomNo", roomNo);
      formData.append("available", available);
      fetch("http://localhost:8080/room", {
        method: "POST", 
        body: formData
      }).then(response => {
        if(!response.ok){
          const err = {message: "err", status: response.status}
          throw err;
        }
        return response.json();
      }).then(result => {
        dispatch(statusActions.turnNotification({
          message:"you have successfully added the room",
          status: "success",
          title: "Add Room"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 3000)
       navigate("/admin/rooms");
      }).catch(err => {
        if (err.status && err.status == 422){
          dispatch(statusActions.turnNotification({
            message:"Entered data is not correct",
            status: "error",
            title: "Add Room"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 6000)
        }
        else{
          dispatch(statusActions.turnNotification({
            message:"There is a problem with the server",
            status: "error",
            title: "Add Room"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 6000)
        }
       
      });
      
      
    };
  };

  return (<>
  <AdminNavbar/>
  
    <div className="Contact__header">
          <div className="Contact__header-container">
            <div className="Contact__header-container-header">
                <h2>Add Room</h2>
               
            </div>
            <div className="Contact__header-container-form">
                <form className="Contact__header-form" onSubmit={submitHandler}>
                    <label htmlFor='title'>Title(optional)</label>
                    <input type="text" name="title" id="title" placeholder="Enter title" onChange={titleChangeHandler} value={title}></input>
                    <label htmlFor='image'>Image</label>
                    <input type="file" name="image" id="image" onChange={imageChangeHandler}></input>
                    
                    <label htmlFor='floorNo'>Floor No</label>
                    <input type="text" name="floorNo" id="floorNo" placeholder="floorNo" onChange={floorNoChangeHandler}></input>   
                    {floorNoError && <p style={{color: "red"}}>enter floor</p>}
                    
                    <label htmlFor='roomNo'>Room No</label>
                    <input type="text" name="roomNo" id="roomNo" placeholder="roomNo" onChange={roomNoChangeHandler}></input>   
                    {roomNoError && <p style={{color: "red"}}>enter room</p>}
                <br/>
                <div>  
                    <input type="checkbox" value={available} id="male"
              onChange={availableChangeHandler} name="available" />
               <label htmlFor="male">Available</label>
                    
               </div>
             
                    <button type='submit'>Submit</button>
                    
                </form>
                
                
            </div>
          </div>
          <div className="Contact__header-container-Contacts">
        
          
          </div>
    </div>
    </>
  )
}

export default AddRoom
