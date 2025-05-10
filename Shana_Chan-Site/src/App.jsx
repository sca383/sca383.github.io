import { useState } from 'react'
import SiteNavBar from './components/navbar'
import './App.css'
import Footer from './components/footer'
import testImg from './assets/test.png'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <SiteNavBar />

      <div id="home" style={{ backgroundImage: `url(${testImg})` }} className="w-full min-h-screen bg-center bg-cover flex items-center justify-center">
        <h1>Shana Chan</h1>
      </div>

      <div id="about" className="w-full min-h-screen flex items-center justify-center">
        <h1>About Shana</h1>
      </div>
      <div id="aboutText">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      <div id="experience" className="w-full min-h-screen flex items-center justify-center">
        <h1>Experiences</h1>

      </div>

      <div id="surprise" className="w-full min-h-screen flex items-center justify-center">
        <h1>Surprise</h1>
      </div>

      <Footer />
    </div>


  )
}

export default App
