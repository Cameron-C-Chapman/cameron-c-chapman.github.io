import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import adAstraLogo from '../../assets/images/experience/ad-astra-logo.png'
import garminLogo from '../../assets/images/experience/garmin-logo.png'
import ftsLogo from '../../assets/images/experience/fts-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={garminLogo}
            colour='#000000'
            title='Garmin'
            link='https://www.garmin.com/en-US'
            timeperiod='2011 - 2014'
            subtitle='This is where I really dove into software development. It started with spreadsheets 
            and MS Access databases which I eventually turned into custom web applicatons that were critical to 
            some of the warehouse business processes.'
          />
          <ExperienceUnit
            logo={adAstraLogo}
            colour='#33383E'
            title='Ad Astra'
            link='https://www.aais.com/'
            timeperiod='2014 - 2015'
            subtitle='My first official software engineer job. This was a great team and I learned a ton 
            about working to solve a specific set of problems with a custom software product suite. This was 
            a small company at the time and there was a real sense of directly impacting clients which can 
            be very rewarding and this has stuck with me.'
          />
          <ExperienceUnit
            logo={garminLogo}
            colour='#000000'
            title='Garmin'
            link='https://www.garmin.com/en-US'
            timeperiod='2015 - 2017'
            subtitle='I came back to Garmin to work in a more official software development role and help 
            expand on the software I developed in my original role in the warehouse. I was able to work on 
            the ERP team and learn a lot about the IT systems behind a major international corporation 
            with unique hardware, online sales, and internal tool requirements.'
          />
          <ExperienceUnit
            logo={ftsLogo}
            colour='#FFFFFF'
            title='FanThreeSixty'
            link='http://www.fanthreesixty.com/'
            timeperiod='2018 - Present'
            subtitle="Currently working on FanThreeSixty's fan engagement and customer data platform. 
            There are interesting web application and distributed systems and processing problems to solve 
            everyday."
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
