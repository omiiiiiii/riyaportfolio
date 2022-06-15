import React from 'react'
import Socialconatct from '../../common/socialcontact'
import Seprator from '../../common/socialcontact/seprator'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
      <Seprator />
      <label className='section-title'>contact</label>
      <div className='contact-container'>
        <div className='contact-container-left'>
          <p>Want to Connect? Contact with any of the platform</p>
          <Socialconatct />
        </div>
        <div className='download'>
          <a download href={require('../../../asset/Resume.pdf')}>
            <i className="fi fi-rr-download download-icon"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact