import React from "react";
import Greating from "./Greating";
import Destructuringprops from "./Destructuringprops";
import Listrendering from "./compounts/listrendering";
import Darkmode from "./Darkmode";
import Userusestate from "./Userusestate";
import Formsubmittion from "./Formsubmittion";
import Useeffecthook from "./Useeffecthook";
import Useeffectapi from "./Useeffectapi";
import Userefimg from "./Userefimg";
import {  ThemeProvider } from "./comount2/ThemeContext";
import Parent from "./comount2/Parent";
import Usereducer from "./comount2/Usereducer"
import Usecallbackhook from "./comount2/Usecallbackhook";
import { BrowserRouter,Route, Routes,Link } from "react-router-dom";
import Home from "./Router/Home";
import Contact from "./Router/Contact";
import Service from "./Router/Service";
import About from "./Router/About";
import Registration from "./Router/Registration";
import Uploaddoc from "./Router/Uploaddoc";
import XOgame from "./Game/XOgame";
import Blogdetail from "./Router/Blogdetail";
import Chattoany from "./Chatmedia/Chattoany"
import Navbar from "./Finalproject.jsx/Navbar";
import Hero from "./Finalproject.jsx/Hero";
import Servicesfin from "./Finalproject.jsx/Servicesfin";
import Contactfin from "./Finalproject.jsx/Contactfin";
import Aboutfin from "./Finalproject.jsx/Aboutfin";
import CustomerSupport from "./Finalproject.jsx/CustomerSupport";


export default function App() 
{
const name="Ramesh"
const age="32"
const local="salesm"

const address="coimbatore"
const state="Tamil Nadu"
const country="india"

const address1="salem"
const state1="Tamil Nadu"
const country1="india"

const address2="tirupur"
const state2="Tamil Nadu"
const country2="india"

const address3="chennai"
const state3="Tamil Nadu"
const country3="india"

const address4="coimbatore"
const State4="Tamil Nadu"
const country4="india"

const address5="madurai"
const state5="Tamil Nadu"
const country5="india"

const address6="Erode"
const state6="Tamil Nadu"
const country6="india"//

const display= false;


return(
  <div> 
    {display && (<div><h1>hello </h1>
  <h2>my name is {name} and age {age}</h2>
  <Greating firstname={name}/>
  <Destructuringprops address={address} state={state} country={country}/>
  <Destructuringprops address={address1} state={state1} country={country1}/>
  <Destructuringprops address={address2} state={state2} country={country2}/>
  <Destructuringprops address={address3} state={state3} country={country3}/>
  <Destructuringprops address={address4} state={State4} country={country4}/>
  <Destructuringprops address={address5} state={state5} country={country5}/>
  <h2>condition rendering</h2>
  {local === "coimbatore" ? (<Destructuringprops address={address1} state={state1} country={country1}/>) : (<Destructuringprops address={address} state={state} country={country}/>)}
<Listrendering/>
<Userusestate/>
<Darkmode/>
<Formsubmittion/>
<Useeffecthook/>
<Useeffectapi/>
<Userefimg/>
< ThemeProvider>
<Parent/></ ThemeProvider>
<Usereducer/>
<Usecallbackhook/>
<BrowserRouter>
<div className="Router">
<Link to="/">Home</Link>
<Link to="/About">About</Link>
<Link to="/Service">Service</Link>
<Link to="/Contact">Contact</Link>
</div>
<Routes>
  <Route path="/" element={<Home />} >
   <Route path="Registration" element={<Registration/>}/>
   <Route path="Uploaddoc" element={<Uploaddoc/>} /></Route>
  <Route path="/About" element={<About />}/>
  <Route path="/blog/:id" element={<Blogdetail />} />
   <Route path="/Service" element={<Service />} />
  <Route path="/Contact" element={<Contact />} />
</Routes>
</BrowserRouter>
<Chattoany/>
<XOgame/></div>)}
<div>
  <BrowserRouter>
  <Navbar/>
<Routes>
  <Route path="/" element={<Hero />} />
  <Route path="/customerSupport" element={<CustomerSupport />}/>
  <Route path="/Servicesfin" element={<Servicesfin />} />
  <Route path="/Contactfin" element={<Contactfin />} />
</Routes>
</BrowserRouter>
<Aboutfin/>
</div>
</div>
)
}