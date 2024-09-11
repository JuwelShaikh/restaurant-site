import { useEffect } from "react";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import AOS from 'aos';


const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

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