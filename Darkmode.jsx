import React, { useState } from "react";

export default function Darkmode() {
    const[dark,setdark]=useState(false);
    const[name,setname]=useState("");
    console.log(name)
    return(
        <div style={{
        backgroundColor: dark?"#101310": "#e0e0e9", 
        color:dark?"#f3efefd8":"#0a0909", padding:"25px"}}>
            <ul>
            <button onClick={()=> setdark(!dark)}>Switch to {dark?"light":"dark"} mode </button>
            <li><label htmlFor="">Name</label></li>
            <input name="name" type="text" placeholder="Enter Name" value={name} onChange={(e) =>setname(e.target.value)}/>
            <li><label htmlFor="">age</label></li>
            <input name="age" type="text" placeholder="Enter age" value={name} onChange={(e) =>setname(e.target.value)}/>
            <li><label htmlFor="">Marriage Status</label></li>
            <input name="marriage"type="text" placeholder="Enter marriage" value={name} onChange={(e) =>setname(e.target.value)}/>
            <li><label htmlFor="">mobileNo</label></li>
            <input name="mobileNo" type="text" placeholder="Enter mobileNo" value={name} onChange={(e) =>setname(e.target.value)}/>
            <li><label htmlFor="">address</label></li>
            <input name="address" type="text" placeholder="Enter adress" value={name} onChange={(e) =>setname(e.target.value)}/>
            <li><label htmlFor="">email</label></li>
            <input name="email" type="text"placeholder="Enter email" value={name} onChange={(e) =>setname(e.target.value)}/>
            <li><label htmlFor="">Citizen</label></li>
            <input name="citizen" type="text"placeholder="Enter citize" value={name} onChange={(e) =>setname(e.target.value)}/>
            <li><label htmlFor="">Physical Status</label></li>
            <input name="physical" type="text"placeholder="Enter physical" value={name} onChange={(e) =>setname(e.target.value)}/>
             <li><label htmlFor="">Pincode</label></li>
            <input name="pincode" type="text" placeholder="Enter pincode" value={name} onChange={(e) =>setname(e.target.value)}/>
             <li><label htmlFor="">Adhar No</label></li>
            <input name="adhar" type="text" placeholder="Enter Adharno" value={name} onChange={(e) =>setname(e.target.value)}/>
            </ul>
                      
        </div>
    )
    
}