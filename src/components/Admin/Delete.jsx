import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import  Backdrop from "../Backdrop/Backdrop"
import Modal from "../Modal/Modal"
import { statusActions } from "../../store/statusSlice"
import { useDispatch } from "react-redux"
const DeleteComponent = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const cancelDeleteHandler = () => {
navigate(-1);
  }
  const acceptDeleteHandler = () => {
    fetch("http://localhost:8080/feature/" + id, {
      method: "DELETE"
    }).then(response => {
      if (!response){
   const err= {message: "err occured", status: response.status}
   throw err
      }
      return response.json()
    })
    .then(result => {
      dispatch(statusActions.turnNotification({
        message:"you have successfully deleted the feature",
        status: "success",
        title: "Delete Feature"
      }));
      setTimeout(() => {
        dispatch(statusActions.turnoffNotification());
      }, 5000)
      navigate(-1)
    }).catch(err => {
      if (err.status && err.status == 404){
        dispatch(statusActions.turnNotification({
          message:"Coudn't find the feature",
          status: "error",
          title: "Delete Feature"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 6000)
      }
      else{
        dispatch(statusActions.turnNotification({
          message:"There is a problem with the server",
          status: "error",
          title: "Delete Feature"
        }));
        setTimeout(() => {
          dispatch(statusActions.turnoffNotification());
        }, 6000)
      }
    });
  }
    return  <>
    <Backdrop onClick={cancelDeleteHandler} />
    <Modal
      title="Delete Feature"
      acceptEnabled={true}
      onCancelModal={cancelDeleteHandler}
      onAcceptModal={acceptDeleteHandler}
      isLoading={false}
    >
      <h1>Are you sure you want to delete this?</h1>
    </Modal>
  </>
  }

  export default DeleteComponent