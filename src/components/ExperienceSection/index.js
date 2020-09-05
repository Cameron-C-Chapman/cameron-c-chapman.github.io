import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import adAstraLogo from '../../assets/images/experience/ad-astra-logo.png'
import garminLogo from '../../assets/images/experience/garmin-logo.png'
import dstHealthLogo from '../../assets/images/experience/dst-health-logo.png'
import ftsLogo from '../../assets/images/experience/fts-logo.png'
import innosolLogo from '../../assets/images/experience/innosol-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={innosolLogo}
            colour='#FFFFFF'
            title='Innosol'
            link='http://innosolpro.com/'
            timeperiod='2020 - Present'
            subtitle="Currently working as a Principal Software Enginner for Innosol. Innosol is a local 
            Kansas City startup that is focused on building graph analytics technology for various industries. 
            This includes building distributed data ingestion pipelines, graph database services, and client 
            facing applications."
          />
          <ExperienceUnit
            logo={ftsLogo}
            colour='#FFFFFF'
            title='FanThreeSixty'
            link='https://www.fanthreesixty.com/'
            timeperiod='2018 - 2020'
            subtitle="Worked on FanThreeSixty's fan engagement and customer data platform as a 
            Technical Lead/Architect for FanThreeSixty's Sales product. There are interesting web application 
            and distributed systems and processing problems to solve everyday."
          />
          <ExperienceUnit
            logo={dstHealthLogo}
            colour='#FFFFFF'
            title='DST Pharmacy Solutions'
            link='https://www.linkedin.com/company/argus-health-systems'
            timeperiod='2017 - 2018'
            subtitle="Lead efforts to help modernize some legacy applications using the microservices architecture 
            pattern. This included microservice REST services and single page JavaScript applications to replace and 
            improve existing applications."
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
            timeperiod='2011 - 2014'
            subtitle='This is where I really dove into software development. It started with spreadsheets 
            and MS Access databases which I eventually turned into custom web applicatons that were critical to 
            some of the warehouse business processes.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
