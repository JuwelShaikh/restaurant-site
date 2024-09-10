import Banner from "./Components/Banner/Banner"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Banner/>
    </div>
  )
}

export default App