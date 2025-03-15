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
  let removeBodyColor=()=>{
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-primary")
  }
  const toggleMode=(cls)=>{
    // console.log(cls);
    removeBodyColor();
    document.body.classList.add("bg-"+(cls))  
    let butonmode = document.getElementsByClassName("clsnew")
    // console.log(butonmode);
    
    if(document.body.backgroundColor==="primary"){
      butonmode.classList.remove("btn-primary")
      butonmode.classList.add("btn-danger")
    }

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
