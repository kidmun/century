import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { statusActions } from '../../store/statusSlice';

const AdminFeature = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [features, setFeatures] = useState([]);
    const [deleteMode, setDeleteMode] = useState(false);
    useEffect(() => {
        fetch("http://localhost:8080/features").then((response) => {
          if (!response.ok){
          const err = {
            message: "err occured",
            status: response.status
          }
          throw err
          }
          return response.json();
        }).then(result => {
          
          setFeatures(result.features);
        }).catch(err => {
       
            dispatch(statusActions.turnNotification({
              message:"There is a problem with the server",
              status: "error",
              title: "Get features"
            }));
            setTimeout(() => {
              dispatch(statusActions.turnoffNotification());
            }, 9000)
          
        });
      }, []);
      const editHandler = (id) => {
        console.log(id)
navigate("/admin/edit_feature/"+id);
      }
      


  return (
    <div className="Movies__feature">

        <div className="Movies__feature-container">
            <div className="Movies__feature-container-features">
            <button style={{width: "150px", height: "45px", backgroundColor:"#041d51", color: "white"}} onClick={() => {
                  navigate("/admin/add_feature");
            }}>Add Feature</button>
                {features && features.map(feature => <div className="Movies__feature-container-kids">
                    <img src={"http://localhost:8080/images/" +
                feature.imageUrl.slice(7, feature.imageUrl.length)} alt="Kids"/>
                    <div className="Movies__feature-container-text">
                    <h1>{feature.title}</h1>
                    <p>{feature.description}</p>
                   {!deleteMode && <button style={{width: "100px", height: "45px", backgroundColor:"#041d51", color: "white"}} onClick={editHandler.bind(this, feature._id)}>Edit</button>} 
              
                    {!deleteMode && <button style={{width: "100px", height: "45px",  color: "white", backgroundColor:"#8a0404"}} onClick={() => {
                      setDeleteMode(true);
                      navigate("/delete/"+feature._id);
                    }}>Delete</button>}
                    
                    </div>
                </div>)}
               {features.length === 0 && <h2>No Features</h2>}
            </div>
        </div>
    </div>
  )
}

export default AdminFeature
