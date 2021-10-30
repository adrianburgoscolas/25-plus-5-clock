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
  // const [timeLeft,setTimeLeft] = useState('25:00');
  

  useEffect(()=>{
    
    // if(sessionSelector){
      
    //   setTimeLeft(timerFormat(timer.session));
    // }else{
      
    //   setTimeLeft(timerFormat(timer.break));
    // }
    let timeOut = setTimeout(()=>{
      if(sessionStart){
        // if(timerInit.session){
        //   setTimer((state)=>{ return {...state,session:sessionLength+1}});
        //   // setTimeLeft(timerFormat(sessionLength));
        //   setTimerInit((state)=>{ return {...state,session:false}});
        // }
        // if(timerInit.break){
        //   setTimer((state)=>{ return {...state,break:breakLength+1}});
        //   // setTimeLeft(timerFormat(breakLength));
        //   setTimerInit((state)=>{ return {...state,break:false}});
        // }
        
        if(sessionSelector){
          
          if(timer.session > 0){
            setTimer((state)=>{ return {...state,session:state.session-1}});
            // setTimeLeft(timerFormat(timer.session));
          }else{
            setSelector((state)=>!state);
            setTimer((state)=>{ return {...state,session:sessionLength}});
            // setTimeLeft(timerFormat(sessionLength));
          }
          
        }else{
          // setTimeLeft(timerFormat(timer.break));
          if(timer.break > 0){
            setTimer((state)=>{ return {...state,break:state.break-1}})
            // setTimeLeft(timerFormat(timer.break));
          }else{
            setSelector((state)=>!state)
            setTimer((state)=>{ return {...state,break:breakLength}})
            // setTimeLeft(timerFormat(breakLength));
          }
          
        }
      }
      
    },1000);
    // console.log('timer '+timer.session+' '+timer.break);
    // console.log(sessionLength)
    // console.log(breakLength)
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
          // setTimerInit((state)=>{ return {...state,break:true}})
          setBreak((state)=>{
            if(state>1){
              setTimer((timer)=>{ return {...timer,break:state-1}})
              return state-1;
            }else{
              return state;
            }
          })
        }
      }}>-</button>
      <button id="break-increment" onClick={()=>{
        if(!sessionStart){
          // setTimerInit((state)=>{ return {...state,break:true}})
          setBreak((state)=>{
            if(state<60){
              setTimer((timer)=>{ return {...timer,break:state+1}})
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
          // setTimerInit((state)=>{ return {...state,session:true}})
          setSession((state)=>{
            if(state>1){
              setTimer((timer)=>{ return {...timer,session:state-1}})
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
          // setTimerInit((state)=>{ return {...state,session:true}})
          setSession((state)=>{
            if(state<60){
              setTimer((timer)=>{ return {...timer,session:state+1}})
              return state+1;
            }else{
              return state;
            }
          })
        }
      }}>+</button>
      
      {/*DISPLAY */}
      <div id="timer-label">{sessionSelector?'Session':'Break'}</div>
      <div id="time-left">{sessionSelector?timerFormat(timer.session):timerFormat(timer.break)}</div>

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
        // setTimeLeft('25:00');
      }}>reset</button>
      <footer>

      </footer>
    </div>
  );
}

export default App;
