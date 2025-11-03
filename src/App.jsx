import { useState,useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  let [darkMode,setDarkMode]=useState(localStorage.getItem("shivam")==="true");

  useEffect(()=>{localStorage.setItem("shivam",darkMode)} , [darkMode]);

  function changeTheme()
  {
    setDarkMode((prev)=>!prev);
  }

  let [best,setBest] = useState(localStorage.getItem("best") || 0);
  function changeTheme()
  {
    setDarkMode((prev)=>!prev);
  }
    
  useEffect(()=>{localStorage.setItem("best",best)} , [best]);

  return (
    <>
      
      <Navbar dabba={darkMode} changeTheme={changeTheme} best={best}/>
      <Body darkMode={darkMode} setBest={setBest} best={best}/>
     
      
    </>
  )
}

export default App