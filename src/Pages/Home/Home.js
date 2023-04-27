import React from 'react'
import Navbar from "../../componant/Nav/Navbar"
import './Home.css'
import Footer from './footer'
import SocialMedia from './SocialMedia'

function Home() {
  return (
    <div>
        <Navbar/>
        <div class="hero-image"></div>
       <SocialMedia/>
        <Footer/>
    </div>
  )
}

export default Home