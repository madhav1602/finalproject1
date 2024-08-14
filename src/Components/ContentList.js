// ContentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WriteStoriesForm from './WriteStoriesForm';
import './ContentList.css';

const ContentList = () => {
  const [contents, setContents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    axios.get('https://finalproject-backend-cpch.onrender.com/api/contents')
      .then(response => setContents(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddStory = (newStory) => {
    setContents([...contents, newStory]);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="content-container">
      <h1 className="content-heading">SHORT STORIES</h1>
      {/* <button onClick={toggleForm} className="write-stories-btn">Write Stories</button> */}

      

      <ul className="content-list">
        {contents.map(content => (
          <li key={content.contentid} className="content-item">
            <h2 className="content-title">{content.title}</h2>
            <p className="content-description">{content.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={toggleForm} className="write-stories-btn">Write Stories</button>
      {isFormOpen && (<WriteStoriesForm
          onClose={toggleForm}
          onAddStory={handleAddStory}
        />
      )}
    </div>
  );
};

export default ContentList;
