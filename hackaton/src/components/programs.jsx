import React from 'react'
import './programs.css'
import Prog from './prog'

export default function Programs() {
  return (
    <div className='prog'> 
        <h1>Program list</h1>
        <div>
            <ul>
                <li>Name</li>
                <li>Session</li>
                <li>Progress</li>
            </ul>
            <ul >
                <Prog name="cours" session="14"></Prog>
            </ul>
        </div>
    </div>
  )
}
