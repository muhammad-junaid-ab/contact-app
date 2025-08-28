import React from 'react'
import firebaseLogo from '../assets/logos_firebase.svg'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-2 text-xl font-medium items-center h-[60px] bg-white my-4 rounded-lg'>
            <img src={firebaseLogo} alt="Firebase Logo" />
            <h1>FireBase Contact App</h1>
    </div>
  )
}

export default Navbar