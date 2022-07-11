import React from 'react'
import Socialconatct from '../../common/socialcontact'
import './about.css'

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hello my name is  <br />
               <span className='about-info-name'>Riya Vijay Bavkar.</span> 
                <br /><span className='info-other-content' >Hello There! i m a Frontend devloper . I have 1+ year of experience in Web-devlopment technology </span>
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