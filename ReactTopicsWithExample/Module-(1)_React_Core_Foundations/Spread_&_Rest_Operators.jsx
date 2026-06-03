              

              /////Spread Operator///////////////


// --- ARRAYS KE SATH ---
const oldTasks = ["Fix Login", "Design UI"];

// ❌ GALAT (Direct Mutation): Isse purana array hi badal jata hai
// oldTasks.push("Setup Database"); 

//  SAHI (Spread): Purane elements nikale aur naye array mein daal diye
const newTasks = [...oldTasks, "Setup Database"]; 
console.log(oldTasks); // ["Fix Login", "Design UI"] (Purana safe raha!)
console.log(newTasks); // ["Fix Login", "Design UI", "Setup Database"] (Naya taiyar)


// --- OBJECTS KE SATH ---
const user = { name: "Rohan", role: "Developer" };

// Naya object banaya, user ki saari properties copy ki aur 'role' ko override (update) kiya
const updatedUser = { ...user, role: "Senior Engineer", location: "Mumbai" };
console.log(updatedUser); 
// Output: { name: 'Rohan', role: 'Senior Engineer', location: 'Mumbai' }

                /////Rest Operator///////////////
                // Pattern 1: Destructuring ke sath sametna
const project = {
  title: "E-Commerce App",
  duration: "3 Months",
  status: "Active",
  manager: "Amit"
};

// title aur duration ko alag kiya, baki sabko 'metaData' naam ke object mein samet diya
const { title, duration, ...metaData } = project;

console.log(title);    // Output: E-Commerce App
console.log(metaData); // Output: { status: 'Active', manager: 'Amit' }


// Pattern 2: Functions ke sath (Rest Parameters)
// Jab hume nahi pata ki function mein kitne arguments aane wale hain
function sumAllTasks(...taskHours) {
  // taskHours ab ek array ban chuka hai: [2, 4, 1, 5]
  return taskHours.reduce((total, current) => total + current, 0);
}
console.log(sumAllTasks(2, 4, 1, 5)); // Output: 12