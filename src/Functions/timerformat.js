//format timer from seconds to mm:ss
const timerFormat = (timer)=>{
    let min = Math.floor(timer/60);
    let sec = timer%60;
    return min+':'+sec;
};

export default timerFormat;