import React, { useState } from 'react'

export default function Formsubmittion() {
    const [formdata,setFormdata]=useState({name:"", 
        age:"",
        sex:"",
        MarriageStatus:"",
        Address:"",City:"",
        State:"",Country:"",
        AdharNo:"",
        PANno:"",
        Nationality:"",
        PhysicalStatus:"",
        email:"",
        mobile:"+91-",
        password:"",
        Agree:false
});
  const [error, seterror] = useState("");

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
  const frame=["Name","age","sex","MarriageStatus","Address"," City"," State"," Country"," AdharNo"," PANno"," Nationality"," PhysicalStatus","email","mobile","password","Agree"];
    setFormdata(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (!formdata.name || !formdata.email || !formdata.password) {
      seterror("All required fields must be filled");
      return;
    }

    if (!formdata.Agree) {
      seterror("You must select agree");
      return;
    }

    seterror("");
    alert("Form submitted Successfully");
    console.log(formdata);
  };

  return (
    <div className="Formsubmittion">   
        <form onSubmit={formSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <h1>Formsubmission</h1>
  <ul>
        <li><label>Name:</label>
        <input type="text" name="name" placeholder="name" value={formdata.name} onChange={handleInput} /></li>
        <li><label>age:</label>
        <input type="number" name="age" placeholder="Age" value={formdata.age} onChange={handleInput} /></li>
        <li><label>Sex:</label>
        <input type="text" name="sex" placeholder="Sex" value={formdata.sex} onChange={handleInput} /></li>
        <li><label>Marriage Status:</label>
        <input type="text" name="MarriageStatus" placeholder="Marriage Status" value={formdata.MarriageStatus} onChange={handleInput} /></li>
        <li><label>Address:</label>
        <input type="text" name="Address" placeholder="Address" value={formdata.Address} onChange={handleInput} /></li>
        <li><label>City:</label>
        <input type="text" name="City" placeholder="City" value={formdata.City} onChange={handleInput} /></li>
        <li><label>State:</label>
        <input type="text" name="State" placeholder="State" value={formdata.State} onChange={handleInput} /></li>
       <li><label>Country:</label>
        <input type="text" name="Country" placeholder="Country" value={formdata.Country} onChange={handleInput} /></li>
        <li><label>Adhar No:</label>
        <input type="text" name="AdharNo" placeholder="Aadhar No" value={formdata.AdharNo} onChange={handleInput} /></li>
        <li><label>PAN no:</label>
        <input type="text" name="PANno" placeholder="PAN No" value={formdata.PANno} onChange={handleInput} /></li>
        <li><label>Nationality: </label>
        <input type="text" name="Nationality" placeholder="Nationality" value={formdata.Nationality} onChange={handleInput} /></li>
        <li><label>Physical Status: </label>
        <input type="text" name="PhysicalStatus" placeholder="Physical Status" value={formdata.PhysicalStatus} onChange={handleInput} /></li>
        <li><label>email :</label>
        <input type="email" name="email" placeholder="Email" value={formdata.email} onChange={handleInput} /></li>
        <li><label>Mobile No:</label>
        <input type="tel" name="mobile" placeholder="Mobile" value={formdata.mobile} onChange={handleInput} /></li>
        <li><label>Password:</label>
        <input type="password" name="password" placeholder="Password" value={formdata.password} onChange={handleInput}/></li>
        <li><label><input type="checkbox" name="Agree" checked={formdata.Agree} onChange={handleInput}/> I Agree</label></li>
    <li><button type='submit'>Submit</button></li>
    </ul>
    </form>
    </div>
  )
}
