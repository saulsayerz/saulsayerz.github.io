import * as React from 'react';
import Navbar from './Navbar.js'
import Biography from './Biography'
import { BottomNavigation } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Biography />
    </div>
  );
}

export default App;
