import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { statusActions } from "../../store/statusSlice";

import "./login.css";

const LogIn = () => {
  const dispatch = useDispatch();
 

  const navigate = useNavigate(); 
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] =  useState(false);
  const [password, setPassword] = useState(null); 
  const [passwordError, setPasswordError] = useState(false);
  const emailChangeHandler = (event) => {
   
console.log(event.target.value);
setEmail(event.target.value);
if (!event.target.value){
  setEmailError(true);
}
else{
  setEmailError(false)
  
}
  };
  const passwordChangeHandler = (event) => {
    
    console.log(event.target.value);
    setPassword(event.target.value)
    if (event.target.value.length < 4){
      setPasswordError(true);
    }
    else{
      setPasswordError(false)
     

    }
      };
      const submitHandler = (event) => {
          event.preventDefault();
          console.log(email, password)
          if (!emailError && !passwordError){
            fetch('http://localhost:8080/auth/login', {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email: email, password: password})
            }).then(response => {
              console.log("ddd")
              if (!response.ok){
                  const err = {message: "error", status: response.status}
                throw err;
              }
              return response.json();
            })
            .then(result => {
              dispatch(statusActions.turnNotification({
                message:"you are successfully logged in",
                status: "success",
                title: "login"
              }));
              setTimeout(() => {
                dispatch(statusActions.turnoffNotification());
              }, 3000)
              
              if (result.userStatus === "client"){

                navigate("/");
              }
              else if(result.userStatus === "admin"){
                navigate("/admin")
              }
            }).catch(err => {
            if (err.status && err.status == 401){ 
              dispatch(statusActions.turnNotification({
              message:"There is no user with this email and password",
              status: "error",
              title: "login"
            }));
            setTimeout(() => {
              dispatch(statusActions.turnoffNotification());
            }, 6000)}
            else{
              dispatch(statusActions.turnNotification({
                message:"There is a problem with our server, please wait until we fix it",
                status: "error",
                title: "login"
              }));
              setTimeout(() => {
                dispatch(statusActions.turnoffNotification());
              }, 8000)
            }
             
              
              console.log(err)
            });
          }
          
      };
  return (
    <div className="box-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="Login__form" onSubmit={submitHandler}>
        <h3>Login to your account</h3>
        <div className="Login__label">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="email" id="email" onChange={emailChangeHandler} value={email}/>
        {emailError && <p style={{color: "red"}}>enter a value</p>}
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={passwordChangeHandler} value={password}/>
        {passwordError && <p style={{color: "red"}}>enter a valid password</p>}
        </div>
       
          <button type="submit">Log In</button>
        <div className="other-option">
          <p>Don't have an account?</p>
          <Link to={'/signup'} className="register-link">Register</Link>
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
  );
};

export default LogIn;
