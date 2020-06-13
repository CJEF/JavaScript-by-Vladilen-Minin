const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'];
const fib = [1, 1, 2, 3, 5, 8, 13];
const people = [
{name: 'Alisher', money: 2300},
{name: 'Elena', money: 1700},
{name: 'Roma', money: 5000},
]

cars.push('Renault');
cars.unshift('Volga') // ["Volga", "Mazda", "Ford", "BMW", "Mercedes", "Renault"]
console.log(cars);
const deletedFirstItem = cars.shift(); // - Volga
const deletedLastItem = cars.pop();
console.log(deletedFirstItem);
console.log(deletedLastItem);


console.log(cars); //  ["Mazda", "Ford", "BMW", "Mercedes"]
console.log(cars.reverse()); // ["Mercedes", "BMW", "Ford", "Mazda"]

const indexPeople = people.findIndex((person) => {
    console.log(person); // 3 object
    return person.money === 5000
});
const person = people.find(person => {
    console.log(person); // 3 object
    return person.money === 5000
});
console.log(indexPeople); // 2
console.log(people[indexPeople]); // {name: "Roma", money: 5000}
console.log(person); // {name: "Roma", money: 5000}

let findedPerson;

for(const person2 of people) {
    console.log(person2); // 3 object
    if(person2.money === 2300) {
        findedPerson = person2; 
    }
}
console.log(findedPerson); // {name: "Alisher", money: 2300}

console.log(cars.includes('Mazda'));
 // true

const uppercaseCars = cars.map(car => {
    return car.toUpperCase();
});
const pow2 = num => num ** 2;
const sqrt = num => Math.sqrt(num);
const pow2Fib = fib.map(pow2).map(sqrt) // lyambda function, коротко и ясно,выполняется готовая функция
console.log(pow2Fib); // fib.map(pow2) => [1, 1, 4, 9, 25, 64, 169], .map(sqrt) => [1, 1, 2, 3, 5, 8, 13] 

const pow3 = num => num ** 2;
const pow3Fib = fib.map(pow3);
const filteredNumbers = pow3Fib.filter(num => num  > 20);
console.log(pow3Fib); // [1, 1, 4, 9, 25, 64, 169]
console.log(filteredNumbers); // [25, 64, 169]


console.log(uppercaseCars); // ["MERCEDES", "BMW", "FORD", "MAZDA"] map return new array =>
console.log(cars); // ["Mercedes", "BMW", "Ford", "Mazda"] old array don't changed



// // Ex.1
// const text = 'hello, today i learn arrays in JS';
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText); // SJ ni syarra nrael i yadot ,olleh
// const index = cars.indexOf('BMW');
// console.log(index); // 1
// console.log(cars[index]); // BMW
// cars[index] = 'Volkswagen';
// console.log(cars); //["Mercedes", "Volkswagen", "Ford", "Mazda"]

const allMoney = people
.filter(person => person.money > 2000)
.reduce((acc, person) => {
    acc += person.money;
    return acc;
}, 0);
console.log(allMoney); // 7300




