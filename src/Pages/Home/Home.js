import React, { useState } from "react";
import Navbar from "../../componant/Nav/Navbar";
import "./Home.css";
import Footer from "./footer";
import SocialMedia from "./SocialMedia";
import { classNames } from "@react-pdf-viewer/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Bot from "../ChatBot/Bot";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import sectionOneImg from './home_image.jpg'
// import section5BImg from './home_image.jpg'
function Home() {
  const navigate = useNavigate();
  const [showchatBot, setshowchatBot] = useState(true);
  return (
    <div>
      <Navbar />
      <section className="section1">
      <div className="section1Div">
        <div className="sectionDivA">
          <h1><span style={{color:"red"}}>MMIT</span> Knowledge Dynamics</h1>
          <h3>Help Students achieve there Dreams</h3>
          <h5>
            Accelerate learing with proven digital math and reading programs
          </h5>
          <div className="explore">
            <h4>Explore:</h4>
            <div className="exploreDiv">
              <a href="">Class One</a>
              <a href="">Class Two</a>
              <a href="">Class Three</a>
            </div>
          </div>
        </div>
        <div className="sectionDivB">
          <img src={sectionOneImg} alt="" srcSet="" />
        </div>
      </div>
    </section>
    <section className="Section5">
      <div className="Section5Div">
        <h3>Our program intelligently adapts to each student</h3>
        <div>
          <div className="Section5DivA">
            <div className="Section5DivAPoint">
              <div className="section5Icon">
                <img
                  src="https://dbl-live-website.imgix.net/o1qanoq3cFSuIN9UVJrTpmi89kHF9HkVl34xCSxt.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Build Confidance</h5>
                <p>
                  Immersive, interactive learner-driven math lessons make
                  students more confident and competent.
                </p>
                <a href="">More Info </a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div className="section5Icon">
                <img
                  src="	https://dbl-live-website.imgix.net/VngRjyEvk8yq4kRPXKu3QCNaRkM17Aeld3tZ6ZAj.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Intelligently Adaptive Learning</h5>
                <p>
                  Adjusts In real time to provide Individualized learning paths
                  for every student.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div  className="section5Icon">
                <img
                  src="	https://dbl-live-website.imgix.net/Uxn9dHeOBsC0TimN4Vb2vyuKnV760dvS7rlIt71q.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Curriculum and standards alignment</h5>
                <p>
                  lessons are designed by teachers, for teachers, and align with
                  all state K-8 math standards
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div  className="section5Icon">
                <img
                  src="https://dbl-live-website.imgix.net/58xTCabusiL6jHOXEzIZ7CRRHjHZoB1EuniDuEgF.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Functional screen time </h5>
                <p>
                  Never feel gulty about screen time again with productive
                  lessons students love.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div className="section5Icon">
                <img
                  src="	https://dbl-live-website.imgix.net/eMWy0d3uKb30OqdUQ8uL75r9vBQdt1hqbPEulDPb.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>See into the future</h5>
                <p>
                  Preview future student performance and adjust strategy as
                  needed.
                </p>
                <a href="">More Info</a>
              </div>
            </div>
            <div className="Section5DivAPoint">
              <div  className="section5Icon">
                <img 
                  src="	https://dbl-live-website.imgix.net/v6CUPkntgXWamtM8kxN7E02EyZBtlo2nTMFnxpQI.svg?w=31&h=31"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="section5DivADivB">
                <h5>Award-Winning</h5>
                <p>
                  Eduactors give BAOIAM two thumbs up. See what they're saying
                </p>
                <a href="">More Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* <div class="hero-image"></div> */}
      {/* onClick={()=>{navigate("/chatBot")}} */}
      { 
        !showchatBot &&
        <Bounce bottom>
         <div style={{ position: "absolute", right: 100, top: 20, zIndex: 20 }}>
           <Bot />
        </div>
        </Bounce>
        
      }
      
     {
      showchatBot?
      
     <div
        onClick={()=>{setshowchatBot(false)}}
        className="px-2 py-1 rounded-left"
        style={{
          position: "absolute",
          backgroundColor: "white",
          right: 0,
          top: 490,
          border: "solid 2px #ad7686",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          zIndex: 20,
        }}
      >
       <svg xmlns="http://www.w3.org/2000/svg" color="#ad7686" width="20" height="20" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
</svg>
        Chat Bot
      </div>:
      <div
      onClick={()=>{setshowchatBot(!showchatBot)}}
      className="px-2 py-1 rounded-left"
      style={{
        position: "absolute",
        backgroundColor: "white",
        right: 0,
        top: 490,
        border: "solid 2px #ad7686",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        zIndex: 20,
      }}
    >

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-down-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 12.5a.5.5 0 0 1-.5.5H1.5A1.5 1.5 0 0 1 0 11.5v-10A1.5 1.5 0 0 1 1.5 0h10A1.5 1.5 0 0 1 13 1.5v6.636a.5.5 0 0 1-1 0V1.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M16 15.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L6.146 6.854a.5.5 0 1 1 .708-.708L15 14.293V10.5a.5.5 0 0 1 1 0v5z"/>
</svg>
    </div>
      }
      
      <div
        onClick={() => {
          navigate("/googleMap");
        }}
        className="px-2 py-1 rounded-left"
        style={{
          position: "absolute",
          backgroundColor: "white",
          right: 0,
          top: 535,
          border: "solid 2px #ad7686",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          zIndex: 20,
        }}
      >
        <svg
          color="#ad7686"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        Location
      </div>

      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
