
import './App.css';
import {useState} from "react"
function App() {
  let newTime= new Date().toLocaleTimeString()
  const[cTime,setCtime]=useState(newTime)
  function updateTime(){
    newTime= new Date().toLocaleTimeString()
    setCtime(newTime);
  }
  setInterval(updateTime,1000)
  return (
    <div className="App">
      <h1> {cTime} </h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
