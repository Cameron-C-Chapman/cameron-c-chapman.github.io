import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import kuLogo from '../../assets/images/projects/ku-logo.png'
import primeLogo from '../../assets/images/projects/prime-academy-logo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects / Contract / Volunteer Work">
        <div className="row">
          <ExperienceUnit
            logo={primeLogo}
            colour="#FFFFFF"
            title="Prime Digital Acedemy"
            link="https://primeacademy.io/"
            timeperiod="2019"
            subtitle="Mentored students enrolled in the full stack engineering curriculum."
          />
          <ExperienceUnit
            logo={kuLogo}
            colour="#0050BC"
            title="KU Coding Boot Camp"
            link="https://bootcamp.ku.edu/coding/"
            timeperiod="2017 - 2018"
            subtitle="I assisted mentoring and instructing students in a 6 month full stack 
            web development bootcamp."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
