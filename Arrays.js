const arr = ["apple", "oranges", " ", "mango", " ", "lemon"];

const newArr = arr.map((a) => {
  return a === " " ? "empty string" : a;
});

console.log(newArr);
