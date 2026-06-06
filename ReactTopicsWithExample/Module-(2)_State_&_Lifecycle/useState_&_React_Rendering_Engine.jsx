import React, { useState } from 'react';

function TaskTracker() {
  // 1. Initialize state with 0
  const [totalTasks, setTotalTasks] = useState(0);
  
  // Normal Update (Junior Dev Style)
  const handleAddOne = () => {
    setTotalTasks(totalTasks + 1); 
  };

  // Functional Update (Senior Engineer Style)
  // Ek sath 3 tasks jodne hain safely bina batching bug ke
  const handleAddThreeBulk = () => {
    setTotalTasks(prevTasks => prevTasks + 1); // prevTasks agar 0 tha toh 1 hua
    setTotalTasks(prevTasks => prevTasks + 1); // 1 se badhkar 2 hua
    setTotalTasks(prevTasks => prevTasks + 1); // 2 se badhkar 3 hua
  };

  const handleReset = () => {
    setTotalTasks(0); // Directly resetting back to 0
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #222', borderRadius: '8px', width: '300px' }}>
      <h2>📊 Project Tracker</h2>
      <p style={{ fontSize: '18px' }}>Active Tasks: <strong>{totalTasks}</strong></p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={handleAddOne}>Add 1 Task</button>
        
        {/* Bulk Add Button using safe functional updates */}
        <button onClick={handleAddThreeBulk} style={{ backgroundColor: '#28a745', color: 'white' }}>
          Add 3 Tasks (Bulk Import)
        </button>
        
        <button onClick={handleReset} style={{ backgroundColor: '#dc3545', color: 'white' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TaskTracker;