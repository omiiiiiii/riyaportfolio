import React from 'react'
import './workcard.css'

function Workcard({item}) {
  return (
    <div className='work-card'>
        <img src={item.companyLogo} className='company-logo' alt={item.company} />
        <div className='work-info'>
        <label className='company-name'>{item.company}</label>
        <div className='work-date'>
           <label> {item.dateofjoining}</label>-<label>{item.dateEnd}</label>
            </div>
            <div className='work-discription'>
            <p>{item.work}</p>
            </div>
        </div>
    </div>
  )
}

export default Workcard