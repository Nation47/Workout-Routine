import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-text">
          <h1>
            Push Your Limits, <br /> Reach Your <span>Peak</span>
          </h1>
          <p>
            Track workouts, crush goals, and stay motivated with <strong>FitTrack</strong>. 
            Your journey to a stronger, healthier you starts here.
          </p>
          
          <div className="hero-buttons">
            <Link to="/signup" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-secondary">Sign In</Link>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            alt="Workout"
          />
        </div>
      </div>
    </section>
  );
}
