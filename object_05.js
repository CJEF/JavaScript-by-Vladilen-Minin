const person = {
    name: 'Alisher',
    age: 18,
    isProgrammer: true,
    languages: ['ru', 'kz'],
    'complex key': 'complex value',
    ['key_' + (1 + 3)]: 'computed key', // key_4
    greet() {
        console.log('greet!');  
    },
    info() {
        console.info('information about name of person:', this.name);
    }
}

// console.log(person.name); 
// const complexKey = 'complex key';
// console.log(person[complexKey]); // complex value
// console.log(person['age']); // 18
// person.greet();

// person.languages.push('eng')
// //person['key_4'] = undefined;
// delete person['key_4'];

// const {languages, name = 'Vladilen' , age: personAge} = person; // деструктуризация
// console.log(languages, name, personAge); // ["ru", "kz", "eng"] "Alisher" 18

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key', key); // keys
//         console.log('value', person[key]);  // values
//     }
// }

// const keys = Object.keys(person);
// console.log(keys); // ["name", "age", "isProgrammer", "languages", "complex key", "greet"]
// keys.forEach( (key) => {
//     console.log('key', key); // keys
//     console.log('value', person[key]);  // values
// })

// // context this
// person.info() // information about name of person: Alisher


const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this));
    },
    // my idea
    keysAndValues() {
        for(let key in this) {
            console.log(`key: ${key}, value: ${this[key]}`)
        }
    },

    /* keysAndValues() { // стрелочная функция не создает свой контекст
        Object.keys(this).forEach(key => {
            console.log(`'${key}': ${this[key]}`)
        })  
    } */ 

    // keysAndValues() {
    //     const self = this;
    //     Object.keys(this).forEach(function(key) {
    //         console.log(`'${key}': ${self[key]}`)
    //     })
    // } обычная (не стрелочная как выше) функция создает свой контекст, и результат былбы value: undefined если не занести контекст в отдельную переменную

    // keysAndValues() {
    //     const self = this;
    //     Object.keys(this).forEach(function(key) {
    //         console.log(`'${key}': ${self[key]}`)
    //     }.bind(this))
    // } или так

    withParams(top = false, between = false, bottom = false) {
        if(top) {
            console.log('----- Start -----')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`'${key}': ${this[key]}`)
            if(between && index != array.length - 1) {
                console.log('----------')
            }
        })   
        if(bottom) {
            console.log('----- End -----')
        }
    }
}
// const bound = logger.keys.bind(person)
// bound(); // Object keys:  (8) ["name", "age", "isProgrammer", "languages", "complex key", "key_4", "greet", "info"]
logger.keys.call(person); // work without call function
// logger.keysAndValues.call(person)
logger.keysAndValues.call(person);
logger.keysAndValues.call(logger);
logger.keysAndValues.call({a: 1, b: 2}); 
// 'a': 1
// 'b': 2
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]);
