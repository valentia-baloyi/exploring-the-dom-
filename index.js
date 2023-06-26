console.log(document)

const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
    setTimeout(function(){
        myMessage.innerText = 'Press a button or enter a number'
    }, 5000 )
});

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', function() {
    myMessage.innerText = ''
    setTimeout(function(){
        myMessage.innerText = 'Press a button or enter a number'
    }, 3000 )
});

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = inputBox.value
});

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
    const fruit = fruits[i];
    const li = document.createElement('li');
    li.innerText = fruit;
   fruitList.appendChild(li);
}