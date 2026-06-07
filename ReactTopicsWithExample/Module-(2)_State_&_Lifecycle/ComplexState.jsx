import React, { useState } from 'react';

function ComplexStateManager() {
  // 1. COMPLEX OBJECT STATE: Form details handle karne ke liye
  const [projectForm, setProjectForm] = useState({
    name: "Beta Version",
    developer: "Rohan",
    isUrgent: false
  });

  // 2. COMPLEX ARRAY STATE: Tasks ki list render karne ke liye
  const [taskList, setTaskList] = useState([
    { id: 1, text: "Setup Router" },
    { id: 2, text: "Design UI Schema" }
  ]);

  // Object Update karne ka Sahi Tarika (Spread Operator)
  const toggleUrgency = () => {
    setProjectForm({
      ...projectForm,               // Name aur Developer same rahenge
      isUrgent: !projectForm.isUrgent // Sirf isUrgent flip ho jayega
    });
  };

  // Array Update (Add Item) karne ka Sahi Tarika (Immutability)
  const addNewTask = () => {
    const newTask = { id: Date.now(), text: "New API Integration" };
    
    // ❌ taskList.push(newTask) nahi kar sakte!
    setTaskList([...taskList, newTask]); // Purane tasks copy kiye, naya aakhiri mein joda
  };

  // Array Update (Delete Item) karne ka Sahi Tarika (Filter Method)
  const deleteTask = (idToDelete) => {
    // filter() ek naya array return karta hai, toh immutability safe hai
    const filteredTasks = taskList.filter(task => task.id !== idToDelete);
    setTaskList(filteredTasks);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', width: '400px' }}>
      <h2>📁 Project: {projectForm.name}</h2>
      <p>Developer: {projectForm.developer}</p>
      <p>Priority: {projectForm.isUrgent ? "🔴 High" : "⚪ Normal"}</p>
      <button onClick={toggleUrgency}>Toggle Priority</button>

      <hr />

      <h3>📝 Task List ({taskList.length})</h3>
      <ul>
        {taskList.map(task => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            {task.text}{' '}
            <button onClick={() => deleteTask(task.id)} style={{ color: 'red' }}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={addNewTask} style={{ backgroundColor: '#007bff', color: 'white' }}>
        + Add Demo Task
      </button>
    </div>
  );
}

export default ComplexStateManager;