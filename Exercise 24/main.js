// Exercise

function calculateArea(width, height = width) {
  return width * height;
}

console.log(calculateArea(6, 20));
console.log(calculateArea(4)); 
