// Form.js
import React, { useState, useEffect } from 'react';
import './Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const validatePassword = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords Don't Match");
    } else {
      try {
        // Use Axios to send data to the server for registration
        const response = await axios.post('https://finalproject-backend-cpch.onrender.com/register', {
          name,
          email,
          phonenumber,
          password,
          dob,
          gender,
        });

       
        if (response.data.success) {
          
          alert('User registered successfully');
        } else {
        
          alert('Error registering user');
        }
      } catch (error) {
        console.error('Error registering user:', error);
        alert('Error registering user');
      }
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
     
      const response = await axios.post('https://finalproject-backend-cpch.onrender.com/login', {
        email: loginEmail,
        pass: loginPassword,
      });

      // Check the success property in the response
      if (response.data.success) {
        // If login is successful, show the alert
        alert(response.data.message);
        navigate('/ContentList');
      } else {
        // If login is unsuccessful, show an error alert
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid Credentials');
    }
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

    // Remove the event listeners when the component unmounts
    return () => {
      signUpButton.removeEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.removeEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    };
  }, []);

  return (
    <div className="pain">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={validatePassword}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="tel" placeholder="Phone Number" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="pass"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Form;
