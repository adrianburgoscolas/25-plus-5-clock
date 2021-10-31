import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import timerFormat from './Functions/timerformat';

const FACTOR = 60;//count on minutes(FACTOR = 60), count on seconds for debbuging(FACTOR = 1)

function App() {
  const [breakLength,setBreak] = useState(5);
  const [sessionLength,setSession] = useState(25);
  const [sessionStart,setSessionStart] = useState(false);
  const [timer,setTimer] = useState({session:25*FACTOR,break:5*FACTOR});
  const [sessionSelector,setSelector] = useState(true);

  const audio = document.getElementById('beep'); 

  useEffect(()=>{
    let timeOut = setTimeout(()=>{
      
      if(sessionStart){
        if(sessionSelector){
          if(timer.session > 0){
            if(timer.session===1){
              audio.currentTime = 0;
              audio.play();
            }
            setTimer((state)=>{ return {...state,session:state.session-1}});
          }else{
            audio.currentTime = 0;
            audio.play();
            setSelector((state)=>!state);
            setTimer((state)=>{ return {...state,session:sessionLength*FACTOR}});
          }
        }else{
          if(timer.break > 0){
            if(timer.break===1){
              audio.currentTime = 0;
              audio.play();
            }
            setTimer((state)=>{ return {...state,break:state.break-1}})
          }else{
            setSelector((state)=>!state)
            setTimer((state)=>{ return {...state,break:breakLength*FACTOR}})
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
          setBreak((state)=>{
            if((state)>1){
              setTimer((timer)=>{ return {...timer,break:(state*FACTOR)-FACTOR}})
              return state-1;
            }else{
              return state;
            }
          })
        }
      }}>-</button>
      <button id="break-increment" onClick={()=>{
        if(!sessionStart){
          setBreak((state)=>{
            if((state)<60){
              setTimer((timer)=>{ return {...timer,break:(state*FACTOR)+FACTOR}})
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
          setSession((state)=>{
            if(state>1){
              setTimer((timer)=>{ return {...timer,session:(state*FACTOR)-FACTOR}})
              return state-1;
            }else{
              return state;
            }
          })
        }
      }}>-</button>
      <button id="session-increment" onClick={()=>{
        if(!sessionStart){
          setSession((state)=>{
            if(state<60){
              setTimer((timer)=>{ return {...timer,session:(state*FACTOR)+FACTOR}})
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
      }}>{sessionStart?'Pause':'Start'}</button>

      {/* RESET */}
      <button id="reset" onClick={()=>{
        audio.pause();
        audio.currentTime = 0;
        setBreak(5);
        setSession(25);
        setSessionStart(false);
        setTimer({session:25*FACTOR,break:5*FACTOR})
        setSelector(true);
      }}>reset</button>
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
        Your browser does not support the audio element.
      </audio>
      <footer>

      </footer>
    </div>
  );
}

export default App;
