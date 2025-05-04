import { useState } from 'react'
import SiteNavBar from './components/navbar'
import './App.css'
import Footer from './components/footer'

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <SiteNavBar/>
      <main className='container flex-grow-1 mt-5'>
        <h1>Shana Chan</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
