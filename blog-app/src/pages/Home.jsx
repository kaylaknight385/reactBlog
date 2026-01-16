import React from 'react';
import { Link } from 'react-router-dom';

// homepage - first thing people see when they pull up
export function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Hey, welcome to my little corner of the internet </h1>
        <p className="hero-subtitle">
          Just a girl from atlanta talking about life, vibes, and whatever's on my mind
        </p>
        <Link to="/blog" className="cta-button">
          Check out the blog
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Real Talk</h3>
          <p>No filter, just honest thoughts about navigating your 20s in the city</p>
        </div>
        <div className="feature-card">
          <h3>Atlanta Things</h3>
          <p>The culture, the food, the traffic (ugh), all the atl vibes</p>
        </div>
        <div className="feature-card">
          <h3>Relatable Chaos</h3>
          <p>If you're also just trying to figure it out, you're in the right place</p>
        </div>
      </div>
    </div>
  );
}