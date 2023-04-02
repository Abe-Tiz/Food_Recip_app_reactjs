import Chiefsection from "./components/Chiefsection";
import HeroSection from "./components/HeroSection";
import ImproveSkill from "./components/ImproveSkill";
import Navbar from "./components/Navbar";
import Quotesection from "./components/Quotesection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main" >
        
        <HeroSection />
        <ImproveSkill />
        <Quotesection />
        <Chiefsection />
      </div>


    </div>
  );
}

export default App;
