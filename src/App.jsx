import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import WhyChoose from "./Components/WhyChoose/WhyChoose"


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <WhyChoose/>
      <Banner/>
      <About/>
    </div>
  )
}

export default App