import React from 'react'
import Seprator from '../../common/socialcontact/seprator'
import './hobbies.css'
import {Hobby} from '../../data/hobbies'

function Hobbies() {
    const data = Hobby
  return (
   
    <div className='hobby'>
         <Seprator />
         <label className='section-title'>Hobbies</label>
        <div className='hobby-conatiner'>
        {data.map((item)=>{
            return(
                <div className='hobby-card'>
                    <div className='hobby-icon'>
                       <img src={item.icon} className='icon-image' alt={item.name} />
                    </div>
                    <div className='hobby-name'>
                        {item.name}
                    </div>
                </div>
            )
        })}
        </div>
         
        
     </div>
  )
}

export default Hobbies