import React from 'react'
import { NavLink } from 'react-router-dom'

import './Splash.css'

const Splash = () => {

  return (
    <div className='splash-container'>
      <h1 className='splash-header'>Welcome to the punchBowl</h1>
      <p className='splash-body'>The punchBowl is an app that aims to remove the filters from your political reality.  Use the search bar to find thousands of current articles from the nation's top news agencies, displayed side by side.  Unsure of what to search for? Just select any of the trending words that appear underneath the search bar.  To get started click the button below!</p>
      <NavLink className='splash-link' to='/home'>Get Started</NavLink>
    </div>
  )
}

export default Splash