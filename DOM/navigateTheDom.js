// Navigate the DOM - traverse the DOM tree
// 1. Children
// using childNodes - return all childNodes including whitespace which is treated as a text node.

// const result = document.querySelector("#result");
// const allChildren = result.childNodes;
// console.log(allChildren);

// // using children-> it returns actual children
// const children = result.children;
// console.log(children);

// // firstChild and lastChild
// console.log(result.firstChild);
// console.log(result.lastChild);

//_________________________________________________________________
// parentElement

// const heading = document.querySelector("h2");
// const parent = heading.parentElement;
// parent.style.color = "red";

//_________________________________________________________________
// previousSibling, nextSibling

// const first = document.querySelector(".first");
// console.log(first);
// const second = (first.nextSibling.nextSibling.style.color = "red");
// console.log(second);

// const last = document.querySelector("#last");
// console.log(last);
// const secondLast = last.previousSibling.previousSibling;
// console.log(secondLast);
// console.log(last.nextSibling.nextSibling);

//_________________________________________________________________
// previousElementSibling, nextElementSibling, return whiteSpace

// const first = document.querySelector(".first");
// console.log(first);
// first.nextElementSibling.style.color = "red";

// const last = document.querySelector("#last");
// console.log(last);
// last.previousElementSibling.style.color = "blue";

//_________________________________________________________________
//nodeValue, textContent

// const item = document.getElementById("special");
// const value = item.firstChild.nodeValue;
// console.log(value);
// const easyValue = item.textContent;
// console.log(easyValue);

//_________________________________________________________________
