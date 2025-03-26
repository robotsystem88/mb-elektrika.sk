import React from 'react';
import { Header } from './components/Header'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { BatteryInfo } from './components/BatteryInfo'
import { Process } from './components/Process'
import { Models } from './components/Models'
import { ErrorCodes } from './components/ErrorCodes'
import { FAQ } from './components/FAQ'
import { AccidentRecoveryCTA } from './components/AccidentRecoveryCTA'
import { CallToAction } from './components/CallToAction'
import { Features } from './components/Features'
import { Advantages } from './components/Advantages'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { FooterMenu } from './components/FooterMenu'
import { Navigation } from './components/Navigation'
import { MetaTags } from './components/MetaTags'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const modelMatch = location.pathname.match(/^\/models\/(.+)$/);

  if (modelMatch) {
    return <ModelPage modelKey={modelMatch[1]} />
  }

  return (
    <div className="min-h-screen bg-white">
      <MetaTags />
      <Header />
      <AccidentRecoveryCTA />
      <Services />
      <Pricing />
      <BatteryInfo />
      <Process />
      <Models />
      <ErrorCodes />
      <FAQ />
      <CallToAction />
      <Features />
      <Advantages />
      <Testimonials />
      <Contact />
      <Footer />
      <FooterMenu />
      <CookieConsent />
      <Navigation />
    </div>
  )
}

export default App