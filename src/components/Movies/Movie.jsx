import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import main from "../../assets/Main.jpg"
import Thor from "../../assets/Thor (1).jpg"
import Moon from "../../assets/moon.jpg"


const Movie = () => {
  const [movies, setMovies] = useState([]);
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
      console.log(err);
    });
  }, []);
  return (
    <div className="Movie__header">
        <div className="Movie__header-text">
              <h1>All the Movies You Love</h1>
              <p>Watch these new movies in our comfortable cinema 
                 with cheap price with your confort fullfilled.</p>
        </div>
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
              <Link to= "/Get" className="Movie__header-content-button">Get</Link>
            </div>
            </div>)}
         
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
  )
}

export default Movie