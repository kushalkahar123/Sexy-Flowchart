

import React from 'react';

function FlowchartNode({ data }) {
  return (
    <div 
      className="flowchart-node" // Adds a class for styling
      style={{ 
        position: 'absolute', 
        left: `${data.position.x}px`, 
        top: `${data.position.y}px`,
        border: '1px solid #ccc', // Example styling
        padding: '10px',
        backgroundColor: data.type === 'start' ? '#e0ffe0' : 'white' //Conditional color
      }}
    >
      <h3>{data.type.toUpperCase()}</h3> 
      <p>{data.content.text}</p> 
    </div>
  );
}

export default FlowchartNode;
