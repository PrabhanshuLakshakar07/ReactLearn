import React, { useState } from 'react';

function MasterEventManager() {
  const [text, setText] = useState("");

  // 1. INPUT CHANGE (React ka onChange = HTML ka oninput)
  const handleChange = (e) => {
    setText(e.target.value);
    
    // Test Property: Synthetic vs Native Access
    console.log("React Object Name:", e.constructor.name); // SyntheticBaseEvent
    console.log("Asli Browser Event:", e.nativeEvent);      // InputEvent
  };

  // 2. FORM SUBMIT (Asynchronous & PreventDefault Test)
  const handleSubmit = (e) => {
    e.preventDefault(); // SPA page reload ko roka

    // Modern React Test: Event Pooling nahi hai, isliye setTimeout mein 'e.type' safe chalega!
    setTimeout(() => {
      console.log("Async Event Type Access Success:", e.type); // 'submit' print hoga safely
      alert(`Form Submitted with Text: ${text}`);
    }, 500);
  };

  // 3. PROPAGATION (Bubbling isolation testing)
  const handleParentCardClick = () => {
    console.log("❌ BUG: Parent Card Triggered! (Bubbling ki wajah se)");
  };

  const handleChildButtonClick = (e) => {
    // Is line ki wajah se event parent card tak bubble nahi kar payega
    e.stopPropagation(); 
    console.log("✅ SAFE: Only Child Button Clicked!");
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>⚡ Ultimate React Event Engine</h1>

      {/* Form Handler */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <input type="text" value={text} onChange={handleChange} placeholder="Type text..." />
        <button type="submit">Submit</button>
      </form>

      {/* Propagation Box */}
      <div 
        onClick={handleParentCardClick} 
        style={{ padding: '20px', backgroundColor: '#f4f4f4', border: '1px solid #ccc', cursor: 'pointer' }}
      >
        <h3>Parent Project Card (Click Me)</h3>
        
        <button 
          onClick={handleChildButtonClick} 
          style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '10px' }}
        >
          Child Action Button (Isolated)
        </button>
      </div>
    </div>
  );
}

export default MasterEventManager;