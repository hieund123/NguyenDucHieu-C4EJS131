let button = document.createElement( "button");
button.innerText = "Like"
button.id = "button"
button.style.backgroundColor = "blue"
button.style.color = "white"
document.body.appendChild(button)

button.onclick = change

function change() {
    if (button.innerHTML == `Like`){
        button.innerHTML = `Liked`
        button.style.backgroundColor = `red`
    }
    else if (button.innerHTML == `Liked`) {
        button.innerHTML = `Like`
        button.style.backgroundColor = `yellow`
    }   
    return false
}