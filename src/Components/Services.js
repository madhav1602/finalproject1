import React from "react";
import { Link } from "react-router-dom";
export default function Services(){
    return(
        <div className="jungle">
        <div className="red">
          <div className="red3">
            <div className="red1">Support the voices you want to hear more from.</div>
            <div className="red2">
            A portion of your membership will directly support the writers and thinkers you read the most.
            </div>
            <button type="button" className="redbutton">
          <Link to = "/form">
          <div className="buttontext" >Get started today</div>
          </Link>
        </button>
          </div>
        </div>
        

        <div className="white">
          <div className="whitemain">
            <div className="white1">WHY I AM A MEDIUM MEMBER</div>
            <div className="common">
            <div className="white2">
            "For me, the access to a variety of ideas and perspectives is invaluable. Medium brings people from all over into one shared space where we can grow and learn together."<br></br>
- Joseph Coco
            </div>
            <div className="white3">
            I love Medium’s membership — it gives me access to the stories I love by the writers I love, and it allows me to help support those writers financially.
            </div>
            </div>
          </div>
        </div>
        <div className="purple"></div>
        <div className="purplemain">
          
          <div className="purple2">
          Read any article in our entire library across all your devices — with no paywalls, story limits or ads.
          </div>
          <button type="button" className="purplebutton">
          <Link to = "/form">
          <div className="buttontext" >Get started today</div>
          </Link>
        </button>
          
          <div className="purple3">READ OUR STORIES TODAY</div>
        </div>
        </div>
    );
}