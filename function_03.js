// 1 function declaration
function greet(name) {
    console.log('Hi,', name);
}
//function expression
const greet2 = function greet2(name){
    console.log('Hi2', name);
}
greet('Elena');
greet2('Elena');
console.dir(greet)

// 2 anonymus function
let counter = 0; //если задать этот параметр в функции будет одна цифра 1, и она будет повторятся пока не остановишь, а так каждый раз будет прибавлятся +1
const interval = setInterval(function() {
    if (counter === 5) {
        clearInterval(interval);
    } else {
        console.log(++counter); // log не ложить в else а прописать в функции, последний counter будет равен 6, а так он равен 5
    }
}, 1000) 

// 3 arrow function 
arrow2 = name => {
    console.log('Hi', name);
}
arrow2('Alisher');

const pow2 = num => num ** 2;
console.log(pow2(5)); // 25

// 4 параметры по умолчанию
const sum = (a = 42, b = a * 3) => a + b
console.log(sum());

sumAll = (...all) => {
    let result = 0;
    for(let num of all) {
        result += num;
    }
    return result;
}
const res = sumAll(1, 2, 3, 4, 5) // [1, 2, 3, 4, 5] функция принимающая любое количество цифр
console.log(res);

// 5 замыкания
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName);
    }
}

const logWithLastName = createMember('Alisher');
console.log(logWithLastName('Kalguzhinov')); 


