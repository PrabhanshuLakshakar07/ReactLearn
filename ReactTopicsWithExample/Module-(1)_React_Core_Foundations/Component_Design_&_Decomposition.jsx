import React from 'react';

// ==========================================
// 1. SUB-COMPONENT 1: TaskStats (Sirf numbers dikhayega)
// ==========================================
function TaskStats() {
  const completed = 5;
  const pending = 3;
  
  return (
    <div className="stats-container">
      <div>Completed: {completed}</div>
      <div>Pending: {pending}</div>
    </div>
  );
}

// ==========================================
// 2. SUB-COMPONENT 2: TaskRow (Ek single task ki row)
// ==========================================
function TaskRow() {
  const taskTitle = "Setup Authentication";
  const isDone = false;

  return (
    <div className="task-row">
      <span>{taskTitle}</span>
      <button>{isDone ? "Reopen" : "Complete"}</button>
    </div>
  );
}

// ==========================================
// 3. MAIN COMPONENT: ProjectDashboard (Sabko combine karega)
// ==========================================
function ProjectDashboard() {
  const projectName = "Alpha Engine";

  return (
    <div className="dashboard-layout">
      {/* Main Heading */}
      <h1>Project: {projectName}</h1>
      
      {/* Component 1 ko call kiya */}
      <TaskStats />
      
      <div className="task-list">
        <h3>Tasks</h3>
        {/* Component 2 ko baar-baar use kar sakte hain */}
        <TaskRow />
        <TaskRow />
        <TaskRow />
      </div>
    </div>
  );
}

export default ProjectDashboard;


// Practice Exercise

import React from 'react';

// =========================================================
// 1. SUB-COMPONENT: ProductHeader
// (Iska sirf ek kaam hai: Product ka naam aur rating dikhana)
// =========================================================
function ProductHeader() {
  const productName = "Sony WH-1000XM4 Headphones";
  const rating = "⭐ 4.8 (2,500 reviews)";

  return (
    <div className="product-header-section">
      <h1>{productName}</h1>
      <span className="product-rating">{rating}</span>
    </div>
  );
}

// =========================================================
// 2. SUB-COMPONENT: ProductAction
// (Iska kaam hai keemat aur khareedne ka button dikhana)
// =========================================================
function ProductAction() {
  const price = "₹24,990";

  return (
    <div className="product-action-section" style={{ marginTop: '15px' }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Price: {price}</p>
      <button 
        onClick={() => alert("Added to cart!")}
        style={{ padding: '10px 20px', backgroundColor: '#ff9900', border: 'none', cursor: 'pointer' }}
      >
        Buy Now
      </button>
    </div>
  );
}

// =========================================================
// 3. MAIN COMPONENT: ProductPage
// (Yeh parent component hai jo upar ke dono parts ko jodta hai)
// =========================================================
function ProductPage() {
  return (
    // Rule: React Fragment (<></>) ka use kiya as a single parent
    <>
      <div className="product-page-container" style={{ border: '1px solid #ccc', padding: '20px', width: '400px' }}>
        
        {/* Sub-component 1 ko call kiya */}
        <ProductHeader />
        
        {/* Ek simple line design ke liye */}
        <hr style={{ margin: '15px 0' }} />
        
        {/* Sub-component 2 ko call kiya */}
        <ProductAction />

      </div>
    </>
  );
}

export default ProductPage;