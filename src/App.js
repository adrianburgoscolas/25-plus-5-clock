import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import timerFormat from './Functions/timerformat';

function App() {
  const [breakLength,setBreak] = useState(5);
  const [sessionLength,setSession] = useState(25);
  const [sessionStart,setSessionStart] = useState(false);
  const [timer,setTimer] = useState({session:25,break:5});
  const [sessionSelector,setSelector] = useState(true);
  const [timerInit,setTimerInit] = useState({session:false,break:false});
  const [timeLeft,setTimeLeft] = useState('25:00');
  

  useEffect(()=>{
    
    let timeOut = setTimeout(()=>{
      if(sessionStart){
        if(timerInit.session){
          setTimer((state)=>{ return {...state,session:sessionLength}});
          setTimerInit((state)=>{ return {...state,session:false}});
        }
        if(timerInit.break){
          setTimer((state)=>{ return {...state,break:breakLength}})
          setTimerInit((state)=>{ return {...state,break:false}})
        }
        
        if(sessionSelector){
          if(timer.session > 0){
            setTimer((state)=>{ return {...state,session:state.session-1}})
          }else{
            setSelector((state)=>!state);
            setTimer((state)=>{ return {...state,session:sessionLength}})
            setTimeLeft(timerFormat(timer.session));
          }
        }else{
          if(timer.break > 0){
            setTimer((state)=>{ return {...state,break:state.break-1}})
          }else{
            setSelector((state)=>!state)
            setTimer((state)=>{ return {...state,break:breakLength}})
            setTimeLeft(timerFormat(timer.break));
          }
        }
      }
      
    },1000);
    
    return ()=>clearTimeout(timeOut);
  });

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      
      {/* Break block */}
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-decrement" onClick={()=>{
        if(!sessionStart){
          setTimerInit((state)=>{ return {...state,break:true}})
          setBreak((state)=>{
            if(state>1){
              return state-1;
            }else{
              return state;
            }
          })
        }
      }}>-</button>
      <button id="break-increment" onClick={()=>{
        if(!sessionStart){
          setTimerInit((state)=>{ return {...state,break:true}})
          setBreak((state)=>{
            if(state<60){
              return state+1;
            }else{
              return state;
            }
          })
        }
      }}>+</button>
      
      {/* Session block */}
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLength}</div>
      <button id="session-decrement" onClick={()=>{
        if(!sessionStart){
          setTimerInit((state)=>{ return {...state,session:true}})
          setSession((state)=>{
            if(state>1){
              return state-1;
            }else{
              return state;
            }
          })
          // setTimer((state)=>{ return {...state,session:111}})
        }
      }}>-</button>
      <button id="session-increment" onClick={()=>{
        if(!sessionStart){
          setTimerInit((state)=>{ return {...state,session:true}})
          setSession((state)=>{
            if(state<60){
              return state+1;
            }else{
              return state;
            }
          })
        }
      }}>+</button>
      
      {/*DISPLAY */}
      <div id="timer-label">{sessionSelector?'Session':'Break'}</div>
      <div id="time-left">{timeLeft}</div>

      {/* START/STOP */}
      <button id="start_stop" onClick={()=>{
        setSessionStart((state)=>!state);
        // if(timer.session === 111){
        //   setTimer((state)=>{ return {...state,session:sessionLength}})
        // }
        // if(timer.break === 111){
        //   setTimer((state)=>{ return {...state,break:breakLength}})
        // }
      }}>{sessionStart?'Pause':'Start'}</button>

      {/* RESET */}
      <button id="reset" onClick={()=>{
        setBreak(5);
        setSession(25);
        setSessionStart(false);
        setTimer({session:25,break:5})
        setSelector(true);
      }}>reset</button>
      <footer>

      </footer>
    </div>
  );
}

export default App;
