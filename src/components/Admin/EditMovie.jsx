import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from './AdminNavbar'
import { statusActions } from '../../store/statusSlice';
import { useDispatch } from 'react-redux';

const EditMovie = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const {id } = useParams();
 
  const [title, setTitle] = useState(null);
  const [titleError, setTitleError] = useState(false);
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [day, setDay] = useState(null);
  const [dayError, setDayError] = useState(false);
  const [time, setTime] = useState(null);
  const [timeError, setTimeError] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8080/movies/"+id).then(response => {
      if (!response.ok){
      const err = {message: "err occured", status: response.status}
      throw err
      }
      return response.json();
    }).then(result => {
   
      setTitle(result.movie.title);
      setDay(result.movie.day);
      setTime(result.movie.time);
      setImage(result.movie.imageUrl);
    })
    .catch(err => {
      if (err.status && err.status == 404){
        dispatch(statusActions.turnNotification({
          message:"Coudn't find the movie",
          status: "error",
          title: "Edit Movie"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 6000)
      }
      else{
        dispatch(statusActions.turnNotification({
          message:"There is a problem with the server",
          status: "error",
          title: "Edit Movie"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 6000)
      }
    });
  }, []);

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
    if (event.target.value.length < 2){
      setDayError(true);
    }
    else{
      setDayError(false);
    }
  };
  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  
    if (event.target.value.length < 3){
      setTimeError(true);
    }
    else{
      setTimeError(false);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (title && image && day && day.length > 1 && time && time.length > 2){
  
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("day", day);
      formData.append("time", time);
      fetch("http://localhost:8080/movie/"+id, {
        method: "PUT", 
        body: formData
      }).then(response => {
        if(!response.ok){
          const err = {message: "err occured", status: response.status}
          throw err
        }
        return response.json();
      }).then(result => {
        dispatch(statusActions.turnNotification({
          message:"you have successfully edited the movie",
          status: "success",
          title: "Edit Movie"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 5000)
        navigate("/admin/movies");
      }).catch(err => {
        if (err.status && err.status == 404){
          dispatch(statusActions.turnNotification({
            message:"Coudn't find the movie",
            status: "error",
            title: "Edit Movie"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 6000)
        }
        else{
          dispatch(statusActions.turnNotification({
            message:"There is a problem with the server",
            status: "error",
            title: "Edit Movie"
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
                <h2>Edit Movie</h2>
            </div>
            <div className="Contact__header-container-form">
                <form className="Contact__header-form" onSubmit={submitHandler}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" name="title" id="title" placeholder="Enter title" onChange={titleChangeHandler} value={title}></input>
                    {titleError && <p style={{color: "red"}}>enter a title</p>}
                    <label htmlFor='image'>Image</label>
                    <input type="file" name="image" id="image" onChange={imageChangeHandler}></input>
                    
                    <label htmlFor='day'>Day</label>
                    <input type="text" name="day" id="day" placeholder="day" onChange={dayChangeHandler} value={day}></input>   
                    {dayError && <p style={{color: "red"}}>enter day</p>}
                    <label htmlFor='time'>Time</label>
                    <input type="text" name="time" id="time" placeholder="time" onChange={timeChangeHandler} value={time}></input>   
                    {timeError && <p style={{color: "red"}}>enter time</p>}
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

export default EditMovie
