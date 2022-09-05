// khai báo function
function hello(name, age, address) {
  //code here
}

hello("hieu", 19, "hanoi");

let sayHello = function hello()

// arow function

let sayGoodbye = (name1, age, favorites) => {
  console.log("Are you sure to say goodbye?");
}
sayGoodbye('hieu', 19, 'film');

// function return
function sub(a, b) {
    // trừ a cho b
    return a - b;
}




function addNumber () {
  console.log('this is a add number function');
}

let addNumber = function() {
  console.log('this is a add number function');
}

let addNumber = () => {
  console.log('this is a add number function');
}


function addNumber (x, y) {
  return x + y;
}

let result = addNumber(4, 5);
console.log(result);

