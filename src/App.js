import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#112a43';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Text Doctor - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Text Doctor is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Text Doctor now';
      // }, 1500);
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Text Doctor - Light Mode';
    }

  }
  return (
   <>
   <Navbar title="Text Doctor" mode={mode} toggleMode={toggleMode} aboutText="About Text Doctor"/>
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <About/> */}
   </div>
   <div className="container my-3">
   <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode}/>
   </div>
   
   </>
  )
}

export default App;