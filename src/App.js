import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Navbar.js'
import Biography from './Biography.js'
import Jokes from './gpt/Jokes.js'


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<div><Navbar /> <Biography /></div>} />
      <Route path="/odre" element={<Jokes />} />
    </Routes>
  </Router>
  );
}

export default App;
