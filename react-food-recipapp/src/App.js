import HeroSection from "./components/HeroSection";
import ImproveSkill from "./components/ImproveSkill";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main" >
        
        <HeroSection />
        <ImproveSkill />

      </div>


    </div>
  );
}

export default App;
