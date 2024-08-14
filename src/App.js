import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Howitworks from './Components/Howitworks';
import Services from './Components/Services';
import Faq from './Faq';
import Nav from './Nav';
import Contact from './Components/Contact';
import Home from './Home';
import ContactUs from './Components/ContactUs';
import Header from './Components/Header';
import Form from './Components/Form';
import ContentList from './Components/ContentList';

const App = () => {
  return (
    <Router className='App'>

      <Nav />
      <Routes>
      <Route exact path="/contactus" element={<ContactUs/>}/>
      <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Header/>}/>
        <Route exact path="/howitworks" element={<Howitworks />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path='/ContentList' element={<ContentList/>}/>
      </Routes>
    </Router>

  );
};

export default App;


