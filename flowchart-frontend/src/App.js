import React, { useState, useEffect } from 'react';
import './App.css'; 
import FlowchartCanvas from './components/FlowchartCanvas'; // Import our base component 


function App() {
  const [flowchartData, setFlowChartData] = useState(null); 

  useEffect(() => {
    // ... your fetch logic that will eventually contact the backend
    const flowchartData = {
      id: 'sampleFlowchart1',
      title: 'My Project Flowchart', 
      nodes: [
        { id: 'node1', type: 'start', content: { text: 'Project Begins' }, position: { x: 100, y: 50 } },
        { id: 'node2', type: 'task', content: { text: 'Research Phase' }, position: { x: 250, y: 200 } },
        // .... more nodes
      ]
    };
    // For now, use the mock data directly:
    setFlowChartData(flowchartData); // Use the sample data defined above
  }, []);

}

export default App;
