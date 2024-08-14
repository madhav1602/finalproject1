import React from "react";


import About from './Components/About';
import Howitworks from './Components/Howitworks';
import Services from './Components/Services';
import Faq from './Faq';
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs";

export default function Home(){
    return(

        <div class="main">
    
      <Header></Header>

        <Howitworks/>
        <Services/>        
        <About/>
        <Faq/>
        <Contact/>
        
    </div>
    );
}