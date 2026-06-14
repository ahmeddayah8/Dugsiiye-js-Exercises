// exercise for spread operator

const numbers = [1, 2, 3];

const allNumbers = [...numbers, 4, 5, 6];

console.log(allNumbers);

// exercise for rest parameters

function multiply(...numbers) {
  return numbers.reduce((total, number) => total * number, 1);
}

console.log(multiply(1, 2, 3, 4));
