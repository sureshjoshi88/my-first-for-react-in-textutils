import { useState } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import TextForms from './componets/TextForms';
import Alert from './componets/Alert';
import About from './componets/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  const [mode,setmode]=useState("light")
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode=(cls)=>{
    // console.log(cls);
    
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been  enabled","success")
    }else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showAlert("light mode has been  enabled","success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About  mode={mode} />} />
            <Route path="/" element={<TextForms showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
