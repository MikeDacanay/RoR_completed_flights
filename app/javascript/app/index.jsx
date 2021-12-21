import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Airline } from "../components/Airline";
import { Airlines } from '../components/Airlines';

export const App = props => {
    return (
       <Routes>
           <Route exact path='/' element={<Airlines/>} />
           <Route exact path='/airlines/:slug' element={<Airline/>} />
       </Routes>
    )
}; 