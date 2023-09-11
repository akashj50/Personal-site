import "./Section.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import game from "../Images/game.jpg";

const Section2 = () => {
  return (
    <div className="temp">
        <div className="tempp">
            <img src={game} alt="img"></img>
            <div className="title">Expense Tracker</div>
            <div className="content">
                <p>A website which tracks your income and expenditures to better plan budgets designed using HTML,CSS and Javascript</p>
                <div className="button">
                    <a href="https://expense-track-ten.vercel.app/" className="btn">View</a>
                </div>


            </div>

        </div>


      
    </div>
    
      
    
  )
}

export default Section2;
