import { useState } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import TextForms from './componets/TextForms';
import Alert from './componets/Alert';

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
  const toggleMode=()=>{
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
    <Navbar title="textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   {/* <Navbar/> */}

    <Alert alert={alert} />
    <TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
    </>
  );
}

export default App;
