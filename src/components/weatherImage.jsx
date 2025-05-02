import React from 'react';

function WeatherImage({ src, alt }) {   //Receives image source and alt text.
  return (
    <img className="weather-image" src={src} alt={alt} />
  );
}

export default WeatherImage;