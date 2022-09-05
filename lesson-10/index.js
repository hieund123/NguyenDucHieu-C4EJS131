//constant and let: no hoisting --- es6
// var: hoisting 

// console.log(`first: ${a}`);
// var a = 'aaa';
// console.log(`second: ${a}`);


//object
// function id(albumTitle, artist, track) {
//     this.albumTitle = albumTitle;
//     this.artist = artist;
//     this.track = track;
// }

// let id1 = new id("title1", "artits1", "track1");

// console.log(id1.albumTitle);


// 1.dung for...in loop de lay key trong object
let user = {
    name: 'Hieu',
    age: 19,
    appearence: {
        hairColor: 'black',
        skinColor: 'yellow',
    }
}

function getKeys(object) {
    let keys = [];
    for (let key in object) {
        key.push(key);
    }
    return keys;
}

// console.log('key: ', getKeys(user));



// 2. dung function to insert element at index of array
let array = [13, 15, 17 ,19];

function insertElement(array, index,element) {
    // array splice
    array.splice(index, 0, element);
    return array;
}

console.log(insertElement(array, 1, 14));
