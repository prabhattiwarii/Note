import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import NoteState from './components/context/notes/NoteState';
import './App.css';
import Alert from './components/Alert';
import SignUp from './components/acess/SignUp';
import Login from './components/acess/Login';
import Footer from './components/footer/Footer';

function App() {
  const [alert, setAlert] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleDarkMode =()=>{
    if (isDarkMode === 'light') {
      setIsDarkMode('dark');
      document.body.style.background = '#111827';
      document.body.style.color = 'white';
    } else {
      setIsDarkMode('light')
      document.body.style.background = 'transparent';
      document.body.style.color = 'black';
    }
}

  return (
    <React.Fragment>
      <NoteState>
        <BrowserRouter>
          <Navbar showAlert={showAlert} mode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/sign-up" element={<SignUp showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </NoteState>
    </React.Fragment>
  );
}

export default App;
