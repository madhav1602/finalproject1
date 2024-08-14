import React, { useRef } from 'react';
import axios from 'axios';
import './ContactUs.css';

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const queryRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      query: queryRef.current.value,
    };

    try {
      // Use Axios to send data to the backend
      const response = await axios.post('https://finalproject-backend-cpch.onrender.com/submit-contact', formData);

      // Check the response and show an alert based on the result
      if (response.data.success) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" className="feedback-input" placeholder="Name" ref={nameRef} />
      <input name="email" type="text" className="feedback-input" placeholder="Email" ref={emailRef} />
      <input name="subject" type="text" className="feedback-input" placeholder="Subject" ref={subjectRef} />
      <textarea name="query" className="feedback-input" placeholder="Query" ref={queryRef}></textarea>
      <input type="submit" value="SUBMIT" />
    </form>
  );
}

export default ContactUs;
