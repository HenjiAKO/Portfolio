import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
import projects_data from '../../assets/projects_data'


const Project = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {projects_data.map((project, index)=>{
          return <img key={index} src={project.p_img} alt=""/>
        })}
      </div>
      <div className="projects-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Project