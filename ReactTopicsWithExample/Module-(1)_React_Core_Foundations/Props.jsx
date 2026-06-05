import React from 'react';

// =========================================================
// 1. CHILD COMPONENT: UserBadge
// =========================================================
// Humne yahan directly object destructure kiya hai.
// 'role' ko humne default value de di "Guest". Agar parent se role nahi aaya, toh "Guest" chalega.
function UserBadge({ username, role = "Guest", isAdmin, onAlertClick }) {
  return (
    <div style={{
      border: '2px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '10px',
      backgroundColor: isAdmin ? '#fff0f0' : '#fff' // Agar admin hai toh thoda red background
    }}>
      <h3>User: {username}</h3>
      <p>Role: {role}</p>

      {/* CONDITIONAL RENDERING USING LOGICAL AND (&&) */}
      {/* Agar isAdmin true hoga, tabhi yeh span screen par dikhega, warna gayab rahega */}
      {isAdmin && (
        <span style={{ color: 'red', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
          🔴 Admin Access Granted
        </span>
      )}

      {/* FUNCTION AS A PROP */}
      {/* Parent ne ek function bheja hai, jab button click hoga toh parent ka function chalega */}
      <button onClick={() => onAlertClick(username)}>
        Ping User
      </button>
    </div>
  );
}

// =========================================================
// 2. MAIN PARENT COMPONENT: TeamDashboard
// =========================================================
function TeamDashboard() {
  
  // Yeh function Parent component mein bana hai, lekin ise chalayega Child button click par
  const handlePing = (name) => {
    alert(`Notification sent to ${name}!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>💻 Team Dashboard</h2>
      <hr />

      {/* Case 1: Saare props bheje (Normal Case) */}
      <UserBadge 
        username="Rohan Dev" 
        role="Lead Engineer" 
        isAdmin={true} 
        onAlertClick={handlePing} 
      />

      {/* Case 2: Role nahi bheja (Default Prop Test) */}
      {/* Isme role apne aap "Guest" ho jayega, aur isAdmin false hai toh badge nahi dikhega */}
      <UserBadge 
        username="Amit Kumar" 
        isAdmin={false} 
        onAlertClick={handlePing} 
      />

      {/* Case 3: Admin boolean shortform */}
      {/* React mein agar aap sirf 'isAdmin' likh kar chhod dete ho, toh uska matlab automatic 'true' hota hai */}
      <UserBadge 
        username="Suresh Admin" 
        role="Super Admin"
        isAdmin // This is same as isAdmin={true}
        onAlertClick={handlePing} 
      />
    </div>
  );
}

export default TeamDashboard;