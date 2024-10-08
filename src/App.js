import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import './Styles/index.scss'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/*" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
