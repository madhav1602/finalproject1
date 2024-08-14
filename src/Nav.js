import React from "react";
import { Link } from "react-router-dom";
export default function Nav(){
    return(<div> 
      <div className="nav">
        <p className="nav1">
            <Link to="/home">Home</Link>
            </p>
        <p className="nav1">
            <Link to="/about">About</Link>
            </p>
            <p className="nav1">
            <Link to="/howitworks">How it Works</Link>
            </p>
            <p className="nav1">
            <Link to="/services">Services</Link>
            </p>
            <p className="nav1">
            <Link to="/faq">FAQ</Link>
            </p>
            <p className="nav1">
            <Link to="/contactus">Contact</Link>
            </p>
          
        </div>
        </div>
        
        

    );
}