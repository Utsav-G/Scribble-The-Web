import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#000000");

  function handleClick(e,type){
    alert("injecting content.js 123")
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action:type,
        color
      })
    })
  }

  return (
    <>
      <div>Color Options</div>
      <button onClick={(e)=>handleClick(e,"draw")}>Start Scribbling</button>
      <button onClick={(e)=>handleClick(e,"save")}>Save Scribble</button>
    </>
  )
}

export default App
