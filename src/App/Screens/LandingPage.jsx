import { useState, useEffect } from 'react'
import { Navigation } from '../Components/navigation'
import { Header } from '../Components/header'
import { Features } from '../Components/features'
import { About } from '../Components/about'
import { Contact } from '../Components/contact'
import JsonData from './data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default LandingPage
