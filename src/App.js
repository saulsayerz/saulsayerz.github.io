import * as React from 'react';
import Navbar from './Navbar.js'
import Biography from './Biography'
import Body from './Body'
import { BottomNavigation } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Biography />
      {/* <Body /> */}
    </div>
  );
}

export default App;
