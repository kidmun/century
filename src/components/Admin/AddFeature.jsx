import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { statusActions } from '../../store/statusSlice';
import AdminNavbar from './AdminNavbar'


const AddFeature = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);
  const [titleError, setTitleError] = useState(false);
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [description, setDescription] = useState(null);
  const [descriptionError, setDescriptionError] = useState(false);
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
    
    if (title && image && description && description.length > 5){
      console.log("ddd")
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("description", description);
      fetch("http://localhost:8080/feature", {
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
          message:"you have successfully added the feature",
          status: "success",
          title: "Add Feature"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 5000)
        navigate("/admin");
      }).catch(err => {
        if (err.status && err.status == 422){
          dispatch(statusActions.turnNotification({
            message:"Entered data is not correct",
            status: "error",
            title: "Add Feature"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 6000)
        }
        else{
          dispatch(statusActions.turnNotification({
            message:"There is a problem with the server",
            status: "error",
            title: "Add Feature"
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
                    <input type="file"  name="image" id="image" onChange={imageChangeHandler}></input>
                    
                    <label htmlFor='description'>Description</label>
                    <textarea type="text" name="description" id="description" placeholder="description" cols="100" rows="5" onChange={descriptionChangeHandler}></textarea>   
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

export default AddFeature
