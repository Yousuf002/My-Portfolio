import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import './styles/Contact.css'
const Contacts = () => {
  return (
    <div id='cont' className='contact'>
       
      <div className='inputs'>
        <h1>Contact Me</h1>
        <input type = "text" color='blue' placeholder='Name'></input>
        <input type = "text"  placeholder='Email' color='#98edf5'></input>
        <input type = "text" color='#98edf5' placeholder='Message' className='message'></input>
        <button>Send</button>

      </div>
    </div>
  )
}

export default Contacts
