import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ModelDetail.css';

// Car data for each model
const carData = {
  'phantom-s': {
    name: 'PHANTOM S',
    type: 'Sport Sedan',
    tagline: 'Elegance with a dark soul',
    description: 'The PHANTOM S combines sophisticated luxury with exhilarating performance. Every detail has been meticulously crafted to deliver an unparalleled driving experience.',
    price: '₹54,00,000',
    specs: {
      engine: '3.0L Twin-Turbo V6',
      horsepower: '425 HP',
      torque: '480 lb-ft',
      acceleration: '4.2s (0-60 mph)',
      topSpeed: '155 mph',
      transmission: '8-Speed Automatic',
      drivetrain: 'AWD',
      fuelEconomy: '22 city / 30 highway mpg'
    },
    features: [
      'Premium Leather Interior',
      'Panoramic Sunroof',
      'Advanced Driver Assistance',
      '360° Camera System',
      'Adaptive Cruise Control',
      'Wireless Phone Charging',
      'Premium Sound System',
      'Heated & Ventilated Seats',
      'Ambient Lighting (64 colors)',
      'Head-Up Display'
    ],
    colors: ['Phantom Black', 'Midnight Blue', 'Silver Shadow', 'Deep Purple']
  },
  'phantom-x': {
    name: 'PHANTOM X',
    type: 'Luxury SUV',
    tagline: 'Command the shadows',
    description: 'The PHANTOM X redefines luxury SUV standards. With commanding presence and cutting-edge technology, it dominates every terrain while providing unmatched comfort.',
    price: '₹70,00,000',
    specs: {
      engine: '3.5L Twin-Turbo V6',
      horsepower: '520 HP',
      torque: '550 lb-ft',
      acceleration: '4.5s (0-60 mph)',
      topSpeed: '165 mph',
      transmission: '9-Speed Automatic',
      drivetrain: 'AWD',
      fuelEconomy: '19 city / 25 highway mpg'
    },
    features: [
      'Premium Nappa Leather',
      'Panoramic Glass Roof',
      'Air Suspension System',
      'Night Vision Camera',
      'Massaging Front Seats',
      'Rear Entertainment System',
      'Premium 3D Sound (20 speakers)',
      'Power Liftgate',
      'Tri-Zone Climate Control',
      'Gesture Control'
    ],
    colors: ['Obsidian Black', 'Storm Grey', 'Arctic White', 'Royal Purple']
  },
  'phantom-r': {
    name: 'PHANTOM R',
    type: 'Performance Coupe',
    tagline: 'Unleash the beast within',
    description: 'The PHANTOM R is the pinnacle of performance engineering. Born on the track, refined for the road. Pure, uncompromising power meets sophisticated design.',
    price: '₹1,00,00,000',
    specs: {
      engine: '4.0L Twin-Turbo V8',
      horsepower: '650 HP',
      torque: '590 lb-ft',
      acceleration: '2.8s (0-60 mph)',
      topSpeed: '205 mph',
      transmission: '8-Speed DCT',
      drivetrain: 'RWD',
      fuelEconomy: '16 city / 23 highway mpg'
    },
    features: [
      'Carbon Fiber Interior Trim',
      'Sport Bucket Seats',
      'Track Mode',
      'Launch Control',
      'Active Aerodynamics',
      'Performance Exhaust',
      'Carbon Ceramic Brakes',
      'Adaptive Suspension',
      'Digital Instrument Cluster',
      'Race Telemetry System'
    ],
    colors: ['Carbon Black', 'Racing Red', 'Ghost White', 'Electric Purple']
  }
};

function ModelDetail() {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const car = carData[modelId];

  if (!car) {
    return <div className="not-found">Model not found</div>;
  }

  const handleConfigure = () => {
    navigate(`/configure/${modelId}`);
  };

  return (
    <div className="model-detail">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="brand-logo-link">
            <h1 className="brand-logo">PHANTOM</h1>
          </Link>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><a href="#specs">Specifications</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#configure">Configure</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="model-hero">
        <div className="model-hero-overlay"></div>
        <div className="model-hero-content">
          <div className="model-badge-detail">{car.type.toUpperCase()}</div>
          <h1 className="model-hero-title">{car.name}</h1>
          <p className="model-hero-tagline">{car.tagline}</p>
          <p className="model-hero-price">{car.price}</p>
        </div>
        
        {/* Large Image Placeholder */}
        <div className="model-hero-image">
          <div className="image-placeholder-large">
            {car.name} - Hero Image
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="model-description">
        <div className="container">
          <h2>Born from Innovation</h2>
          <p>{car.description}</p>
        </div>
      </section>

      {/* Specifications */}
      <section className="model-specs" id="specs">
        <div className="container">
          <h2 className="section-title-detail">TECHNICAL SPECIFICATIONS</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <div className="spec-icon">⚡</div>
              <h3>Engine</h3>
              <p>{car.specs.engine}</p>
            </div>
            <div className="spec-item">
              <div className="spec-icon">💪</div>
              <h3>Horsepower</h3>
              <p>{car.specs.horsepower}</p>
            </div>
            <div className="spec-item">
              <div className="spec-icon">🔧</div>
              <h3>Torque</h3>
              <p>{car.specs.torque}</p>
            </div>
            <div className="spec-item">
              <div className="spec-icon">🚀</div>
              <h3>0-60 mph</h3>
              <p>{car.specs.acceleration}</p>
            </div>
            <div className="spec-item">
              <div className="spec-icon">⚡</div>
              <h3>Top Speed</h3>
              <p>{car.specs.topSpeed}</p>
            </div>
            <div className="spec-item">
              <div className="spec-icon">⚙️</div>
              <h3>Transmission</h3>
              <p>{car.specs.transmission}</p>
            </div>
            <div className="spec-item">
              <div className="spec-icon">🔄</div>
              <h3>Drivetrain</h3>
              <p>{car.specs.drivetrain}</p>
            </div>
            <div className="spec-item">
              <div className="spec-icon">⛽</div>
              <h3>Fuel Economy</h3>
              <p>{car.specs.fuelEconomy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="model-features" id="features">
        <div className="container">
          <h2 className="section-title-detail">LUXURY FEATURES</h2>
          <div className="features-grid">
            {car.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-check">✓</div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Colors */}
      <section className="model-colors">
        <div className="container">
          <h2 className="section-title-detail">AVAILABLE COLORS</h2>
          <div className="colors-list">
            {car.colors.map((color, index) => (
              <div key={index} className="color-item">
                <div className="color-swatch"></div>
                <p>{color}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="model-cta" id="configure">
        <div className="container">
          <h2>Ready to Build Your {car.name}?</h2>
          <p>Customize every detail and make it truly yours</p>
          <button className="cta-button" onClick={handleConfigure}>
            Configure Your {car.name}
          </button>
          <Link to="/" className="back-link">← Back to All Models</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 PHANTOM. All rights reserved. | Aarsh Choudhary. </p>
      </footer>
    </div>
  );
}

export default ModelDetail;