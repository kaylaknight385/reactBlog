import React from 'react';
import { Link } from 'react-router-dom';

// homepage - first thing people see when they pull up
export function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>hey, welcome to my little corner of the internet </h1>
        <p className="hero-subtitle">
          just a girl from atlanta talking about life, vibes, and whatever's on my mind
        </p>
        <Link to="/blog" className="cta-button">
          check out the blog
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>real talk</h3>
          <p>no filter, just honest thoughts about navigating your 20s in the city</p>
        </div>
        <div className="feature-card">
          <h3>atlanta things</h3>
          <p>the culture, the food, the traffic (ugh), all the atl vibes</p>
        </div>
        <div className="feature-card">
          <h3>relatable chaos</h3>
          <p>if you're also just trying to figure it out, you're in the right place</p>
        </div>
      </div>
    </div>
  );
}