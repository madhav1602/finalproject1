import React from "react";
import Layer26 from './Layer 26.png'
export default function Faq(){
    return(
        <div className="white mainwhite">
          <div className="whitemain2">
            
            <div className="white2 white22">
              Q1 How do I upgrade my membership plan? <br></br>
              Q2 How can I transfer data from one base to another? <br></br>
              Q3 Can I export a list of all collaborators?<br></br>
              Q4 How does billing work? <br></br>
            </div>
            <div className="white3 white33">
              Ans1--  You can upgrade your plan by signing up.<br></br>
              Ans2--  For transferring data you need to contact us.<br></br>
              Ans3--  yes you can export the list of all collaborators<br></br>
              Ans4--  Billing works very efficiently.
            </div>
          </div>
          <img className="image100" src={Layer26} alt="White Image" />
        </div>
    );
}