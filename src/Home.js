import React from 'react'
import Footer from './components/Footer'
import ProjectSector from './components/ProjectSector'
import SkillSector from './components/SkillSector'
import Mainsector from './components/mainsector'
import Heading from './components/header'

function Home() {
    return (
        <div>
          <Heading />
          <Mainsector />
          <SkillSector />
          <ProjectSector />
          <Footer />
    </div>
    )
}

export default Home
