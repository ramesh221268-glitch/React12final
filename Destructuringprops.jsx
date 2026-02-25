import React from "react";

export default function Destructuringprops({address, state, country}) {
  return (
    <div>
      <h3> address: {address}</h3>
      <h3> state: {state}</h3>
      <h3> country: {country}</h3>
    </div>
  );
}