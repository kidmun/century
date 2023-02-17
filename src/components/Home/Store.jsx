import React from 'react'
import  Stores from "../../assets/Store.png"
import  Food from "../../assets/Food.png"
import  Games from "../../assets/Games.png"
import  Theatre from "../../assets/Movies.png"

const Store = () => {
  return (
       <>
         <div className="Store__heading-title">
           <span><h1>Why Choose Us?</h1></span>
        </div>
    <div className="Store__heading">
        <div className ="Store__heading-Content">
            <div className="Store__heading-Content_img">
            <img src ={Stores} alt = "Store"/>
            </div>
            <div className="Store__heading-Content_text">
               <h1>80</h1>
                <p>Stores</p>     
            </div> 
        </div>
        <div className ="Store__heading-Content">
            <div className="Store__heading-Content_img">
            <img src ={Games} alt = "Store"/>
            </div>
            <div className="Store__heading-Content_text">
                <h1>5+</h1>
                <p>Game Zones</p>     
            </div> 
        </div>
        <div className ="Store__heading-Content">
            <div className="Store__heading-Content_img">
            <img src ={Food} alt = "Store"/>
            </div>
            <div className="Store__heading-Content_text">
                <h1>7+</h1>
                <p>Food Zones</p>     
            </div> 
        </div>
        <div className ="Store__heading-Content">
            <div className="Store__heading-Content_img">
            <img src ={Theatre} alt = "Store"/>
            </div>
            <div className="Store__heading-Content_text">
                <h1>8+</h1>
                <p>Theatres</p>     
            </div> 
        </div>
    </div>
    </>
  )
}

export default Store
