import React from 'react'
import logo from "../logo.svg"

function Home() {
  console.log("Home component called");
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Select your algorithm
      </h1>
      <div style={{ textAlign: 'center' }}>
        <img src= {logo} alt = "logo" style = {{height:'600px'}} />
      </div>
    </div>
  )
}

export default Home