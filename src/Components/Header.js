import React from "react";
import { Link } from "react-router-dom";
function Header()
{
    return (
        <div className="background1">
        <div className="text100">Discover stories from<br />writers on any topic. </div>

        <button type="button" className="searchbtn">
          <Link to = "/form">
          <div className="buttontext" >Get started today</div>
          </Link>
        </button>
        <div className="text200">  --- Share your stories today ---  </div>
      </div>
      
    );

}
export default  Header;