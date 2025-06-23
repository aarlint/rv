import React, { useState, useEffect, useMemo } from 'react';
import { 
  FaHome, 
  FaWater, 
  FaBatteryFull, 
  FaThermometerHalf, 
  FaTrash, 
  FaTools, 
  FaExclamationTriangle,
  FaCheckCircle,
  FaPlay,
  FaShower,
  FaUtensils,
  FaBed,
  FaLightbulb,
  FaFan,
  FaSnowflake,
  FaBars,
  FaTimes,
  FaSuitcase
} from 'react-icons/fa';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = useMemo(() => [
    { id: 'what-to-bring', label: 'What to Bring', icon: <FaSuitcase /> },
    { id: 'quick-start', label: 'Quick Start', icon: <FaHome /> },
    { id: 'power-systems', label: 'Power Systems', icon: <FaBatteryFull /> },
    { id: 'water-waste-systems', label: 'Water & Waste', icon: <FaWater /> },
    { id: 'climate-control', label: 'Climate Control', icon: <FaThermometerHalf /> },
    { id: 'kitchen-living', label: 'Kitchen & Living', icon: <FaUtensils /> },
    { id: 'maintenance', label: 'Maintenance', icon: <FaTools /> },
    { id: 'departure', label: 'Departure', icon: <FaCheckCircle /> },
    { id: 'faq', label: 'FAQ', icon: <FaExclamationTriangle /> }
  ], []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the navigation height
      const nav = document.querySelector('.nav');
      const navHeight = nav ? nav.offsetHeight : 0;
      
      // Calculate the exact position to scroll to
      const elementTop = element.offsetTop;
      const scrollPosition = elementTop - navHeight;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const nav = document.querySelector('.nav');
      const navHeight = nav ? nav.offsetHeight : 0;
      const scrollPosition = window.scrollY + navHeight + 50; // Add some buffer

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <div className="nav-brand">
            <FaHome />
            <span>RV Instructions</span>
          </div>
          
          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Montana Adventure</h1>
          <p>RV Rental Instructions: guide for using, cleaning, and troubleshooting your trailer</p>
        </div>
      </header>

      {/* What to Bring */}
      <section id="what-to-bring" className="section">
        <div className="container">
          <h2 className="section-title">What to Bring</h2>
          <p className="section-subtitle">
            Essential items to pack and things that are already provided
          </p>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">
                <FaCheckCircle /> What You SHOULD Bring
              </h3>
              <div className="card-content">
                <h4>Food & Beverages:</h4>
                <ul>
                  <li>Keurig coffee capsules (if you like coffee)</li>
                  <li>All your food and snacks</li>
                  <li>Beverages and drinks</li>
                  <li>Cooking ingredients and spices</li>
                </ul>

                <h4>Personal Items:</h4>
                <ul>
                  <li>Clothes and personal items</li>
                  <li>Toiletries (shampoo, soap, toothpaste, etc.)</li>
                  <li>Towels and washcloths</li>
                  <li>Personal medications</li>
                </ul>

                <h4>Outdoor & Safety:</h4>
                <ul>
                  <li>Bug spray and sunscreen</li>
                  <li>First aid kit</li>
                  <li>Flashlight or headlamp</li>
                  <li>Weather-appropriate clothing</li>
                </ul>

                <h4>Entertainment:</h4>
                <ul>
                  <li>Books, games, or other entertainment</li>
                  <li>Chargers for your devices</li>
                  <li>Camera or phone for photos</li>
                </ul>

                <h4>Optional but Recommended:</h4>
                <ul>
                  <li>Sleeping bag (for colder weather)</li>
                  <li>Cooler for additional food storage</li>
                  <li>Portable speaker for music</li>
                  <li>Hiking gear if planning outdoor activities</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaExclamationTriangle /> What You SHOULDN'T Bring
              </h3>
              <div className="card-content">
                <h4>Kitchen Items (Already Provided):</h4>
                <ul>
                  <li>Plates, bowls, and cups</li>
                  <li>Silverware and utensils</li>
                  <li>Cooking pans and pots</li>
                  <li>Dish soap and cleaning supplies</li>
                  <li>Paper towels and napkins</li>
                </ul>

                <h4>Bathroom Items (Already Provided):</h4>
                <ul>
                  <li>Toilet paper (RV-specific)</li>
                  <li>Hand soap</li>
                  <li>Shower curtain</li>
                </ul>

                <h4>Bedding (Already Provided):</h4>
                <ul>
                  <li>Pillows and pillowcases</li>
                  <li>Sheets and blankets</li>
                  <li>Bedding for all sleeping areas</li>
                </ul>

                <h4>Other Provided Items:</h4>
                <ul>
                  <li>Fire extinguisher</li>
                  <li>Basic tools</li>
                  <li>Leveling blocks</li>
                  <li>Water hoses and adapters</li>
                  <li>Electrical cords and adapters</li>
                  <li>Camping chairs for outdoor seating</li>
                  <li>Extra blankets</li>
                </ul>

                <div className="tip">
                  <strong>Tip:</strong> If you're unsure about whether something is provided, feel free to ask before your trip!
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaSuitcase /> Packing Tips
              </h3>
              <div className="card-content">
                <h4>Space Considerations:</h4>
                <ul>
                  <li>Pack efficiently - storage space is limited</li>
                  <li>Use soft-sided luggage when possible</li>
                  <li>Bring collapsible items (chairs, coolers)</li>
                  <li>Consider the weather forecast</li>
                </ul>

                <h4>Organization:</h4>
                <ul>
                  <li>Pack similar items together</li>
                  <li>Use packing cubes or organizers</li>
                  <li>Keep frequently used items easily accessible</li>
                  <li>Label containers if bringing multiple</li>
                </ul>

                <h4>Seasonal Considerations:</h4>
                <ul>
                  <li><strong>Summer:</strong> Light clothing, swimsuits, hats, extra water</li>
                  <li><strong>Fall/Spring:</strong> Layers, rain gear, warm clothing</li>
                  <li><strong>Winter:</strong> Heavy coats, gloves, warm boots, extra blankets</li>
                </ul>

                <div className="important">
                  <strong>Remember:</strong> The RV has limited storage, so pack thoughtfully and avoid overpacking!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section id="quick-start" className="section">
        <div className="container">
          <h2 className="section-title">Quick Start Guide</h2>
          <p className="section-subtitle">
            Essential information to get you started with your RV rental
          </p>
          
          <div className="grid">
            <div className="card">
              <h3 className="card-title">
                <FaHome /> Arrival & Setup
              </h3>
              <div className="card-content">
                <ol className="step-list">
                  <li>Park on level ground and engage parking brake</li>
                  <li>Chock the wheels for safety</li>
                  <li>Connect to power source (if available)</li>
                  <li>Open propane tank valve</li>
                  <li>Check all systems are functioning</li>
                </ol>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaExclamationTriangle /> Safety First
              </h3>
              <div className="card-content">
                <div className="important">
                  <strong>Important:</strong> Always ensure proper ventilation when using propane appliances.
                </div>
                <ul>
                  <li>Never leave propane appliances unattended</li>
                  <li>Keep fire extinguisher accessible</li>
                  <li>Check smoke and CO detectors</li>
                  <li>Know emergency exit locations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water & Waste Systems */}
      <section id="water-waste-systems" className="section">
        <div className="container">
          <h2 className="section-title">Water & Waste Systems</h2>
          <p className="section-subtitle">
            How to use and maintain the fresh water, gray water, and black water systems
          </p>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">
                <FaWater /> Fresh Water System
              </h3>
              <div className="card-content">
                <ol className="step-list">
                  <li>Fill fresh water tank (if not connected to city water)</li>
                  <li>Turn on water pump switch</li>
                  <li>Open faucets to purge air from lines</li>
                  <li>Check for leaks at all connections</li>
                </ol>
                <div className="tip">
                  <strong>Tip:</strong> Always use potable water hoses and keep them clean.
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaShower /> Shower & Sink Usage
              </h3>
              <div className="card-content">
                <p>Use water sparingly - tanks have limited capacity.</p>
                <ul>
                  <li>Turn off water while soaping up</li>
                  <li>Use biodegradable soaps</li>
                  <li>Don't flush anything except toilet paper</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaTrash /> Gray Water (Sink/Shower)
              </h3>
              <div className="card-content">
                <ol className="step-list">
                  <li>Monitor gray water tank level</li>
                  <li>Use biodegradable soaps and cleaners</li>
                  <li>Dump at designated dump stations only</li>
                  <li>Rinse tank after dumping</li>
                </ol>
                <div className="warning">
                  <strong>Warning:</strong> Never dump gray water on the ground or in unauthorized locations.
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaTrash /> Black Water (Toilet)
              </h3>
              <div className="card-content">
                <ol className="step-list">
                  <li>Use RV-specific toilet paper only</li>
                  <li>Add appropriate chemicals to tank</li>
                  <li>Monitor tank level indicator</li>
                  <li>Dump at designated stations only</li>
                  <li>Thoroughly rinse after dumping</li>
                </ol>
                <div className="important">
                  <strong>Important:</strong> Never flush anything except RV toilet paper and human waste.
                </div>
              </div>
            </div>
          </div>

          <div className="video-placeholder">
            <FaPlay size={48} />
            <h3>Water & Waste System Setup Video</h3>
            <p>Complete guide to water system setup, usage, and proper waste tank dumping</p>
          </div>
        </div>
      </section>

      {/* Power Systems */}
      <section id="power-systems" className="section">
        <div className="container">
          <h2 className="section-title">Power Systems</h2>
          <p className="section-subtitle">
            Understanding your RV's power capabilities and limitations
          </p>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">
                <FaBatteryFull /> Battery & Solar System
              </h3>
              <div className="card-content">
                <h4>System Overview:</h4>
                <ul>
                  <li><strong>3800Wh Lithium Battery:</strong> Powers essential systems for ~3 days without charging</li>
                  <li><strong>200W Solar Panel:</strong> Provides continuous charging in sunlight</li>
                  <li><strong>Indefinite Operation:</strong> Fridge and lights can run continuously with solar charging</li>
                </ul>
                
                <h4>Battery-Powered Appliances:</h4>
                <ul>
                  <li>Refrigerator</li>
                  <li>Water heater ignition</li>
                  <li>All lights (LED)</li>
                  <li>Water pump</li>
                  <li>Charger/inverter</li>
                </ul>
                
                <div className="tip">
                  <strong>Great News:</strong> With the 200W solar panel, the refrigerator and lights can run indefinitely when there's sunlight!
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaLightbulb /> Shore Power Requirements
              </h3>
              <div className="card-content">
                <h4>Appliances that require shore power (plugged in):</h4>
                <ul>
                  <li>Microwave</li>
                  <li>Electric heater</li>
                  <li>Air conditioning (A/C)</li>
                  <li>Wall outlets</li>
                </ul>
                
                <h4>Power Management Tips:</h4>
                <ul>
                  <li>Turn off unnecessary lights when not in use</li>
                  <li>Use LED lights to conserve power</li>
                  <li>Monitor battery voltage regularly</li>
                  <li>Don't overload electrical circuits</li>
                </ul>
                
                <div className="warning">
                  <strong>Warning:</strong> Avoid letting batteries discharge completely.
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaTools /> Generator & Backup Power
              </h3>
              <div className="card-content">
                <h4>4000W Generator (Available on Request):</h4>
                <ul>
                  <li>Provides shore power equivalent when not plugged in</li>
                  <li>Runs for approximately 12 hours on a full tank</li>
                  <li>Can power all appliances including A/C and microwave</li>
                  <li>Perfect for boondocking or power outages</li>
                </ul>
                
                <div className="tip">
                  <strong>Tip:</strong> Request the generator when booking if you plan to use high-power appliances or camp without shore power.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Control */}
      <section id="climate-control" className="section">
        <div className="container">
          <h2 className="section-title">Climate Control</h2>
          <p className="section-subtitle">
            Heating, cooling, and ventilation systems
          </p>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">
                <FaThermometerHalf /> Heating System
              </h3>
              <div className="card-content">
                <ol className="step-list">
                  <li>Ensure propane tank has sufficient fuel</li>
                  <li>Turn on furnace switch</li>
                  <li>Set thermostat to desired temperature</li>
                  <li>Check that vents are open and unobstructed</li>
                </ol>
                <div className="tip">
                  <strong>Tip:</strong> Use ceiling vents for better heat distribution.
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaFan /> Ventilation
              </h3>
              <div className="card-content">
                <ul>
                  <li>Open roof vents for air circulation</li>
                  <li>Use ceiling fan to distribute air</li>
                  <li>Open windows when weather permits</li>
                  <li>Close vents when using AC or heat</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaSnowflake /> Air Conditioning
              </h3>
              <div className="card-content">
                <ol className="step-list">
                  <li>Ensure you're connected to shore power</li>
                  <li>Turn on AC unit</li>
                  <li>Set temperature and fan speed</li>
                  <li>Close all windows and vents</li>
                </ol>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaThermometerHalf /> Backup Heating Options
              </h3>
              <div className="card-content">
                <h4>Portable Propane Heater:</h4>
                <ul>
                  <li>Indoor-safe portable heater included</li>
                  <li>Uses standard camping propane tanks</li>
                  <li>Ideal for quiet heating at night in RV parks</li>
                  <li>Backup option when generator can't be used</li>
                </ul>
                
                <div className="tip">
                  <strong>Tip:</strong> Use the portable heater for quiet operation when the main furnace might disturb others.
                </div>
              </div>
            </div>
          </div>

          <div className="video-placeholder">
            <FaPlay size={48} />
            <h3>Climate Control Operation Video</h3>
            <p>Complete guide to operating heating and cooling systems</p>
          </div>
        </div>
      </section>

      {/* Kitchen & Living Areas */}
      <section id="kitchen-living" className="section">
        <div className="container">
          <h2 className="section-title">Kitchen & Living Areas</h2>
          <p className="section-subtitle">
            Using the kitchen appliances and setting up living spaces
          </p>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">
                <FaUtensils /> Kitchen Appliances
              </h3>
              <div className="card-content">
                <h4>Stove & Oven:</h4>
                <ol className="step-list">
                  <li>Ensure propane is turned on</li>
                  <li>Light burners with lighter or match</li>
                  <li>Adjust flame to appropriate size</li>
                  <li>Turn off propane when finished</li>
                </ol>
                
                <h4>Refrigerator:</h4>
                <ol className="step-list">
                  <li>Turn on refrigerator 24 hours before use</li>
                  <li>Set temperature to 35-40°F</li>
                  <li>Keep door closed as much as possible</li>
                  <li>Clean spills immediately</li>
                </ol>
                
                <div className="important">
                  <strong>Important:</strong> Always supervise cooking and keep flammable items away from the stove.
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaBed /> Sleeping & Living Space
              </h3>
              <div className="card-content">
                <h4>Bed Setup:</h4>
                <ol className="step-list">
                  <li>Convert dinette to bed (if applicable)</li>
                  <li>Set up bedding and pillows</li>
                  <li>Ensure proper ventilation</li>
                  <li>Secure loose items before travel</li>
                </ol>
                
                <h4>Living Space Management:</h4>
                <ul>
                  <li>Keep walkways clear</li>
                  <li>Secure items during travel</li>
                  <li>Use storage compartments efficiently</li>
                  <li>Maintain clean and organized space</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Troubleshooting */}
      <section id="maintenance" className="section">
        <div className="container">
          <h2 className="section-title">Maintenance & Care</h2>
          <p className="section-subtitle">
            Daily maintenance tasks to keep your RV running smoothly
          </p>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">
                <FaTools /> Daily Maintenance
              </h3>
              <div className="card-content">
                <h4>Morning Checks:</h4>
                <ul>
                  <li>Check propane levels</li>
                  <li>Monitor battery voltage</li>
                  <li>Inspect for water leaks</li>
                  <li>Test smoke and CO detectors</li>
                  <li>Check tire pressure</li>
                </ul>
                
                <h4>Evening Tasks:</h4>
                <ul>
                  <li>Secure loose items</li>
                  <li>Close windows and vents if needed</li>
                  <li>Turn off unnecessary lights</li>
                  <li>Check that appliances are properly shut off</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaWater /> Water System Care
              </h3>
              <div className="card-content">
                <h4>Regular Maintenance:</h4>
                <ul>
                  <li>Monitor tank levels daily</li>
                  <li>Use biodegradable soaps and cleaners</li>
                  <li>Keep water hoses clean and stored properly</li>
                  <li>Check for leaks around connections</li>
                  <li>Winterize if temperatures drop below freezing</li>
                </ul>
                
                <div className="tip">
                  <strong>Tip:</strong> Regular maintenance prevents costly repairs and ensures a comfortable stay.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departure Checklist */}
      <section id="departure" className="section">
        <div className="container">
          <h2 className="section-title">Departure Checklist</h2>
          <p className="section-subtitle">
            Essential steps to take before returning the RV
          </p>

          <div className="card">
            <h3 className="card-title">
              <FaCheckCircle /> Pre-Departure Tasks
            </h3>
            <div className="card-content">
              <ol className="step-list">
                <li>Empty and clean all waste tanks (sometimes the black tank reads 3/4 full, but it's actually empty)</li>
                <li>Clean interior thoroughly</li>
                <li>Remove all personal belongings</li>
                <li>Turn off all appliances and lights, including the water pump</li>
                <li>Close all windows and vents</li>
                <li>Secure all loose items and collapse the table</li>
                <li>Return to original parking location (if applicable)</li>
                <li>Complete final inspection</li>
              </ol>
              <div className="tip">
                <strong>Tip:</strong> Take photos of the clean interior for your records.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions and troubleshooting
          </p>

          <div className="grid">
            <div className="card">
              <h3 className="card-title">
                <FaExclamationTriangle /> Quick Troubleshooting
              </h3>
              <div className="card-content">
                <h4>Common Issues & Solutions:</h4>
                <ul>
                  <li><strong>No Power:</strong> Check battery connections and fuses</li>
                  <li><strong>No Water:</strong> Check pump switch and tank levels</li>
                  <li><strong>Furnace Won't Start:</strong> Check propane and thermostat</li>
                  <li><strong>Refrigerator Not Cooling:</strong> Check power source and ventilation</li>
                  <li><strong>Leaks:</strong> Tighten connections and check seals</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaWater /> Water & Plumbing Quick Tips
              </h3>
              <div className="card-content">
                <h4>Water Usage:</h4>
                <p>Water typically lasts 2-3 days for 2 people with careful usage. Monitor tank levels and conserve water.</p>
                
                <h4>If You Run Out of Water:</h4>
                <p>Locate the nearest potable water source or campground with water hookups. Never use non-potable water sources.</p>
                
                <h4>Tank Monitoring:</h4>
                <p>Use tank level indicators on the control panel. Gray water fills faster than black water.</p>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaThermometerHalf /> Climate Control Tips
              </h3>
              <div className="card-content">
                <h4>Heating Without Shore Power:</h4>
                <p>Use the propane furnace. Ensure propane tank is full and thermostat is set correctly.</p>
                
                <h4>Quiet Heating at Night:</h4>
                <p>Use the included portable propane heater for quiet operation in RV parks.</p>
                
                <h4>Ventilation Best Practices:</h4>
                <p>Open roof vents and windows when weather permits. Use ceiling fan to circulate air.</p>
                
                <h4>Need A/C Without Shore Power?</h4>
                <p>Request the 4000W generator when booking. It provides shore power equivalent for all appliances.</p>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">
                <FaExclamationTriangle /> Emergency Procedures
              </h3>
              <div className="card-content">
                <h4>Propane Leak:</h4>
                <p>Immediately turn off all propane appliances, open windows, and check for leaks. Contact owner if problem persists.</p>
                
                <h4>Electrical Issues:</h4>
                <p>Locate the electrical panel and reset any tripped breakers. Don't overload circuits.</p>
                
                <h4>Water Leaks:</h4>
                <p>Turn off water pump immediately, locate source, and contact owner for assistance.</p>
                
                <h4>Battery Issues:</h4>
                <p>Check connections and voltage. If completely dead, contact owner for jump start assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 RV Rental Instructions - rv.arlint.dev</p>
          <p>For emergencies or questions, contact the rental owner immediately.</p>
          <p><strong>Owner Contact:</strong></p>
          <p>Austin Arlint</p>
          <p>Phone: <a href="tel:4062186028">(406) 218-6028</a></p>
          <p>Address: 12123 O'Keefe Creek Blvd, Missoula, MT 59808</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 