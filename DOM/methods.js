// get/set Attribute

// const mfirst = document.querySelector(".mfirst");
// const idVal = mfirst.getAttribute("id");
// // console.log(idVal);

// const link = document.getElementById("link");
// const showLink = link.getAttribute("href");
// console.log(showLink);

// const last = link.nextElementSibling;
// console.log(last);
// last.setAttribute("class", "mfirst");
// last.textContent = "I also have a class of first";
// console.log(last);

// const links = document.querySelectorAll(".mfirst");
// console.log(links);

//___________________________________________________
// add css classes dynamically
// className, classList

// const firstH = document.getElementById("firstH");
// const secondH = document.getElementById("secondH");
// const thirdH = document.getElementById("thirdH");

// const classVal = firstH.className;
// console.log(classVal);

// secondH.className = "colors text";
// // another way to add both classes is classList

// // thirdH.classList.add("colors");
// // thirdH.classList.add("text");

// // or

// thirdH.classList.add("text", "colors");

// const thirdClassValue = thirdH.classList;
// console.log(thirdClassValue);

// // remove any class
// thirdH.classList.remove("text");

// // to check if the element has class
// let result = thirdH.classList.contains("colors");
// if (result) console.log("hello World");
// else console.log("does not have class");

//_________________________________________________
// add elements
// createElement('element'), createTextNode('text content'), element.appendChild(childElement)

const result = document.querySelector("#addResult");

// create empty element

const bodyDiv = document.createElement("div");
// create textNode
const text = document.createTextNode("a simple body div");

// set text to bodyDiv
bodyDiv.appendChild(text);

// now append bodyDiv to document body
// document.body.appendChild(bodyDiv);

// now we do the same with result
// check what the result has
console.log(result.children);

const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading");
heading.appendChild(headingText);
heading.classList.add("blue");
// result.appendChild(heading);

//__________________________________________________
// insertBefore('element','location')
document.body.insertBefore(bodyDiv, result);
const first = document.querySelector(".red");
result.insertBefore(heading, first);

//__________________________________________________
// replaceChild('new','old')

const smallHead = document.createElement("h6");
const smallText = document.createTextNode("I am small heading text");
smallHead.classList.add("red");
smallHead.appendChild(smallText);
document.body.replaceChild(smallHead, bodyDiv);

//__________________________________________________
// remove, removeChild
const res = document.querySelector("#parent");
// res.remove();
const head = res.querySelector("h1");
res.removeChild(head);

//__________________________________________________
// innerHTML, textContent
const list = document.getElementById("innerFirst");
const div = document.getElementById("innerSecond");
const item = document.querySelector(".innerItem");
console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const ul = document.createElement("ul");
ul.innerHTML = `<li class="innerItem">list item</li>
      <li>list item</li><li>list item</li>`;
document.body.appendChild(ul);

//__________________________________________________
// CSS

const random = document.querySelector(".cssRandom");
console.log(random.style);

// random.style.backgroundColor = "blue";
// random.style.color = "white";
// random.style.fontSize = "3rem";
// random.style.textTransform = "capitalize";

random.classList.add("cssTitle");
