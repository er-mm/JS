/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

/**
 Switch case
 dice values: 1-6
log the value
*/

const person1 = {
  name: "susan",
  age: 15,
  status: "resident",
};
const person2 = {
  name: "bobo",
  age: 25,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you are not eligible");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you are not eligible");
}

const dice = 5;
switch (dice) {
  case 1:
    console.log("you got 1");
    break;
  case 2:
    console.log("you got 2");
    break;
  case 3:
    console.log("you got 3");
    break;
  case 4:
    console.log("you got 4");
    break;
  case 5:
    console.log("you got 5");
    break;
  case 6:
    console.log("you got 6");
    break;
  default:
    console.log("you didnot roll the dice");
}
