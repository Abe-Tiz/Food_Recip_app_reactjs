import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipies from "./pages/Recipies";
import Settings from "./pages/Settings";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container main" >
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/recipies' exact Component={Recipies}/>
            <Route path='/settings' exact Component={Settings}/>
          
          </Routes>
         
          
          
        </div>
        <Footer />


      </div>
    </Router>
    
  );
}

export default App;
