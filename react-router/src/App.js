
import './App.css';
import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Games from './components/Games'
import Husband from './components/Husband'
import Wife from './components/Wife'


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <Router>
      <header>
        <h1 className="title">Welcome to Monty's Mineral SPA</h1>

        <div className="navBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Packages">Our Packages</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/Games">Stress Relieving Games</Link>
            </li>
            <li>
              <Link to="/Husband">Husbands - Click Here!</Link>
            </li>
            <li>
              <Link to="/Wife">Wives - Click Here!</Link>
            </li>
          </ul>
        </div>

      </header>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Packages" element={<Packages packages={packages} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/Husband" element={<Husband />} />
            <Route path="/Wife" element={<Wife />} />
          </Routes>
        </div>
        {/* <div>
          {packages}
        </div> */}

      </Router>
    </div>
  );
}

export default App;





