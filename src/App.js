
import './App.css';
import Navbar from './Components.js/Navbar';
import TextForm from './Components.js/TextForm';
//import About from './Components.js/About';
import Alert from './Components.js/alert';
import React, { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
*/


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState()
  const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type: type
      }) 
setTimeout(() => setAlert(null), 3000);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert(" Dark mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled","Success");
    }
  };
  return (
    <>
    
      <Navbar title="textUtils" AboutText="About us" mode={mode} toggleMode={toggleMode}></Navbar>
       <Alert alert={alert}></Alert>
        <div className="container">
         
          <TextForm heading="Enter the text to anlyse" showAlert={showAlert} mode={mode}></TextForm>
        </div> 
    </>
  );
}

export default App;
