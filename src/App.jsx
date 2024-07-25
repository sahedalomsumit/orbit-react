import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import LogoFeatured from "./Components/LogoFeatured";
import Featured from "./Components/Featured";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Subscribe from "./Components/Subscribe";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import FeedbackSection from "./Components/FeedbackSection";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <LogoFeatured />
      <Featured />
      <Skills />
      <Services />
      <FeedbackSection />
      <Pricing />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
