// React background mein JSX ko is tarah se evaluate karta hai:

// 1. DYNAMIC DATA
const currentProject = "Task Core Engine";
const pendingTasksCount = 3;
const isUrgent = true;

// 2. JSX WRITING STYLE (Jo hum React component ke return mein likhte hain)
/*
const TaskDashboardUI = (
  <div className="dashboard-card">
    <h2>Project: {currentProject}</h2>
    <p>Pending Tasks: {pendingTasksCount}</p>
    <span style={{ color: isUrgent ? 'red' : 'green' }}>
      {isUrgent ? "⚠️ Critical Alert" : "✅ All Good"}
    </span>
    <br />
    <input type="text" placeholder="Add custom tag..." />
  </div>
);
*/

// 3. UNDER THE HOOD (Babel translation that actually runs in JS engine)
const TaskDashboardUI_Compiled = React.createElement(
  "div",
  { className: "dashboard-card" },
  
  React.createElement("h2", null, `Project: ${currentProject}`),
  
  React.createElement("p", null, `Pending Tasks: ${pendingTasksCount}`),
  
  React.createElement(
    "span",
    { style: { color: isUrgent ? "red" : "green" } },
    isUrgent ? "⚠️ Critical Alert" : "✅ All Good"
  ),
  
  React.createElement("br", null),
  
  React.createElement("input", { type: "text", placeholder: "Add custom tag..." }) // Self-closing input
);

// Yeh compiled object hi Virtual DOM ka hissa banta hai!