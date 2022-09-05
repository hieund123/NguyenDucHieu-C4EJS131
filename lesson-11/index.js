// DOM element
// find element by id
// let firstChildElement = document.getElementById('first-child');
// console.log('firstChildelm:', firstChildElement);

// Find Element by Class 
// let childElm = document.getElementsByClassName('child');
// console.log(childElm);

// Find Element by Tag
// let pElm = document.getElementsByTagName('p');
// console.log('pElm:', pElm[0]);

// Query selector
// let childElm = document.querySelector('.child'); //1 phan tu
// console.log('childElm:', childElm);

// let childElm = document.querySelectorAll('.child'); //all in 1 array
// console.log('childElm:', childElm);


//------------DOM Edit Element value (attribute, text, ...)
// Edit text/ inner
let secondChildElm = document.getElementById('second-child');
secondChildElm.innerHTML = 'Third child';

// Edit attribute
secondChildElm.style = 'background-color: green;';

// Edit style 
secondChildElm.style.backgroundColor = 'violet';

//--------------DOM Create/ Remove Element
const todoList = ['Homework', 'Shopping', 'Listening']; //API
// Create Element
let ul = document.createElement('ul'); // <ul></ul>
for(let i = 0; i < todoList.length; i++) {
    let li = document.createElement('li'); //<li></li>
    li.innerHTML = todoList[i]; // <li>Home work</li>
    // Add Element
    ul.appendChild(li);
}

document.body.appendChild(ul);

// Remove Element
ul.removeChild(document.getElementsByTagName('li')[1]);

