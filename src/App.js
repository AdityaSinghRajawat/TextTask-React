import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }

  }

  return (
    <>

      {/* <BrowserRouter> */}

      <Navbar title="TextTask" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-4" mode={mode}>
        <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes> */}

      </div>

      {/* </BrowserRouter> */}

    </>

  );
}

export default App;
