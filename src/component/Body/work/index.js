import React from 'react'
import Seprator from '../../common/socialcontact/seprator'
import { WorkData } from '../../data/work'
import './work.css'
import Workcard from './workcard'

function Work() {
  const data = WorkData
  return (
    <div className='work'>
        <Seprator />
        <label className='section-title'>Work</label>
        <div className='work-list'>
      {data.map((item)=>{
        return <Workcard item={item} />
      })}
        </div>
    </div>
  )
}

export default Work