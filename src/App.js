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
            document.getElementById('title').innerHTML = 'Session '+timerFormat(timer.session);
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
            document.getElementById('title').innerHTML = 'Break '+timerFormat(timer.break);
          }else{
            setSelector((state)=>!state)
            setTimer((state)=>{ return {...state,break:breakLength*FACTOR}})
          }
        }
         
      }else{
        document.getElementById('title').innerHTML = '25 + 5 clock'
      }
      
    },1000);
    return ()=>clearTimeout(timeOut);
  });
  return (
    <div className="App">
      <div id='container'>
        <header className="App-header">
          <h1>25 + 5 Clock</h1>
        </header>
        
        {/*DISPLAY */}
        <div id="timer-label">{sessionSelector?'Session':'Break'}</div>
        <div id="time-left">{sessionSelector?timerFormat(timer.session):timerFormat(timer.break)}</div>
        
        <div id='session-break-box'>
          
          {/* Session block */}
          <div id='session-box'>
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
            {/* START/STOP */}
        <button id="start_stop" onClick={()=>{
          setSessionStart((state)=>!state);
        }}>{sessionStart?'Pause':'Start'}</button>
          </div>

            {/* Break block */}
          <div id='break-box'>
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
                {/* RESET */}
            <button id="reset" onClick={()=>{
              audio.pause();
              audio.currentTime = 0;
              setBreak(5);
              setSession(25);
              setSessionStart(false);
              setTimer({session:25*FACTOR,break:5*FACTOR})
              setSelector(true);
            }}>Reset</button>
          </div>
          
        </div>
        <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
          Your browser does not support the audio element.
        </audio>
        
      </div>
      <footer>
          <a rel='noreferrer' href='https://www.freecodecamp.org/fcce3ec214d-b0f9-4ddc-b526-34aea3d1e4a3' target='_blank'>by Adrian Burgos</a>
        </footer>
    </div>
  );
}

export default App;
