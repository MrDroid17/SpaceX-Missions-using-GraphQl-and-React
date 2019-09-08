import React from 'react';
import './App.css';
import logo from './spacex.jpg'

function App() {
  return (
    <div className="App">
     <img 
     src={logo}
     alt="Space X"
     style={{width:300, display: 'block', margin: 'auto'}}
     />
    </div>
  );
}

export default App;
