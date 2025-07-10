import { useState } from 'react'
import SiteNavBar from './components/navbar'
// import './App.css'
import './index.css'; 
import Footer from './components/footer'
import TypewriterOverlay from './components/typewriter'
import CardFlip from './components/card'
import Timeline from './components/timeline'
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';


function App() {
  const [showTypeWriter, setShowTypeWriter] = useState(true);

  //experience section array
  const industryExperiences = [
    {
      title: "Orbi Software Test Engineer",
      company: "NetGear",
      duration: "May 2025 - Present",
      description: "",
      type:"industry",
    },
    {
      title: "Web Developer Coordinator",
      company: "Enactus SFU",
      duration: "February 2025 - Present",
      description:"",
      type:"industry",
    },
    {
      title: "Junior Developer",
      company: "Anthem Properties",
      duration: "May 2024 - August 2024",
      description: "",
      type:"industry",
    },
  ];

    const nonIndustryExperiences = [
    {
      title: "Math and Reading Instructor Assistant",
      company: "Kumon",
      duration: "February 2025 - Present",
      description:"",
      type:"nonindustry",
    },
    {
      title: "Club Secretary",
      company: "AWANA",
      duration: "February 2025 - Present",
      description:"",
      type:"nonindustry",

    },
  ];

  // show the overlay if showTypeWriter is true
  if (showTypeWriter) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <TypewriterOverlay 
          text="  Welcome to the website of Shana Chan" 
          speed={75} 
          onDone={() => {
            setTimeout(() => setShowTypeWriter(false), 1000);
          }} 
        />
      </div>
    );
  }

  // show the main content
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNavBar />

      {/* Cards Section */}
      <div className="flex flex-col justify-center items-center flex-1 gap-24 py-16">
        <CardFlip
          frontContent={
            <div id="about" className="w-full h-full flex items-center justify-center">
              <h1>About</h1>
            </div>
          }
          backContent={
            <div id="about" className="w-full h-full flex flex-row items-center justify-center gap-10 p-4">
              <div id="about-img" className="flex-shrink-0">
                <img src="/assets/AboutImg.jpg" alt="Image of Shana" className="w-40 h-40 object-cover rounded-xl shadow-lg" />
              </div>
              <div id="about-text" className="text-left pl-50">
                <p className="font-sans md:font-serif ...">
                  Hi! I'm Shana. <br/>
                  I'm going into my 4th year Computing Science major at Simon Fraser University.<br/>
                  How did I get here? Well, as a lost and confused student fresh out of high school, I unexpectedly stumbled into computer science, a step that 
                  launched me into an incredible journey of creativity, logic, and problem-solving. <br/>
                  What started as light curiosity turned into a passion for building things that are both functional and meaningful.
                  <br/>
                  When I'm not pursuing personal coding projects, or studying, you can find me 
                  making chill improvs at the piano, reading a book, playing badminton, or touching grass.
                  <br/>
                  If you're looking for someone eager to learn, create, and make an impact, let's chat!
                  In the meantime, feel free to explore this site!
                </p>
              </div>
            </div>
          }
          color={'#CDE8C5'}
        />
        <CardFlip
          frontContent={
            <div id="experience" className="w-full h-full flex items-center justify-center">
              <h1>Experience</h1>
            </div>
          }
          backContent={
            <div id="experience" className="w-full h-full flex items-center justify-center">
              <Swiper spaceBetween={50} slidesPerView={1}>
                <SwiperSlide>
                    <h2 className="text-xl font-bold mb-4 text-center">Industry Experience</h2>
                    <Timeline experienceArr={industryExperiences} />
                </SwiperSlide>
                <SwiperSlide>
                    <h2 className="text-xl font-bold mb-4 text-center">Other Experience</h2>
                    <Timeline experienceArr={nonIndustryExperiences} />
                </SwiperSlide>
              </Swiper>
            </div>
          }
          color={'#FFF89A'}
        />
        <CardFlip
          frontContent={
            <div id="surprise" className="w-full h-full flex items-center justify-center">
              <h1>Surprise</h1>
            </div>
          }
          backContent={
            <div id="surprise" className="w-full h-full flex items-center justify-center">
              <p>Lorem locus text stuff</p>
            </div>
          }
          color={'#FFB7C5'}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App
