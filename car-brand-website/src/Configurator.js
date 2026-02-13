import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Configurator.css';

// Configuration options data
const configData = {
  'phantom-s': {
    name: 'PHANTOM S',
    basePrice: 5400000,
    exteriorColors: [
      { id: 'black', name: 'Phantom Black', code: '#0a0a0a', price: 0 },
      { id: 'blue', name: 'Midnight Blue', code: '#1a1a3e', price: 50000 },
      { id: 'silver', name: 'Silver Shadow', code: '#c0c0c0', price: 30000 },
      { id: 'purple', name: 'Deep Purple', code: '#4B0082', price: 80000 },
      { id: 'white', name: 'Ghost White', code: '#f5f5f5', price: 40000 }
    ],
    interiorColors: [
      { id: 'black-int', name: 'Onyx Black', code: '#1a1a1a', price: 0 },
      { id: 'beige', name: 'Cream Beige', code: '#d4b896', price: 100000 },
      { id: 'red', name: 'Crimson Red', code: '#8b0000', price: 150000 },
      { id: 'brown', name: 'Espresso Brown', code: '#5c4033', price: 120000 }
    ],
    wheels: [
      { id: 'standard', name: '18" Standard Alloy', price: 0 },
      { id: 'sport', name: '19" Sport Alloy', price: 150000 },
      { id: 'premium', name: '20" Premium Diamond Cut', price: 250000 }
    ],
    packages: [
      { id: 'sound', name: 'Premium Sound System', price: 200000, description: '12-speaker surround sound' },
      { id: 'sunroof', name: 'Panoramic Sunroof', price: 180000, description: 'Full glass roof with electric shade' },
      { id: 'assist', name: 'Advanced Driver Assistance', price: 300000, description: 'Adaptive cruise, lane keep, parking assist' },
      { id: 'sport', name: 'Sport Package', price: 400000, description: 'Sport suspension, exhaust, pedals' },
      { id: 'comfort', name: 'Comfort Package', price: 250000, description: 'Heated/cooled seats, massage function' }
    ]
  },
  'phantom-x': {
    name: 'PHANTOM X',
    basePrice: 7000000,
    exteriorColors: [
      { id: 'black', name: 'Obsidian Black', code: '#000000', price: 0 },
      { id: 'grey', name: 'Storm Grey', code: '#708090', price: 60000 },
      { id: 'white', name: 'Arctic White', code: '#ffffff', price: 50000 },
      { id: 'purple', name: 'Royal Purple', code: '#6a0dad', price: 100000 },
      { id: 'blue', name: 'Ocean Blue', code: '#1e3a8a', price: 80000 }
    ],
    interiorColors: [
      { id: 'black-int', name: 'Shadow Black', code: '#0f0f0f', price: 0 },
      { id: 'tan', name: 'Desert Tan', code: '#d2b48c', price: 150000 },
      { id: 'grey', name: 'Slate Grey', code: '#555555', price: 120000 },
      { id: 'white', name: 'Ivory White', code: '#fffff0', price: 180000 }
    ],
    wheels: [
      { id: 'standard', name: '20" SUV Alloy', price: 0 },
      { id: 'sport', name: '21" Sport Design', price: 200000 },
      { id: 'luxury', name: '22" Luxury Chrome', price: 350000 }
    ],
    packages: [
      { id: 'sound', name: 'Premium 3D Sound', price: 300000, description: '20-speaker 3D audio system' },
      { id: 'sunroof', name: 'Panoramic Glass Roof', price: 250000, description: 'Full panoramic glass with tint control' },
      { id: 'assist', name: 'Night Vision & Assist', price: 400000, description: 'Night vision camera, 360° cameras' },
      { id: 'air', name: 'Air Suspension', price: 500000, description: 'Adaptive air suspension with ride modes' },
      { id: 'luxury', name: 'Luxury Interior Package', price: 600000, description: 'Nappa leather, rear entertainment, massage seats' }
    ]
  },
  'phantom-r': {
    name: 'PHANTOM R',
    basePrice: 10000000,
    exteriorColors: [
      { id: 'black', name: 'Carbon Black', code: '#0d0d0d', price: 0 },
      { id: 'red', name: 'Racing Red', code: '#cc0000', price: 150000 },
      { id: 'white', name: 'Ghost White', code: '#f0f0f0', price: 100000 },
      { id: 'purple', name: 'Electric Purple', code: '#8A2BE2', price: 200000 },
      { id: 'grey', name: 'Titanium Grey', code: '#888888', price: 120000 }
    ],
    interiorColors: [
      { id: 'black-int', name: 'Carbon Black', code: '#000000', price: 0 },
      { id: 'red', name: 'Racing Red', code: '#8b0000', price: 250000 },
      { id: 'grey', name: 'Alcantara Grey', code: '#3d3d3d', price: 200000 },
      { id: 'purple', name: 'Purple Accent', code: '#4B0082', price: 300000 }
    ],
    wheels: [
      { id: 'standard', name: '19" Performance Alloy', price: 0 },
      { id: 'sport', name: '20" Carbon Sport', price: 300000 },
      { id: 'track', name: '21" Track Edition Forged', price: 500000 }
    ],
    packages: [
      { id: 'track', name: 'Track Package', price: 800000, description: 'Track mode, launch control, race telemetry' },
      { id: 'carbon', name: 'Carbon Fiber Package', price: 600000, description: 'Carbon fiber interior trim, spoiler, diffuser' },
      { id: 'exhaust', name: 'Performance Exhaust', price: 400000, description: 'Titanium exhaust with valve control' },
      { id: 'brakes', name: 'Carbon Ceramic Brakes', price: 700000, description: 'Carbon ceramic braking system' },
      { id: 'aero', name: 'Aerodynamics Package', price: 500000, description: 'Active aero, adjustable spoiler' }
    ]
  }
};

