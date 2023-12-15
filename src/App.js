import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import BeforeLogin from './Components/BeforeLogin/BeforeLogin';
import Analytics from './Components/Analytics';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
