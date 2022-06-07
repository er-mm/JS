// getElementById

// const h1 = document.getElementById('title');
// h1.style.color = "red";

// const btn = document.getElementById('btn');
// btn.style.backgroundColor = "blue";
// btn.style.color = "white";

// getElementsByTagName('tagName')
// gives HTMLCollection - array like object
// - here we can access index, length, but not array methods

// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = "red"
// console.log(headings.length)
// ____________________________________________________________________

//we use querySelectorAll() in most cases
// gives - NodeList - its an object which is collection of nodes
// can run array method forEach
// we can turn then in array - spread opetrator (...)

// const items = document.getElementsByTagName('li')
// console.log(items)

// const betterItems = [...items]
// console.log(betterItems)
// betterItems.forEach((item, idx) => {
//     if(idx%2 === 0) item.style.color = "red"
// })

// ____________________________________________________________________

// getElementsByClassName
// const listItems = document.getElementsByClassName('special');
// console.log(listItems);
// listItems[2].style.color = "blue";

// ____________________________________________________________________
// querySelector('any css'); - select single element
// querySelectorAll('any css') - selects all

// const result = document.querySelector('#result');
// console.log(result)
// result.style.backgroundColor = "yellow";

// const item = document.querySelector('.special');
// console.log(item);

// const lastItem = document.querySelector('li:last-child')
// console.log(lastItem)
// lastItem.style.color = "red"

// const list = document.querySelectorAll('.special')
// console.log(list)
// list.forEach(item => {
//     console.log(item)
//     item.style.color = "red"
// })
