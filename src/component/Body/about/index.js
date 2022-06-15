import React from 'react'
import Socialconatct from '../../common/socialcontact'
import './about.css'

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hello There 🖐️ ,I am <br />
               <span className='about-info-name'>Om Prakah dwivedi.</span> 
                <br />I love Experementing with Web
            </div>
            <div className='about-photo'>
                <img src={require('../../../asset/Coding.png')} alt="pic" className='about-info-picture' />
            </div>
        </div>
        <div className='about-bottom'>
            <Socialconatct />
        </div>
    </div>
  )
}

export default About