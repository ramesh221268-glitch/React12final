import React, { useEffect, useState } from 'react'

export default function Useeffecthook() {
    const[second,setsecond]=useState(0);
    const[isrunning,setisrunning]=useState(false);
    useEffect(()=>{let intervalid; if (isrunning){intervalid=setInterval(()=>
    {setsecond((prev)=>prev+1);},1000);}
    return()=>clearInterval(intervalid);},[isrunning]);
    const handlestart=()=>{setisrunning(true)};
    const handlestop=()=>{setisrunning(false)};
    const handlereset=()=>{setsecond(0);setisrunning(false)};
  return (
    <div class="Useeffecthook">
        <h2>STOP CLOCK:{second}</h2>
        <button onClick={handlestart}>Start</button>
        <button onClick={handlestop}>Stop</button>
        <button onClick={handlereset}>Reset</button>
      
    </div>
  )
}
