import React from 'react'
import { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { statusActions } from '../../store/statusSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(null);
  const [titleError, setTitleError] = useState(false);
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [day, setDay] = useState(null);
  const [dayError, setDayError] = useState(false);
  const [time, setTime] = useState(null);
  const [timeError, setTimeError] = useState(false);
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    if (!event.target.value){
      setTitleError(true);
    }
    else{
      setTitleError(false);
    }
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
  const dayChangeHandler = (event) => {
    setDay(event.target.value);
    if (event.target.value.length < 3){
      setDayError(true);
    }
    else{
      setDayError(false);
    }
  };
  const timeChangeHandler = (event) => {
    setTime(event.target.value);
    if (event.target.value.length < 4){
      setTimeError(true);
    }
    else{
      setTimeError(false);
    }
  };


  const submitHandler = (event) => {
    event.preventDefault();
    
    if (title && image && day && day.length > 2 && time && time.length > 3){
    
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("day", day);
      formData.append("time", time);
      fetch("http://localhost:8080/movie", {
        method: "POST", 
        body: formData
      }).then(response => {
        if(!response.ok){
        const err = {message: "err", status: response.status}
        throw err
        }
        return response.json();
      }).then(result => {
        dispatch(statusActions.turnNotification({
          message:"you have successfully added the movie",
          status: "success",
          title: "Add Movie"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 3000)
       navigate("/admin/movies");
      }).catch(err => {
        if (err.status && err.status == 422){
          dispatch(statusActions.turnNotification({
            message:"Entered data is not correct",
            status: "error",
            title: "Add Movie"
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
                <h2>Add Movie</h2>
               
            </div>
            <div className="Contact__header-container-form">
                <form className="Contact__header-form" onSubmit={submitHandler}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" name="title" id="title" placeholder="Enter title" onChange={titleChangeHandler} value={title}></input>
                    {titleError && <p style={{color: "red"}}>enter a title</p>}
                    <label htmlFor='image'>Image</label>
                    <input type="file" name="image" id="image" onChange={imageChangeHandler}></input>
                    
                    <label htmlFor='day'>Day</label>
                    <input type="text" name="day" id="day" placeholder="day" onChange={dayChangeHandler}></input>   
                    {dayError && <p style={{color: "red"}}>enter day</p>}
                    
                    <label htmlFor='time'>Time</label>
                    <input type="text" name="time" id="time" placeholder="time" onChange={timeChangeHandler}></input>   
                    {dayError && <p style={{color: "red"}}>enter time</p>}
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

export default AddMovie
