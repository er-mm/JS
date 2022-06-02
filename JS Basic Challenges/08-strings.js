// string methods
const text = " Mayank Mittal";
let result = text.length;
console.log(result);

console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("e"));
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith("mayank"));
console.log(text.includes("yank"));
console.log(text.slice(0, 3));
console.log(text.slice(-3));

// tempate literals - backticks `${} - expression(value) - called interpolation`
const age = 26;
const sentence = "hey it's " + text + " and he is " + age + " years old";
console.log(sentence);

const value = `Hey it's ${text} and he is ${age} years old. You can also do simple math like ${
  4 + 4
}`;
console.log(value);

/* 
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/

// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName('mayank', 'mittal'));

function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: "mittal", firstName: "mayank" }));
