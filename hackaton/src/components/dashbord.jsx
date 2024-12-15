import React from 'react'
import './dashbord.css'
import logo from './logo.png'
import Programs from './programs'
export default function Dashbord() {
  return (
    <div>
         <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={logo}></img>
        <h2>Admin Dashboard</h2>
        <ul>
          <li>Our Programs</li>
          <li>Our Groups</li>
          <li>Payment</li>
          <li>statistic</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <header className="navbar">
          <h1>Welcome  Admin</h1>
          <input type='search' placeholder='search'></input>
        </header>
         <div className='kbir'>
            <Programs></Programs>
         </div>
        
      </div>
    </div>
 

    </div>
  )
}
