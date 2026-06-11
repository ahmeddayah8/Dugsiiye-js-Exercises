// exercise

const people = [
  { name: "Ahmed", age: 20, city: "mugadishu" },
  { name: "farah", age: 25, city: "barawe" },
  { name: "geedi", age: 30, city: "bardere" },
];

console.log("Properties and values of each people:");

for (const person of people) {
  for (key in person) {
    console.log(`${key}; ${person[key]}`);
  }
  console.log("----");
}
