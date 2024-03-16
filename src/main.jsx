import React from 'react'
import ReactDOM from 'react-dom/client'
import NavDesktop from './common/Nav'
import HeroBanner from './Content.jsx'
import Footer from './common/Footer.jsx'
import AboutMe from './AboutMe.jsx'
import MySkills from './Skills.jsx'
import MyProjects from './Projects.jsx'
import ContactMe from './Contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavDesktop />
    <HeroBanner />
    <AboutMe />
    {/*<MySkills />
    <MyProjects />
    <ContactMe /> */}
    <Footer />
  </React.StrictMode>,
)
