import React from 'react'
import logo from "../IITPkd.png"

function Home() {
  console.log("Home component called");
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Select your algorithm
      </h1>
      <div style={{textAlign: 'center'}}>
        <img src= {logo} alt = "logo" style = {{height:'300px'}} />
      </div>
    </div>
  )
}

export default Home