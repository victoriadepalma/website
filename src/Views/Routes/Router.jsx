import React, { useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../Views/Hero/Hero";
import { About } from "../../Views/About/About";
import { Footer } from "../../components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Experience } from "../Experience/Experience";
import { Education } from "../../Views/Education/Education";
import { Contact } from "../../Views/Contact/Contact";
export const Router = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Experience/>
            <Education/>
            <Contact/>
            <Footer/>
           
        {/* <Routes>
            <Route path="/" element={<Hero />}/>
            <Route path="/about" element={<About />} />        
        </Routes>
            <Footer/> */}
        </>
    )
}

