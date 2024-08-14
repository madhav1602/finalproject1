import React, { useState } from 'react';
import axios from 'axios';
import './Author.css';

export default function Author({ setIsAuthorVisible }) {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formData, setFormData] = useState({
    aname: '',
    email: '',
    password: '',
    dob: '',
    dor: '',
    phonenumber: '',
    gender: 'Male',
    photourl: '',
  });

  const handleFormClose = () => {
    setIsFormVisible(false);
    setIsAuthorVisible(false);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use Axios to send data to the backend
      const response = await axios.post('https://finalproject-backend-cpch.onrender.com/create-author', formData);

      // Check the response and show an alert based on the result
      if (response.data.success) {
        alert('Author created successfully');
      } else {
        alert('Failed to create author');
      }
    } catch (error) {
      console.error('Error creating author:', error);
      alert('Failed to create author');
    }
  };

  return (
    <>
      {isFormVisible && (
        <div className="form-container2">
          <button className="close-button" onClick={handleFormClose}>
            Close Form
          </button>

          <form onSubmit={handleSubmit}>
            <label htmlFor="aname">Author Name:</label>
            <input
              type="text"
              id="aname"
              name="aname"
              value={formData.aname}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />

            <label htmlFor="dor">Date of Registration:</label>
            <input
              type="date"
              id="dor"
              name="dor"
              value={formData.dor}
              onChange={handleChange}
            />

            <label htmlFor="phonenumber">Phone Number:</label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            />

            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="photourl">Photo URL:</label>
            <input
              type="text"
              id="photourl"
              name="photourl"
              value={formData.photourl}
              onChange={handleChange}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </>
  );
}
