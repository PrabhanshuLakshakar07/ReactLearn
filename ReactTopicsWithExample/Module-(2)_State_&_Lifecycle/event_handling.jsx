import React, { useState } from 'react';

function TaskForm() {
  const [taskName, setTaskName] = useState("");

  // 1. INPUT CHANGE HANDLER
  const handleInputChange = (event) => {
    // event.target.value se hume input mein type kiya hua latest text milta hai
    setTaskName(event.target.value);
  };

  // 2. FORM SUBMIT HANDLER
  const handleFormSubmit = (event) => {
    // ⚠️ Sabsé Zaroori Line: Browser ko page refresh karne se rokna
    event.preventDefault(); 
    
    if (taskName.trim() === "") {
      alert("Task name cannot be empty!");
      return;
    }

    alert(`New Task Created: ${taskName}`);
    setTaskName(""); // Form clear kar diya submit ke baad
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #333', width: '350px', borderRadius: '8px' }}>
      <h3>📝 Create New Task</h3>
      
      {/* Form submit event handle kiya */}
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          placeholder="Enter task title..." 
          value={taskName}
          onChange={handleInputChange} // Input type event handle kiya
          style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
        />
        
        <button 
          type="submit" 
          style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;