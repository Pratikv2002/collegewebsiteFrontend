import React from 'react'
import Navbar from "../../componant/Nav/Navbar"
import './Home.css'
import Footer from './footer'
import SocialMedia from './SocialMedia'
import { classNames } from '@react-pdf-viewer/core'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar/>
        <div class="hero-image"></div>
        <div onClick={()=>{navigate("/googleMap")}} className = "px-5 py-3 rounded-left" style={{position:'absolute',backgroundColor:"white",right:0, top:630,border:"solid 2px blue",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}><svg color='blue' xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>location</div>
       <SocialMedia/>
        <Footer/>
    </div>
  )
}

export default Home