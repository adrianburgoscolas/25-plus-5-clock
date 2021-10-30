//format timer from seconds to mm:ss
const timerFormat = (timer)=>{
    let min = Math.floor(timer/60);
    let sec = timer%60;
    let minStr = min.toString();
    let secStr = sec.toString();
    if(min<10){
        minStr = '0'+minStr;
    }
    if(sec<10){
        secStr = '0'+secStr;
    }
    return minStr+':'+secStr;
};

export default timerFormat;