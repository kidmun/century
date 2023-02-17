import React, { useState, useEffect } from 'react'
import Kids from "../../assets/Kids.png"
import Cinema from "../../assets/Cinema.png"
import PopCorn from "../../assets/Pop Corn.png"

const Feature = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/features").then((response) => {
          if (!response.ok){
            throw new Error("response not ok");
          }
          return response.json();
        }).then(result => {
          console.log(result);
          setFeatures(result.features);
        }).catch(err => {
          console.log(err);
        });
      }, []);
  return (
    <div className="Movies__feature">
        <div className="Movies__feature-container">
            <div className="Movies__feature-container-features">
            
                {features && features.map(feature => <div className="Movies__feature-container-kids">
                    <img src={"http://localhost:8080/images/" +
                feature.imageUrl.slice(7, feature.imageUrl.length)} alt="Kids"/>
                    <div className="Movies__feature-container-text">
                    <h1>{feature.title}</h1>
                    <p>{feature.description}</p>
                    </div>
                </div>)}
               
            </div>
        </div>
    </div>
  )
}

export default Feature
