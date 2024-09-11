import { useState } from "react"
import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import LoginPage from "./Components/Login page/LoginPage"
import Navbar from "./Components/Navbar/Navbar"
import WhyChoose from "./Components/WhyChoose/WhyChoose"


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Banner />
      <About />
      <Footer />
    </div>
  )
}

export default App