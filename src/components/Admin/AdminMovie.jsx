import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import AdminNavbar from './AdminNavbar'
import { statusActions } from '../../store/statusSlice'
import { useDispatch } from 'react-redux'


const AdminMovie = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/movies").then((response) => {
      if (!response.ok){
        throw new Error("response not ok");
      }
      return response.json();
    }).then(result => {
      console.log(result);
      setMovies(result.movies);
    }).catch(err => {
      dispatch(statusActions.turnNotification({
        message:"There is a problem with the server",
        status: "error",
        title: "Get Movies"
      }));
      setTimeout(() => {
        dispatch(statusActions.turnoffNotification());
      }, 9000)
    });
  }, []);
  return (<>
  <AdminNavbar/>
  <button style={{width: "150px", backgroundColor:"#041d51", color: "white",height: "45px"}} onClick={() => {
                  navigate("/admin/add_movie");
            }}>Add Movie</button>
    <div className="Movie__header">
      
        <div className="Movie__header-Container">
        
          {movies && movies.map(movie => <div classNae="Movie__header-Contents">
         
            <div className="Movie__header-img">
            <img src={"http://localhost:8080/images/" +
                movie.imageUrl.slice(7, movie.imageUrl.length)} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>{movie.title}</h1>
              <h3>{movie.day}</h3>
              <h4>{movie.time}</h4>
              
            </div>
            <button style={{width: "100px", backgroundColor:"#041d51", color: "white", height: "45px"}} onClick={() => {
              navigate("/admin/edit_movie/"+ movie._id);
            }}>Edit</button>
                <button style={{width: "100px", color: "white", backgroundColor:"#8a0404", height: "45px"}} onClick={() => {
                     
                      navigate("/movie/delete/"+movie._id);
                    }}>Delete</button>
            </div>)}
            {movies.length === 0 && <h2>No Movies</h2>}
         
            </div>
        {/* <div className="Movie__header-Container">
          <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={Thor} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Thor</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>

            <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={main} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Avatar</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>


            <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={Moon} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Moonfall</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>




            </div>
        <div className="Movie__header-Container">
          <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={Thor} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Thor</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>

            <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={main} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Avatar</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>


            <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={Moon} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Moonfall</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>



            </div>
        <div className="Movie__header-Container">
          <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={Thor} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Thor</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>

            <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={main} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Avatar</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>


            <div classNae="Movie__header-Contents">
            <div className="Movie__header-img">
            <img src={Moon} alt="main"></img>
            </div>
            <div className="Movie__content-text">
              <h1>Moonfall</h1>
              <h3>Mon,Tue,Sun</h3>
              <h4>7:00PM & 9:00PM</h4>
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>


        </div> */}

    </div>
    </>
  )
}

export default AdminMovie