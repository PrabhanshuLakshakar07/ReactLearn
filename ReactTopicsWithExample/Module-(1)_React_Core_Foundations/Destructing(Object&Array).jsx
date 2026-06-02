// Bina destructuring ke (Under the hood):
const countStateArray = useState(0); // [0, function]
const count = countStateArray[0];
const setCount = countStateArray[1];

// Destructuring ke sath (Ek line mein saaf):
const [count, setCount] = useState(0); 
// Hum variables ka naam 'count' aur 'setCount' isliye rakh paaye kyunki array destructuring mein naam hamari marzi ka hota hai!