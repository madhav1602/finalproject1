// WriteStoriesForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './WriteStoriesForm.css';
const WriteStoriesForm = ({ onClose, onAddStory }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddStory = () => {
    // Perform validation if needed

    // Make an API call to add the story
    axios.post('https://finalproject-backend-cpch.onrender.com/api/contents', { title, description })
      .then(response => {
        // Trigger the parent component to update the stories list
        onAddStory(response.data);
        // Close the form
        onClose();
      })
      .catch(error => console.error('Error adding story:', error));
  };

  return (
    <div className="write-stories-form">
      <h2>Write Your Story</h2>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

      <button onClick={handleAddStory}>Add Story</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default WriteStoriesForm;
