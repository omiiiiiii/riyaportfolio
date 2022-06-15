import React from 'react'
import Seprator from '../../common/socialcontact/seprator'
import { Skilldata } from '../../data/skill'
import Skillcard from './skill-card';
import './skill.css'


function Skills() {
    const data = Skilldata;
  return (
  
    <div className='skills'>
        <Seprator />
        <label className='section-title'>Skills</label>
        <div className='skill-container'>
        {data.map((item)=>{
            return (<div className='skills-section'>
            <label className='skills-section-title'>{item.type}</label>
            <div className='skills-list'>
                {item.list.map((skill)=>{
                    return(
                        <Skillcard skill={skill } />
                    )
                    
                })}
            </div>
            </div>) 
        })}
        </div>
    </div>
  )
}

export default Skills