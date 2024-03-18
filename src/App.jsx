import React from 'react'
import NavDesktop from './common/Nav'
import HeroBanner from './Content.jsx'
import Footer from './common/Footer.jsx'
import AboutMe from './AboutMe.jsx'
import MySkills from './Skills.jsx'
import MyProjects from './Projects.jsx'
import ContactMe from './Contact.jsx'
import StagingPage from './Staging.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App(){
    return(
    <Router>
        <NavDesktop />
        <Routes>
            <Route path='/' element={
                <>
                <HeroBanner />
                <AboutMe />
                </>
            }/>
            <Route path='/skills' element={<MySkills />}/>
            <Route path='/staging' element={<StagingPage />}/>
        </Routes>
        <Footer />
    </Router>

    )
}

export default App