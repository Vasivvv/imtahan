import React from 'react'
import Navbar from '../../Utils/Navbar'
import Welcome from '../../Components/Welcome'
import About from '../../Components/About'
import Team from '../../Components/Team'
import Services from '../../Components/Services'
import Contact from '../../Components/Contact'
import Footer from '../../Utils/Footer'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Vasivvv</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <Navbar/>
    <Welcome/>
    <About/>
    <Team/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home