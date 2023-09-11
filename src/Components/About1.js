import "./About1.css";
import React from 'react';
import photo from "../Images/photo.jpg";

const About1 = () => {
  return (
    <div className="temp">
        <div className="tempp">
            <h1>About Me</h1>
            <img src={photo}></img>
            <p>Hi I'm Akash Jayathirtha,a Computer Engineering student at University of Waterloo.My main interests are math and programming as I wish to pursue a career in web development/software development.In my free time,I play sports such as Cricket,Swimming etc.</p>
            <br></br>
            <p>Here is my resume</p>
        </div>

      
    </div>
  )
}

export default About1;

