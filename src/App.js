import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import BeforeLogin from './Components/BeforeLogin/BeforeLogin';
import Analytics from './Components/Analytics';
import Benefit from './Components/Benefit';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Featured />
      <Benefit />
      <Footer />
    </div>
  );
}

export default App;
