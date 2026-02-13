import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import LoadingScreen from './LoadingScreen';
import ModelDetail from './ModelDetail';
import Configurator from './Configurator';

function HomePage() {
  const navigate = useNavigate();

  const handleExploreModel = (modelId) => {
    navigate(`/model/${modelId}`);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="brand-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>PHANTOM</h1>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#models">Models</a></li>
            <li><a href="#custom">Custom Build</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">LUXURY REDEFINED</div>
          <h1 className="hero-title">PHANTOM R9</h1>
          <p className="hero-subtitle">BORN FROM SHADOWS. BUILT FOR LEGENDS.</p>
          <button className="hero-button">Experience Power</button>
        </div>
        
        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-item">
            <h2 className="stat-number">650</h2>
            <p className="stat-label">HORSEPOWER</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">2.8s</h2>
            <p className="stat-label">0-60 MPH</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">590</h2>
            <p className="stat-label">LB-FT TORQUE</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">205</h2>
            <p className="stat-label">MAX MPH</p>
          </div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="featured-models" id="models">
        <h2 className="section-title">THE PHANTOM COLLECTION</h2>
        <p className="section-subtitle">Where darkness meets elegance</p>
        
        <div className="models-grid">
          {/* PHANTOM S */}
          <div className="model-card">
            <div className="model-image-placeholder">
              <span className="model-badge">NEW</span>
            </div>
            <div className="model-content">
              <h3>PHANTOM S</h3>
              <p className="model-type">Sport Sedan</p>
              <p className="model-desc">Elegance with a dark soul</p>
              <p className="price">Starting at ₹54,00,000</p>
              <button 
                className="view-button" 
                onClick={() => handleExploreModel('phantom-s')}
              >
                Explore Model
              </button>
            </div>
          </div>

          {/* PHANTOM X */}
          <div className="model-card featured">
            <div className="model-image-placeholder">
              <span className="model-badge featured-badge">FEATURED</span>
            </div>
            <div className="model-content">
              <h3>PHANTOM X</h3>
              <p className="model-type">Luxury SUV</p>
              <p className="model-desc">Command the shadows</p>
              <p className="price">Starting at ₹70,00,000</p>
              <button 
                className="view-button" 
                onClick={() => handleExploreModel('phantom-x')}
              >
                Explore Model
              </button>
            </div>
          </div>

          {/* PHANTOM R */}
          <div className="model-card">
            <div className="model-image-placeholder">
              <span className="model-badge">PERFORMANCE</span>
            </div>
            <div className="model-content">
              <h3>PHANTOM R</h3>
              <p className="model-type">Performance Coupe</p>
              <p className="model-desc">Unleash the beast within</p>
              <p className="price">Starting at ₹1,00,00,000</p>
              <button 
                className="view-button" 
                onClick={() => handleExploreModel('phantom-r')}
              >
                Explore Model
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 PHANTOM. All rights reserved. | Born from Shadows</p>
      </footer>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 4 seconds
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Router>
      {loading && <LoadingScreen />}
      
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/model/:modelId" element={<ModelDetail />} />
          <Route path="/configure/:modelId" element={<Configurator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;