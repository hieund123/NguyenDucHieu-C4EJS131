const changeTextBtn = document.getElementsById('changeTextBtn');
const p = document.getElementById('myP');
const div = document.getElementById('myd=Div');


function showClicked() {
    alert('Clicked');
}

function changeText() {
    const p = document.getElementsByTagName('p')[0]; //0~index
    p.innerHTML = 't changed text';
    p.style.color = 'violet';
}

// changeTextBtn.onclick = changeText;





// event buddling >< event capturing
div.addEventListener('click', function() {
    alert('p clicked');
}, true)

p.addEventListener('click', function() {
    alert('p clicked')
}, true)


// 


