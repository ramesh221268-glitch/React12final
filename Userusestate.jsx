import React, { useState } from "react";

export default function Userusestate() 
{
    const[user,setuser]=useState(true);
    
    return(
    <div >
        <h2>User Details</h2>
        {user?<h3>welcome</h3>:<h3>Sign in</h3>}
        {user && (<h3>fill all user data</h3>)}
        <button onClick={()=> setuser(!user)}>Sign {user ? "out" :"in"}</button>
    </div>)
}