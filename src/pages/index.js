import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const yearsOfExperience = (new Date().getFullYear() - 2011);

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Cameron Chapman</span>
        </h5>

        <h3 className="bold">
          Full stack software engineer and architect, with {yearsOfExperience}+ years of experience building software 
          for a higher education SaaS and analytics company, a major international device 
          manufacturer, a health care software platform, and an innovative sports fan engagement platform.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
