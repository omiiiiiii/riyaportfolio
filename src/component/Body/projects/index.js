import React from 'react'
import Seprator from '../../common/socialcontact/seprator'
import { ProjectData } from '../../data/project'
import './project.css'
import ProjectCard from './projectcard'

const data = ProjectData
function Project() {
  return (
    <div className='project'>
        <Seprator />
        <label className='section-title'>Projects</label>
        <div>
            {data.map((item)=>{
                return <ProjectCard project={item} />
            })}
        </div>
    </div>
  )
}

export default Project