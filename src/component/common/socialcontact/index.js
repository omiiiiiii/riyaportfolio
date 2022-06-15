import React from 'react'
import { Socialdata } from '../../data/social'
import './socialcontact.css'
function Socialconatct() {
    const data =Socialdata
  return (
    <div className='Scoial-contact'>{data.map((item)=>{
        return <a href={item.link}>
                <div className='social-contact-icon'>
                    <img src={item.icon} className='social-icon' alt={item.platform} /> 

                </div>
        </a>
    })}</div>
  )
}

export default Socialconatct