import React,{ useEffect, useState } from "react"
import { data } from "react-router-dom";

export default function CREDoperation() {
    const [User,setUser]=useState([]);
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [street,setStreet]=useState("")
    const [city,setCity]=useState("")
    const [zipcode,setZipcode]=useState("")

    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data)=>{setUser(data)})},[]);
    const additems=()=>{
        const trimmedName=name.trim();
        const trimmedEmail=email.trim();
        const trimmedStreet=street.trim();
        const trimmedCity=city.trim();
        const trimmedZipcode=zipcode.trim();

        if(trimmedName && trimmedEmail && trimmedStreet && trimmedCity && trimmedZipcode)
        {fetch("https://jsonplaceholder.typicode.com/users",
            {method:"POST",body:JSON.stringify({
                name:trimmedName,
                email:trimmedEmail,
                address:{
               street:trimmedStreet,
               city:trimmedCity,
               zipcode:trimmedZipcode,
                }
        }),
            headers :{"content-type":"application/json;charset=UTF-8",
       },
    }) .then((res)=> res.json())
        .then((data)=>{
            const newUser={...data,id:User.length+1};
            setUser([...User,newUser]);
            setName("")
            setEmail("")
            setStreet("")
            setCity("")
            setZipcode("")
        })
    }
  ;};
    const handleDelete = (id) => {
  fetch("https://jsonplaceholder.typicode.com/users/", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data)=>{setUser((user)=> {return user.filter((user)=>user.id!==id);
    });   
    });
}
    const handleEdit = (id) => {
  fetch("https://jsonplaceholder.typicode.com/users/", {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data)=>{setUser((user)=> {return user.filter((user)=>user.id!==id);
    });   
    });
}
  return (
    <div>
      <h1>CRED Operation</h1>
      <table>
      <thead>
        <tr>
            <td>S.no</td>
            <td>Name:</td>
            <td>Email:</td>
            <td>Street:</td>
            <td>City:</td>
            <td>Zipcode:</td>
            <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        {User.map((User)=>(
        <tr key={User.id}>
            <td>{User.id}</td>
            <td>{User.name}</td>
            <td>{User.email}</td>
            <td>{User.address.street}</td>
            <td>{User.address.city}</td>
            <td>{User.address.zipcode}</td>
            <td><button onClick={()=>handleDelete(User.id)}>Delete</button></td>
            <td><button onClick={()=>handleEdit(User.id)}>Edit</button></td>
        </tr>
        ))}
        <tr>
            <td></td>
            <td><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></td>
            <td><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
            <td><input type="text" value={street} onChange={(e)=>setStreet(e.target.value)}/></td>
            <td><input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/></td>
            <td><input type="text" value={zipcode} onChange={(e)=>setZipcode(e.target.value)}/></td>
            <td><button onClick={additems}>Update</button></td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}
