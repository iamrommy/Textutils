import './App.css';
import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { //Importing React router from package and all of this was copies form react router dom website
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom"; //from command 'npm install react-router-dom'
  

function App()  {
  const [Mode, setMode] = useState("light");
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(()=>{
      setAlert(null);
    },2200);
  }

  let toggleMode = ()=>{
    if(Mode === 'light'){
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Home (Dark)";
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Home";
    }
    
  }

  return (
    
      <Router>
      <Navbar title="TextUtils" mode={Mode} ToggleMode={toggleMode}/>
      <Alert alert={alert}/> 
      {/*what is cls (cumulative layout shift) ? */}
      
      <Routes>
          <Route exact path="/" element={<Textform heading="Enter the Text to analyze" mode={Mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<AboutUs mode={Mode}/>}/>
      </Routes>
      
      </Router>
  );
}

export default App;