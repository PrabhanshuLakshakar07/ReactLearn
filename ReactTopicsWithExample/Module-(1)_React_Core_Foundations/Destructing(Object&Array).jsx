// Bina destructuring ke (Under the hood):
const countStateArray = useState(0); // [0, function]
const count = countStateArray[0];
const setCount = countStateArray[1];

// Destructuring ke sath (Ek line mein saaf):
const [count, setCount] = useState(0); 
// Hum variables ka naam 'count' aur 'setCount' isliye rakh paaye kyunki array destructuring mein naam hamari marzi ka hota hai!

//Agar JavaScript mein Array Destructuring naam ka feature na hota,
//  toh aapko React mein yahi ek line likhne ke liye 3 lines ka ganda code likhna padta.
// 💻 Yeh Kaam Kaise Karta Hai? (Working Example)
// Maan lo hum apne Dashboard par ek "Like Button" bana rahe hain. Jab user click kare, toh count badhna chahiye.

import React, { useState } from 'react';

function LikeButton() {
  // 1. State initialize ki 0 se
  const [count, setCount] = useState(0);

  function handleClick() {
    // count = count + 1; // ❌ GALAT! React page update nahi karega.
    
    setCount(count + 1);  //  SAHI! Isse value bhi badlegi aur React page ko refresh (re-render) bhi kar dega.
  }

  return (
    <div>
      <p>Total Likes: {count}</p>
      <button onClick={handleClick}>Like 👍</button>
    </div>
  );
}