const buttons = document.querySelectorAll('.button--number')
const input = document.querySelector('.input');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const equal = document.querySelector('.equal')
const divide = document.querySelector('.divide')
const clear = document.querySelector('.clear')
const multiply = document.querySelector('.multiply')
const array = ["+", "*" , "/" ,"-" ]
buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        input.value +=button.innerText;
    })
})
function calculation(value){
    input.value += value;
}
function checkCalculation(value){
    let status = false
    const inputValue = input.value;
    const result =inputValue.slice(inputValue.length-1,inputValue.length).trim();
    array.forEach((item) =>{
        if(result === item) {
            status = true;
        }
    })
    if(status){
        const initValue = inputValue.slice(0,inputValue.length-1);
        console.log(initValue);
        input.value = initValue +value;
        return;
    }
    else if( value === result && !status){
        return;
    }
    else{
        calculation(value)
    }
}
function checkMinus(value){
    const inputValue = input.value;
    const result =inputValue.slice(inputValue.length-1,inputValue.length).trim();
    if(result === "+"){
        const initValue = inputValue.slice(0,inputValue.length-1);
        console.log(initValue);
        input.value = initValue +value;
    }
    else if(result !=='-'){
        calculation(value)
    }
}
plus.addEventListener('click', () =>{
    checkCalculation("+")
})
minus.addEventListener('click', () =>{
    checkMinus("-");
})
multiply.addEventListener('click', () =>{
    checkCalculation("*")
})
divide.addEventListener('click', () =>{
    checkCalculation("/")
})
equal.addEventListener('click' , ()=>{
    input.value = eval(input.value)
})
clear.addEventListener('click', () =>{
    input.value = ''
})
