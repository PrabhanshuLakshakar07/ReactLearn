import React, { useState, useEffect } from 'react';

function EffectEngine() {
  const [projectId, setProjectId] = useState(1);
  const [projectData, setProjectData] = useState(null);
  const [seconds, setSeconds] = useState(0);

  // 🧪 CASE 1: Empty Array [] -> Component Mount par chalega
  useEffect(() => {
    console.log("🚀 App Loaded Initialized! (Sirf Ek Baar)");
  }, []);

  // 🧪 CASE 2: Dependency Array [projectId] -> Jab-Jab ID badlegi, data fetch hoga
  useEffect(() => {
    console.log(`📡 Fetching data for Project ID: ${projectId}`);
    
    // Fake API Fetch Call Simulation
    setProjectData(`Project Details for Room ${projectId} fetched at ${new Date().toLocaleTimeString()}`);
    
  }, [projectId]); // Trigger point

  // 🧪 CASE 3: Cleanup Function Example (Timer)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Safeguard: Agar user component se bahar jaye, toh background timer band karo
    return () => {
      clearInterval(interval);
      console.log("🧹 Cleanup Done: Timer destroyed!");
    };
  }, []); // Empty array matlab timer ek hi baar set hoga

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>⏳ Live React Lifecycle Engine</h1>
      <p>Time Spent on Page: <strong>{seconds} seconds</strong></p>
      
      <hr />
      
      <h3>Current Project ID: {projectId}</h3>
      <p style={{ backgroundColor: '#eee', padding: '10px' }}>{projectData}</p>
      
      <button onClick={() => setProjectId(prev => prev + 1)}>
        Switch to Next Project (Trigger Update)
      </button>
    </div>
  );
}

export default EffectEngine;