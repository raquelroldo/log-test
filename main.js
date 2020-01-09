let output = document.querySelector('#array');
const createArrayButton = document.querySelector('button[name="send"]');
const transformArray = document.querySelector('#calc');
let numbers = [];
let numbersChanged;

if(createArrayButton){
    createArrayButton.addEventListener('click', function() {
        const arrayStarts = parseInt(document.querySelector('input[name="start"').value);
        const arrayEnds = document.querySelector('input[name="end"').value;
        generateArray(arrayStarts, arrayEnds);
    });

    transformArray.addEventListener('click', function() {
        calcArray();
        output.textContent = numbersChanged.join(', ');
    });
}

function calcArray() {
    for(let i = 0; i < numbers.length; i++){
        multipleOfContainsFive(i);
        multipleOfContainsThree(i);
        multipleOfBoth(i);
        multipleOfContainsBoth(i);  
    } 
    console.log(numbersChanged);  
}

function generateArray(arrayStarts, arrayEnds) {
    numbers = [];

    for(let i = arrayStarts; i <= arrayEnds; i++) {
        numbers.push(i);
    }
    numbersChanged = Array.from(numbers);
    console.log(numbers);
}

function multipleOfContainsFive(index) {
    let item = numbers[index];
    
    if(item%5 === 0 || item.toString().includes(5)){
        numbersChanged[index] = 'buzz';
    }
    if(item%5 === 0 && item.toString().includes(5)){
        numbersChanged[index] = 'buzz buzz';
    } 
}

function multipleOfContainsThree(index) {
    let item = numbers[index];

    if(item%3 === 0 || item.toString().includes(3)){
        numbersChanged[index] = 'fizz';
    }
    if(item%3 === 0 && item.toString().includes(3)){
        numbersChanged[index] = 'fizz fizz';
    } 
}

function multipleOfBoth(index) {
    let item = numbers[index];

    if(item%3 === 0 && item%5 === 0){
        numbersChanged[index] = 'fizz buzz';
    }   
}

function multipleOfContainsBoth(index) {
    let item = numbers[index];

    if((item%3 === 0 && item%5 === 0) && (item.toString().includes(5) || item.toString().includes(3))){
        numbersChanged[index] = 'lucky';
    } 
}
