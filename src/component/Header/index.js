import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'

const Header = () => {
  const [isopen ,setisopen]=useState(false)
  return (
    <div className='header'> 
      <div className='logo'>PortFolio</div>
      <div className='menu'> 
      <div className='web-menu'><Web /></div>
      <div className='mobile-menu'>
          <div onClick={()=>setisopen(!isopen)}>
          <i className="fi fi-rr-apps menu-icon"></i>
          </div>
          {isopen && <Mobile isopen={isopen} setisopen={setisopen}/>}
         </div>
       </div>
    </div>
  )
}

export default Header