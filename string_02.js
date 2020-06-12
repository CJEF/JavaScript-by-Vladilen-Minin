//const name = 'Alisher';
const name = new String('Alisher') // автоматическая обертка при создании любого типа данных в js, и функции тоже
console.log(name.length); // 7

const age = 18;

getAge = () => {
    return age
}

// const output = "Hi, my name is " + name + ", I'm " + age + " years old.";
const output = `Hi, my name is ${name === 'Alisher' ? 'Alik' : 'who is you?'}, I'm ${getAge()} years old.`
console.log(output);

const str = 'string';
console.log(str.toUpperCase()); // STRING
console.log(str.charAt(3)); // i
console.log(str.indexOf('ing')); // 3
console.log(str.indexOf('!')); // -1
console.log(str.toLowerCase().startsWith('str')); // true
console.log(str.endsWith('ing')); // true
console.log(str.repeat(3)); //stringstringstring
const password = '     password       '
//console.log(password.trim()); // password без пробелов
console.log(password.trimRight()); //      password
console.log(password.trimLeft()); // password

logPerson = (s, name, age) => {
    //console.log(s, name, age); // ["name: ", ", age: ", "!", raw: Array(3)]
    if(age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`; 
}

const personName = 'CJ';
const personName2 = 'Max';
const personAge = '25'; //name: CJ, age: Еще не родился!
const personAge2 = '-3'; //name: CJ, age: Еще не родился!
const out = logPerson`name: ${personName}, age: ${personAge}!`
const out2 = logPerson`name: ${personName2}, age: ${personAge2}!`
console.log(out); // name: CJ, age: 25!
console.log(out2); // name: Max, age: Еще не родился!








