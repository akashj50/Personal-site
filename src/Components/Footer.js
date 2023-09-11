import "./Footer.css";
import React from 'react';
import {FaFacebook} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    
    <div className="footer">
      <div className="l">
        <p>Copyright &copy; 2023 Akash Jayathirtha</p>
      </div>
      <div className="r">
        <a href="https://www.facebook.com/akash.jayathirtha"><FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/></a> 
        <a href="https://www.linkedin.com/in/akash-jayathirtha-9151241b4/"><AiFillLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/></a>
      </div>
    </div>
  )
}

export default Footer;
