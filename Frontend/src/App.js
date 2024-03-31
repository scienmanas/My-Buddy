import './App.css';
import { useState } from 'react';
import Landing from './components/Landing';
import Chat from './components/Chat';
import blueOctagon from './assets/icons/blue_octagon.png';
import greenSquare from './assets/icons/green_square.png';
import orangeSquare from './assets/icons/red_square.png';
import redTriangle from './assets/icons/red_triangle.png';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [chatList, setChatList] = useState([
    ["Orbital Oddysey", greenSquare],
    ["Digital Production Launch", redTriangle],
    ["Brand Refresh", orangeSquare],
    ["Social Medai Strategy", blueOctagon],
    ["Orbital Oddysey", greenSquare],
    ["Digital Production Launch", redTriangle],
    ["Brand Refresh", orangeSquare],
    ["Social Medai Strategy", blueOctagon],
    ["Orbital Oddysey", greenSquare],
    ["Digital Production Launch", redTriangle],
    ["Brand Refresh", orangeSquare],
  ])
  // document.body.style.backgroundColor = "#131619"

  return (
    <Router>
      {/* Navbar */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Chat chatList={chatList} />} />
      </Routes>
    </Router>
   
  );
}

export default App;
