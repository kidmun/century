import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from './AdminNavbar'
import { statusActions } from '../../store/statusSlice';
import { useDispatch } from 'react-redux';


const EditFeature = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id } = useParams();
 
  const [title, setTitle] = useState(null);
  const [titleError, setTitleError] = useState(false);
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [description, setDescription] = useState(null);
  const [descriptionError, setDescriptionError] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8080/features/"+id).then(response => {
      if (!response.ok){
        console.log(response)
        throw new Error("response not ok");
      }
      return response.json();
    }).then(result => {
    
      setTitle(result.feature.title);
      setDescription(result.feature.description);
      setImage(result.feature.imageUrl);
     
    })
    .catch(err => {
      if (err.status && err.status == 404){
        dispatch(statusActions.turnNotification({
          message:"Coudn't find the feature",
          status: "error",
          title: "Edit Feature"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 6000)
      }
      else{
        dispatch(statusActions.turnNotification({
          message:"There is a problem with the server",
          status: "error",
          title: "Edit Feature"
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
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
    if (event.target.value.length < 5){
      setDescriptionError(true);
    }
    else{
      setDescriptionError(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title, description, image)
    if (title && image && description && description.length > 5){
  
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("description", description);
      fetch("http://localhost:8080/feature/"+id, {
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
          message:"you have successfully edited the feature",
          status: "success",
          title: "Edit Feature"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 5000)
       navigate("/admin");
      }).catch(err => {
        if (err.status && err.status == 404){
          dispatch(statusActions.turnNotification({
            message:"Coudn't find the feature",
            status: "error",
            title: "Edit Feature"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 6000)
        }
        else{
          dispatch(statusActions.turnNotification({
            message:"There is a problem with the server",
            status: "error",
            title: "Edit Feature"
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
                <h2>Add Feature</h2>
               
            </div>
            <div className="Contact__header-container-form">
                <form className="Contact__header-form" onSubmit={submitHandler}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" name="title" id="title" placeholder="Enter title" onChange={titleChangeHandler} value={title}></input>
                    {titleError && <p style={{color: "red"}}>enter a title</p>}
                    <label htmlFor='image'>Image</label>
                    <input type="file" name="image" id="image" onChange={imageChangeHandler}></input>
                    
                    <label htmlFor='description'>Description</label>
                    <input type="description" name="description" id="description" placeholder="description" onChange={descriptionChangeHandler} value={description}></input>   
                    {descriptionError && <p style={{color: "red"}}>enter description</p>}
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

export default EditFeature
