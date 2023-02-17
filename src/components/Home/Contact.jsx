import React, { useState } from 'react'
import Contacts from "../../assets/Contact.png"

const Contactss = () => {
  const [fullName, setFullName] = useState(null);
  const [fullNameError, setFullNameError] = useState(false);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [comment, setComment] = useState(null);
  const [commentError, setCommentError] = useState(false);
  const fullNameChangeHandler = (event) => {
    setFullName(event.target.value)
    if (!event.target.value){
      setFullNameError(true)
    }
    else{
      setFullNameError(false)
    }
  }
  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
    if (!event.target.value){
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }
  }
  const commentChangeHandler = (event) => {
    setComment(event.target.value)
    if (event.target.value.length < 2){
      setCommentError(true)
    }
    else{
      setCommentError(false)
    }
  }
  const submitHandler = (event) => {
    console.log(fullName, email, comment, "ddd")
    event.preventDefault()
    
    if (fullName && email && comment && comment.length > 1){
      fetch('http://localhost:8080/message', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullName: fullName, email: email, comment: comment})
      }).then(response => {
      
        return response.json();
      })
      .then(result => {
        console.log(result)
      }).catch(err => {
        console.log(err)
      });
    }
  };
  

  return (
    <div className="Contact__header">
          <div className="Contact__header-container">
            <div className="Contact__header-container-header">
                <h1>Get In Touch</h1>
                <p>We are here for you! How can we help</p>
            </div>
            <div className="Contact__header-container-form">
                <form className="Contact__header-form" onSubmit={submitHandler}>
                    <label htmlFor='Full Name'>Full Name</label>
                    <input type="text" name="fname" id="fname" placeholder="Enter your Fullname" onChange={fullNameChangeHandler} value={fullName}></input>
                    {fullNameError && <p style={{color: "red"}}>enter a value</p>}
                    <label htmlFor='Email'>Email</label>
                    <input type="text" name="Email" id="Email" placeholder="Enter your Email" onChange={emailChangeHandler} value={email}></input>
                    {emailError && <p style={{color: "red"}}>enter a value</p>}
                    <label htmlFor='Comments'>Comments</label>
                    
                    <input type="text" name="Comment" id="Comment" placeholder="Enter your Comments" onChange={commentChangeHandler} value={comment}></input>   
                    {commentError && <p style={{color: "red"}}>enter a value</p>}
                    <button type='submit'>Submit</button>
                </form>
                
            </div>
          </div>
          <div className="Contact__header-container-Contacts">
          <div className="Contact__header-container-img">
            <img src={Contacts} alt="contacts"></img>
          </div>
          
          </div>
    </div>
  )
}

export default Contactss
