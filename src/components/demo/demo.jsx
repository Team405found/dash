import React from 'react';
import { Link } from 'react-router-dom';
import './demo.css';
import './CO2_graph.css';
import './global_temp.css';
import './sea_level.css';
import './sea_ice.css';
import './ice_sheets.css';

// Import custom images
import CO2Image from './resources/icons/carbon_emissions.jpg';
import TempImage from './resources/icons/average_global_temp.jpg';
import SeaLevelImage from './resources/icons/sea_level.jpg';
import SeaIceImage from './resources/icons/sea_ice.jpg';
import IceSheetsImage from './resources/icons/ice-sheets.jpg';
import OceanWarmingImage from './resources/icons/ocean-warming.jpg';

const Demo = () => {
  // Sample data for segments with images
  const segments = [
    { title: 'CO2 Map', image: CO2Image, link: '/CO2_graph' },
    { title: 'Global Temperature', image: TempImage, link: '/global_temp' },
    { title: 'Sea Level', image: SeaLevelImage, link: '/sea_level' },
    { title: 'Sea Ice', image: SeaIceImage, link: '/sea_ice' },
    { title: 'Ice Sheets', image: IceSheetsImage, link: '/ice_sheets' },
    { title: 'Ocean Warming', image: OceanWarmingImage, link: '/ocean_warming' },
  ];

  return (
    <div className="segment-container">
      <h1 className="header">Select a topic</h1>
      <div className="segment-grid">
        {segments.map((segment, index) => (
          <Link to={segment.link} key={index} className="segment">
            <div className="icon">
              <img src={segment.image} alt={segment.title} />
            </div>
            <p className="segment-title">{segment.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Demo;
