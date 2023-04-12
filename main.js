const output = document.getElementById('output');
const button = document.getElementById('button');
const input = document.getElementById('input');

let num = Math.floor(Math.random() * 10)+ 1;

button.addEventListener('click', function() {
    if(input.value == num) {
        output.textContent = "Congtratulations! You got it right!"
    } else if (input.value < num) {
        output.textContent = "Too low"
    } else if (input.value > num) {
        output.textContent = "Too high"
    } 
    
})