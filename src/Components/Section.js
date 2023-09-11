import "./Section.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import web from "../Images/web.jpg";

const Section = () => {
  return (
    <div className="temp">
        <div className="tempp">
            <img src={web} alt="img"></img>
            <div className="title">Weather-Check</div>
            <div className="content">
                <p>A Weather Check Website which provides information about the current weather designed using Javascript and the Flask module in Python</p>
                <div className="button">
                    <a href="https://akashj50.pythonanywhere.com/" className="btn">View</a>
                </div>


            </div>

        </div>


      
    </div>
  )
}

export default Section;
