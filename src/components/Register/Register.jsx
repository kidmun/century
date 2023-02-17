import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { statusActions } from "../../store/statusSlice";
import "./register.css";


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(null);
  const [fullNameError, setFullNameError] = useState(false);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
const [confirmPassword, setConfirmPassword] = useState(null);
  const fullNameChangeHandler = (event) => {

    setFullName(event.target.value);
      if (!event.target.value){
        setFullNameError(true);
      }
      else{
        setFullNameError(false);
      }
  }; 
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    if (!event.target.value){
      setEmailError(true);
    }
    else{
      setEmailError(false);
    }
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    if (!event.target.value){
      setPasswordError(true);
    }
    else{
      setPasswordError(false);
    }

  };
  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password){
      setPasswordMatch(false)
    }
    else{
      setPasswordMatch(true)
    }
    
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(fullName, email, password)
    if (!fullNameError && !emailError && !passwordError && password === confirmPassword){
      fetch('http://localhost:8080/auth/signup', {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fullName: fullName, email: email, password: password})
      }).then(response => {
      if (!response.ok){
        const err = {message: "err", status: response.status}
        throw err
      }
        return response.json();
      })
      .then(result => {
        dispatch(statusActions.turnNotification({
          message:"you have successfully created an account",
          status: "success",
          title: "signup"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 3000)
        navigate("/login");
      }).catch(err => {
        if (err.status && err.status == 422){
          dispatch(statusActions.turnNotification({
            message:"This a user with this email",
            status: "error",
            title: "signup"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 5000)
        }
        else{
          dispatch(statusActions.turnNotification({
            message:"There is a problem with our server, please wait until we fix it",
            status: "error",
            title: "Signup"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 8000)
        }
        
      });
    };
  };


  return (
    <div className="box-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="Register__form" onSubmit={submitHandler}>
        <h3>Create an account</h3>
          <div className="Register__label">
        <label for="Full Name">Full Name</label>
        <input type="text" placeholder="Full Name" id="fullname" onChange={fullNameChangeHandler} value={fullName}/>
        {fullNameError && <p style={{color: "red"}}>enter your full name</p>}
        <label for="Email">Email</label>
        <input type="text" placeholder="Email" id="email" onChange={emailChangeHandler} value={email}/>
        {emailError && <p style={{color: "red"}}>enter your email</p>}
        <label for="Password">Password</label>
        <input type="Password" placeholder="Password" id="password" onChange={passwordChangeHandler} value={password}/>
        {passwordError && <p style={{color: "red"}}>enter a valid password</p>}
        <label for="confirm password">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" id="confirm password" onChange={confirmPasswordHandler} value={confirmPassword}/>
        {!passwordMatch && <p style={{color: "red"}}>passwords must match</p>}
        </div>
        
          <button type="submit">Sign Up</button>
   
        <div className="other-option">
          <p>Already have an account?</p>
          <Link to={'/login'} className="login-link">Login</Link>
        </div>
        {/* <div className="social">
          <div className="go">
          <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
          <i className="fab fa-facebook"></i> Facebook
          </div>
        </div> */}
      </form>
    </div>
  )
}

export default Register
