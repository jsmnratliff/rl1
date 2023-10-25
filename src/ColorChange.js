import React, { useState } from 'react';

function ColorChange() {
  // Initialize the backgroundColor state with a default color
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Default: white

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generates a random hex color
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh', transition: 'background-color 0.5s' }}>
      <h1>Color Changing Component</h1>
      <button onClick={generateRandomColor}>Change Color</button>
    </div>
  );
}

export default ColorChange;