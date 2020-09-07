import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import UserInput from './Components/UserInput/UserInput';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/*
      <UserInput />
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