function Configurator() {
  const { modelId } = useParams();
  const car = configData[modelId];

  // State management
  const [selectedExterior, setSelectedExterior] = useState(car.exteriorColors[0]);
  const [selectedInterior, setSelectedInterior] = useState(car.interiorColors[0]);
  const [selectedWheels, setSelectedWheels] = useState(car.wheels[0]);
  const [selectedPackages, setSelectedPackages] = useState([]);

  if (!car) {
    return <div className="not-found">Configuration not available</div>;
  }

  // Calculate total price
  const calculateTotal = () => {
    let total = car.basePrice;
    total += selectedExterior.price;
    total += selectedInterior.price;
    total += selectedWheels.price;
    selectedPackages.forEach(pkg => {
      total += pkg.price;
    });
    return total;
  };

  // Toggle package selection
  const togglePackage = (pkg) => {
    if (selectedPackages.find(p => p.id === pkg.id)) {
      setSelectedPackages(selectedPackages.filter(p => p.id !== pkg.id));
    } else {
      setSelectedPackages([...selectedPackages, pkg]);
    }
  };

  // Format price in Indian format
  const formatPrice = (price) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  return (
    <div className="configurator">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="brand-logo">PHANTOM</h1>
          </Link>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/model/${modelId}`}>Model Details</Link></li>
            <li><a href="#summary">Summary</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <section className="config-header">
        <h1>CONFIGURE YOUR {car.name}</h1>
        <p>Build your dream machine, exactly as you want it</p>
      </section>

      <div className="config-container">
        {/* Left Side - Visual Preview */}
        <div className="config-preview">
          <div 
            className="car-preview" 
            style={{ 
              background: `linear-gradient(135deg, ${selectedExterior.code} 0%, ${selectedExterior.code}dd 100%)`,
              border: `2px solid ${selectedExterior.code}`
            }}
          >
            <div className="preview-label">PREVIEW</div>
            <div className="car-silhouette">
              <p>{car.name}</p>
              <p className="preview-color">{selectedExterior.name}</p>
            </div>
          </div>

          {/* Current Selection Summary */}
          <div className="current-config">
            <h3>YOUR CONFIGURATION</h3>
            <div className="config-item">
              <span>Exterior:</span>
              <strong>{selectedExterior.name}</strong>
            </div>
            <div className="config-item">
              <span>Interior:</span>
              <strong>{selectedInterior.name}</strong>
            </div>
            <div className="config-item">
              <span>Wheels:</span>
              <strong>{selectedWheels.name}</strong>
            </div>
            {selectedPackages.length > 0 && (
              <div className="config-item">
                <span>Packages:</span>
                <strong>{selectedPackages.length} selected</strong>
              </div>
            )}
          </div>

          {/* Price Display */}
          <div className="price-display">
            <div className="price-row">
              <span>Base Price:</span>
              <span>{formatPrice(car.basePrice)}</span>
            </div>
            {selectedExterior.price > 0 && (
              <div className="price-row">
                <span>Exterior Color:</span>
                <span>+{formatPrice(selectedExterior.price)}</span>
              </div>
            )}
            {selectedInterior.price > 0 && (
              <div className="price-row">
                <span>Interior Color:</span>
                <span>+{formatPrice(selectedInterior.price)}</span>
              </div>
            )}
            {selectedWheels.price > 0 && (
              <div className="price-row">
                <span>Wheels:</span>
                <span>+{formatPrice(selectedWheels.price)}</span>
              </div>
            )}
            {selectedPackages.map(pkg => (
              <div key={pkg.id} className="price-row">
                <span>{pkg.name}:</span>
                <span>+{formatPrice(pkg.price)}</span>
              </div>
            ))}
            <div className="price-total">
              <span>TOTAL PRICE:</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Configuration Options */}
        <div className="config-options">
          {/* Exterior Colors */}
          <div className="option-section">
            <h2>EXTERIOR COLOR</h2>
            <div className="color-grid">
              {car.exteriorColors.map(color => (
                <div
                  key={color.id}
                  className={`color-option ${selectedExterior.id === color.id ? 'selected' : ''}`}
                  onClick={() => setSelectedExterior(color)}
                >
                  <div 
                    className="color-circle" 
                    style={{ backgroundColor: color.code }}
                  ></div>
                  <p className="color-name">{color.name}</p>
                  {color.price > 0 && (
                    <p className="color-price">+{formatPrice(color.price)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interior Colors */}
          <div className="option-section">
            <h2>INTERIOR COLOR</h2>
            <div className="color-grid">
              {car.interiorColors.map(color => (
                <div
                  key={color.id}
                  className={`color-option ${selectedInterior.id === color.id ? 'selected' : ''}`}
                  onClick={() => setSelectedInterior(color)}
                >
                  <div 
                    className="color-circle" 
                    style={{ backgroundColor: color.code }}
                  ></div>
                  <p className="color-name">{color.name}</p>
                  {color.price > 0 && (
                    <p className="color-price">+{formatPrice(color.price)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Wheels */}
          <div className="option-section">
            <h2>WHEELS</h2>
            <div className="wheels-grid">
              {car.wheels.map(wheel => (
                <div
                  key={wheel.id}
                  className={`wheel-option ${selectedWheels.id === wheel.id ? 'selected' : ''}`}
                  onClick={() => setSelectedWheels(wheel)}
                >
                  <div className="wheel-icon">⚙️</div>
                  <p className="wheel-name">{wheel.name}</p>
                  {wheel.price > 0 && (
                    <p className="wheel-price">+{formatPrice(wheel.price)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="option-section">
            <h2>PACKAGES & FEATURES</h2>
            <div className="packages-grid">
              {car.packages.map(pkg => (
                <div
                  key={pkg.id}
                  className={`package-option ${selectedPackages.find(p => p.id === pkg.id) ? 'selected' : ''}`}
                  onClick={() => togglePackage(pkg)}
                >
                  <div className="package-check">
                    {selectedPackages.find(p => p.id === pkg.id) ? '✓' : '+'}
                  </div>
                  <div className="package-info">
                    <h3>{pkg.name}</h3>
                    <p className="package-desc">{pkg.description}</p>
                    <p className="package-price">+{formatPrice(pkg.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="config-actions" id="summary">
            <button className="action-btn primary">REQUEST QUOTE</button>
            <button className="action-btn secondary">SAVE CONFIGURATION</button>
            <Link to={`/model/${modelId}`}>
              <button className="action-btn tertiary">← BACK TO MODEL</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configurator;