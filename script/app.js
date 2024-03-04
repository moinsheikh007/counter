let countElement = document.getElementById('countValue');
let countValue = countElement.innerText;
let countValueNumber = parseInt(countValue);

const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
let defaultCount = 0;

increase.addEventListener('click', function () {
    countElement.innerHTML = countValueNumber+=1;
})

decrease.addEventListener('click', function () {
    if(countValueNumber <= 0) {
        alert('Not Allow')
        return countElement;
    }
    else {
        countElement.innerHTML = countValueNumber-=1;
    }
    
})

reset.addEventListener('click', function() {
    countElement.innerHTML = defaultCount;
})