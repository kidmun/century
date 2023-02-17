import React from 'react'
import Main from "../../assets/Main.jpg"
import Items from "../../assets/Items.png"
import Items01 from "../../assets/Items01.jpg"
import Items02 from "../../assets/Items02.jpg"
import Items03 from "../../assets/Items03.jpg"





const Places = () => {
  return (
    <>
    <div className="Places__Header">
        <div className="Places__Header-Container">
            <div className="Places__Header-Container_main">
                <img src={Main} alt="main"></img>
                <div class="overlay">
                 <span>
                    <h1>Movies</h1>
                    <p>Watch new upcoming movies out of the box-office</p>
                </span>
                </div>
            </div>
            <>

            <div className="Places__Header-Container_Items">
                <div className="Places__Header-Container_Items00">
                <img src={Items} alt="main"/>
                </div>

                <div className="Places__Header-Container_Items01">
                <img src={Items01} alt="main"></img>
                </div>

                <div className="Places__Header-Container_Items02">
                <img src={Items02} alt="main"></img>
                </div>
            </div>  


            <div className="Places__Header-Container_Items">
                <div className="Places__Header-Container_Items03">
                <img src={Items03} alt="main"></img>
                </div>

                <div className="Places__Header-Container_Items01">
                <img src={Items01} alt="main"></img>
                </div>
            
                <div className="Places__Header-Container_Items02">
                <img src={Items02} alt="main"></img>
                </div>
            </div>  

            </>
        </div>
        </div>
    </>
  )
}

export default Places
