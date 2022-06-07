// similar to css
//Select the element or group of elements that we want to affect
// decide the affect we want to apply to the selection

// it has many different ways

document.body.style.backgroundColor = "yellow";
document.body.style.color = "red";
document.getElementById('btn').style.color = "blue";

// we can also assign the redudant part to a variable
const btnElement = document.getElementById('btn');

// or
const ele = document.querySelectorAll('div');

// when we select any element it gives back
// returns a node object or a node list (which is array like object)
const name = btnElement.nodeName;
const css = btnElement.style;
// console.log(btnElement)
// console.log(name) // BUTTON
// console.log(css) // CSSStyleDeclaration {0: 'color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// console.log(ele) //NodeList(2) [div#generalConcept, div#windowDocumentOverview]
// where is document coming from ? 

// window object - 
// Global Object - its a browser api  - it gives option to work with browser (current opened window/tab)
// console.log(window);

// console.log(document) - > gives html
// console.dir(document) -> gives object





