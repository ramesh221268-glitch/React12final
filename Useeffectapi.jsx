import React, { useEffect, useState } from 'react'

export default function Useeffectapi() {
    const[user,setuser]=useState([]);
    const [loading, setloading]= useState(true);
    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
    .then((data)=>{setuser(data);setloading(false);});
},[]);
console.log(user);

  return (
    <div class="Useeffectapi">
        <h1>User List</h1>
        {loading?(<p>Loading...</p>):(
            <ul>
            {user.map((user)=>(
                <li key={user.id}>{user.name}......{user.username}.....{user.email}.....{user.street}</li>
            ))}</ul>)}
      
    </div>
  )
}
