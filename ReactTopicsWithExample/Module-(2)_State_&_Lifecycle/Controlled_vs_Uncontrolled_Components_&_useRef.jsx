import React, { useState, useRef } from 'react';

function FormEngine() {
  // 1. CONTROLLED WAY: State continuously tracks input
  const [controlledText, setControlledText] = useState("");

  // 2. UNCONTROLLED WAY: Reference to DOM node directly
  // Shuruat mein yeh null hai, baad mein input tag ka address hold karega
  const uncontrolledInputRef = useRef(null); 

  // Controlled Submit
  const handleControlledSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Data (From State): ${controlledText}`);
  };

  // Uncontrolled Submit
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    // uncontrolledInputRef.current ka matlab hai asli HTML <input> tag
    // .value se humne bina state ke direct browser DOM se value nikal li
    const finalValue = uncontrolledInputRef.current.value;
    alert(`Uncontrolled Data (Direct DOM): ${finalValue}`);
  };

  // Tracking Component Render
  console.log("🔄 Component Rendered! (Controlled text type karne par yeh baar-baar chalega)");

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', display: 'flex', gap: '40px' }}>
      
      {/* BOX 1: CONTROLLED FORM */}
      <div style={{ border: '1px solid blue', padding: '20px', borderRadius: '8px' }}>
        <h3>🔵 Controlled Form</h3>
        <form onSubmit={handleControlledSubmit}>
          <input 
            type="text" 
            value={controlledText} 
            onChange={(e) => setControlledText(e.target.value)} 
            placeholder="Type and see console log..."
          />
          <button type="submit">Submit</button>
        </form>
        <p>Live State Value: <strong style={{ color: 'blue' }}>{controlledText}</strong></p>
      </div>

      {/* BOX 2: UNCONTROLLED FORM */}
      <div style={{ border: '1px solid green', padding: '20px', borderRadius: '8px' }}>
        <h3>🟢 Uncontrolled Form (`useRef`)</h3>
        <form onSubmit={handleUncontrolledSubmit}>
          {/* ref={uncontrolledInputRef} lagane se React is input ka direct remote control 'useRef' ko de deta hai */}
          <input 
            type="text" 
            ref={uncontrolledInputRef} 
            placeholder="Type freely (0 re-renders)..."
          />
          <button type="submit">Submit</button>
        </form>
        <p style={{ color: 'gray', fontSize: '12px' }}>*Check console: typing here won't trigger re-renders!</p>
      </div>

    </div>
  );
}

export default FormEngine;