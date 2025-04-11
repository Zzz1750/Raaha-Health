'use client'
import React from 'react'
import AboutHero from './components/AboutHero'
import WhyRaaha from './components/WhyRaaha'
import OurVision from './components/OurVision'
import OurMission from './components/OurMission'
import FounderNote from './components/FounderNote'
import JoinSection from './components/JoinSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <AboutHero />
        <div className="bg-white">
          <WhyRaaha />
          <OurVision />
          <OurMission />
          <FounderNote />
          <JoinSection />
        </div>
      </main>
    </div>
  )
}