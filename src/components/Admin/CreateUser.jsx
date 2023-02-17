import React from 'react'
import { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { statusActions } from '../../store/statusSlice'
import { useDispatch } from 'react-redux'


const CreateUser = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(null);
  const [fullNameError, setFullNameError] = useState(false);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassord] = useState(null);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassord] = useState(null);
  const [confirmPasswordError, setConfirmPassordError] = useState(false);
  const [status, setStatus] = useState("subtenant");

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
    setPassord(event.target.value);
    if (event.target.value.length < 4){
      setPasswordError(true);
    }
    else{
      setPasswordError(false);
    }
  };
  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassord(event.target.value);
    console.log(password,event.target.value)
    if(event.target.value !== password){
        setConfirmPassordError(true);
    }
    else{
      setConfirmPassordError(false);
    }
  };
  const statusChangeHandler = (event)=> {
   setStatus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
 
    if (fullName && email && password === confirmPassword && status){
      fetch("http://localhost:8080/auth/signup", {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password,
        status: status
        })
      }).then(response => {
        if(!response.ok){
          const err = {message: "err", status: response.status}
          throw err
        }
        return response.json();
      }).then(result => {
        dispatch(statusActions.turnNotification({
          message:"you have successfully created  account",
          status: "success",
          title: "Create Account"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 5000)
      }).catch(err => {
        if (err.status && err.status == 422){
          dispatch(statusActions.turnNotification({
            message:"This a user with this email",
            status: "error",
            title: "Signup"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 5000)
        }
        else{
          dispatch(statusActions.turnNotification({
            message:"There is a problem with our server, please wait until we fix it",
            status: "error",
            title: "Create User"
          }));
          setTimeout(() => {
            dispatch(statusActions.turnoffNotification());
          }, 8000)
        }
      });
      
      
    };
  };

  return (<>
  <AdminNavbar/>
  
    <div className="Contact__header">
          <div className="Contact__header-container">
          
                <h2>Create User</h2>
               
           
            <div className="Contact__header-container-form">
                <form className="Contact__header-form" onSubmit={submitHandler}>
                    <label htmlFor='fullName'>Full Name</label>
                    <input type="text" name="fullName" id="fullName" placeholder="Enter fullName" onChange={fullNameChangeHandler} value={fullName}></input>
                    {fullNameError && <p style={{color: "red"}}>enter fullName</p>}  
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="email" placeholder="email" onChange={emailChangeHandler}></input>   
                    {emailError && <p style={{color: "red"}}>enter email</p>}
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="password" placeholder="password" onChange={passwordChangeHandler}></input>   
                    {passwordError && <p style={{color: "red"}}>enter password</p>}
                    <label htmlFor='confirmPassword'> Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirmPassword" onChange={confirmPasswordChangeHandler}></input>   
                    {confirmPasswordError && <p style={{color: "red"}}>Passwords must match</p>}
                    <label htmlFor='status'> Status</label>
                    <select id="status" name="status" onChange={statusChangeHandler}>
                    <option value="admin">admin</option>
                        <option value="subtenant">subtenant</option>
                       
</select>
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

export default CreateUser
