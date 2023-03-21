import * as React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Navbar.js'
import Biography from './Biography.js'
import Jokes from './gpt/Jokes.js'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><Navbar /> <Biography /></div>} />
        <Route path="/a-small-gift" element={<Jokes />} />
      </Routes>
    </Router>
  );
}

export default App;
