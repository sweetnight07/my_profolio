import React from 'react';
import './background.css'
const NUM_STARS = 200;
const NUM_METEORS = 15;

const generateStars = () => {
  return Array.from({ length: NUM_STARS }, (_, i) => (
    <div
      key={`star-${i}`}
      className="star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ));
};

const generateMeteors = () => {
  return Array.from({ length: NUM_METEORS }, (_, i) => (
    <div
      key={`meteor-${i}`}
      className={`meteor meteor-${i + 1}`}
      style={{
        left: `${Math.random() * 90 + 9}%`,
        top: `${Math.random() * 250 + 50}px`,
        animationDuration: `${Math.random() * 7 + 3}s`,
      }}
    />
  ));
};

const Background: React.FC = () => {
  return (
    <div className="background">
      {generateStars()}
      {generateMeteors()}
    </div>
  );
};

export default Background;