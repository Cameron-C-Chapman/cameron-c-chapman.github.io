import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import kuLogo from '../../assets/images/projects/ku-logo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects / Contract Work">
        <div className="row">
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
