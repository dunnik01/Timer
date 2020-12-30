import React ,{useState}from "react";

function App() {
  var time = new Date().toLocaleTimeString();
const[index,setTime]=useState(time);
function gettingTime(){
  const newTime = new Date().toLocaleTimeString();
  setTime(newTime);
}

  return (
    <div className="container">
      <h1>{index}</h1>
      <button onClick={gettingTime}>Get Time</button>
    </div>
  );
}

export default App;
