import { useState } from 'react'
import SiteNavBar from './components/navbar'
import './index.css'; 
import Footer from './components/footer'
import TypewriterOverlay from './components/typewriter'
import CardFlip from './components/card'
import Timeline from './components/timeline'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hangman from './components/SurpriseGame/Hangman/Hangman';


function App() {
  // For experience card flipping between pages
  const [experiencePage, setExperiencePage] = useState(0); // 0: industry, 1: non-industry
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
      duration: "August 2021 - Present",
      description:"",
      type:"nonindustry",
    },
    {
      title: "Club Secretary",
      company: "AWANA",
      duration: "September 2017 - September 2024",
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
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 mx-auto">
      <SiteNavBar />

      {/* Cards Section */}
      <div className="w-full flex flex-col items-center">
        <CardFlip
          frontContent={
            <div id="about" className="w-full flex flex-col md:flex-row items-center justify-center gap-6 p-4">
              <h1>About</h1>
            </div>
          }
          backContent={
            <div id="about" className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 p-2 sm:p-4">
              <div id="about-img" className="flex-shrink-0 mb-4 md:mb-0">
                <img src="/assets/AboutImg.jpg" alt="Image of Shana" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl shadow-lg object-cover" />
              </div>
              <div id="about-text" className="text-left w-full md:flex-1">
                <p className="font-sans md:font-serif text-sm sm:text-base md:text-lg leading-relaxed">
                  Hi! I'm Shana. <br/><br/>
                  I'm going into my 4th year in the Computing Science program at Simon Fraser University.<br/>
                  How did I get here? Well, as a lost and confused student fresh out of high school, I unexpectedly stumbled into computer science, a step that 
                  launched me into an incredible journey of creativity, logic, and problem-solving. <br/>
                  What started as light curiosity turned into a passion for building things that are both functional and meaningful.
                  <br/>
                  When I'm not pursuing personal coding projects, or studying, you can find me 
                  making chill improvs at the piano, reading a book, playing badminton, or touching grass.
                  <br/><br/>
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
            <div id="experience" className="w-full flex items-center justify-center">
              <h1>Experience</h1>
            </div>
          }
          backContent={
            <div id="experience" className="w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-lg flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-4">
                  {/* TODO: import nicer looking arrow for buttons */}
                  <button 
                    onClick={e => {
                      e.stopPropagation();
                      setExperiencePage(prev => (prev === 0 ? 1 : 0));
                    }}
                    className="text-2xl px-4 py-2 rounded-full hover:bg-gray-200 transition"
                    aria-label="Previous Experience"
                  >
                    &#8592;
                  </button>
                  <h2 className="text-xl font-bold text-center flex-1">
                    {experiencePage === 0 ? 'Industry Experience' : 'Other Experience'}
                  </h2>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setExperiencePage(prev => (prev === 0 ? 1 : 0));
                    }}
                    className="text-2xl px-4 py-2 rounded-full hover:bg-gray-200 transition"
                    aria-label="Next Experience"
                  >
                    &#8594;
                  </button>
                </div>
                {experiencePage === 0 ? (
                  <Timeline experienceArr={industryExperiences} />
                ) : (
                  <Timeline experienceArr={nonIndustryExperiences} />
                )}
                <div className="text-center mt-4 text-gray-500 text-sm">
                  Click the arrows to flip between experience sections
                </div>
              </div>
            </div>
          }
          color={'#FFF89A'}
        />
        <CardFlip
          frontContent={
            <div id="surprise" className="w-full flex items-center justify-center">
              <h1>Surprise</h1>
            </div>
          }
          backContent={
            <div id="surprise" className="w-full flex items-center justify-center">
              <Hangman/>
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
