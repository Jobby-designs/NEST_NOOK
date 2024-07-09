import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <NavBar />
        <Hero />
        <Products />
        <Footer />
    </div>
  )
}

export default Home