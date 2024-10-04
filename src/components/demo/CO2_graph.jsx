import React, { useState } from "react"; 

const CO2 = () => {
  const [sliderValue, setSliderValue] = useState(1);

  // Define the min and max values for the slider
  const minValue = 1;
  const maxValue = 87;

  // Handle slider change
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  // Get current month and year based on slider value
  return (
    <div>
      <div className="slider-container">
        <h1>
            CO2 Concentrations
        </h1>
        {/* Display Image */}
        <div className="image-box">
          <img
            src={require(`./resources/CO2-heat/co2_heatmap${sliderValue}.png`)} // dynamically load images
            alt={`image ${sliderValue}`}
            className="slider-image"
          />
        </div>

        {/* Display min and max values */}
        <div className="slider-values">
        <span className="year-label start-year">{2002}</span>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={sliderValue}
            onChange={handleSliderChange}
            className="slider-bar"
          />
          <span className="year-label end-year">{2022}</span>
        </div>
      </div>
    </div>
  );
};

export default CO2;
