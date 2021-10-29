import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [breakLength,setBreak] = useState(5);
  const [sessionLength,setSession] = useState(25);
  // const [min,setMin] = useState(0);

  useEffect(()=>{
    
  });

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-decrement" onClick={()=>setBreak((state)=>{
        if(state>1){
          return state-1;
        }else{
          return state;
        }
      })}>-</button>
      <button id="break-increment" onClick={()=>setBreak((state)=>state+1)}>+</button>
      

      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLength}</div>
      <button id="session-decrement" onClick={()=>setSession((state)=>{
        if(state>1){
          return state-1;
        }else{
          return state
        }
      })}>-</button>
      <button id="session-increment" onClick={()=>setSession((state)=>state+1)}>+</button>
      

      <div id="timer-label">Session</div>
      <div id="time-left">{}:{}</div>
      <button id="start_stop">start/stop</button>
      <button id="reset">reset</button>
      <footer>

      </footer>
    </div>
  );
}

export default App;
