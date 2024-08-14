import React, { useState } from "react";
import Layer21 from '../Layer 21.png';
import Author from './Author'; // Adjust the path accordingly

export default function About() {
  const [isAuthorVisible, setIsAuthorVisible] = useState(false);

  const handleAuthorButtonClick = () => {
    setIsAuthorVisible(true);
  };

  return (
    <div className="xxx">
      <div className="bowl">
        <button className="bowlbutton" onClick={handleAuthorButtonClick}>
          Add Author
        </button>
        <div className="bowltext">
          Discover stories and thinking from writers on any topic.
        </div>
        <div className="bowlimg_text">
          <img className="bowlimage" src={Layer21} alt="Layer21" />
          <div className="imgtext">Blaz Robar, god-like web designer</div>
        </div>
      </div>

      {isAuthorVisible && <Author setIsAuthorVisible={setIsAuthorVisible} />}
    </div>
  );
}
