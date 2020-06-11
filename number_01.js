// 1 Number

// const num = 42; //integer
// const float = 42.42;
// const pow = 10e3; //10000 = 10 + 000
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER); // MAX_SAFE_INTEGER 9007199254740991 максимальное число с которым можно нормально работать
// console.log('Math.pow', Math.pow(2, 53) - 1); // Math.pow 9007199254740991
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER); //-9007199254740991
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.POSITIVE_INFINITY); // infinity = example 1/0; isFinite(infinity) = false = infinity-бесконечно
// console.log(Number.NEGATIVE_INFINITY); // -infinity
// console.log(Number.NAN); // example Not a number = 2/undefiend; isNAN(NAN) = true
// console.log('42' + 2); //422  конкатинация
// const stringInt = '42';
// console.log(Number.parseInt(stringInt) + 2); // 44
// console.log(Number(stringInt) + 2); // 44
// console.log(+stringInt + 2); //44
// const stringFloat = '42.42';
// console.log(parseFloat(stringFloat) + 2); // 44.42
// console.log(0.4 + 0.2); // 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(2)); // 0.60 its string

// 2 BigInteger для работы с числами больше чем MAX_SAFE_INTEGER 

// console.log(typeof 90071992547409912345n); //bigint
// console.log(90071992547409912345n - 9007199254740991234n); // 81064793292668921111n {color:green}
// console.log(81064793292668921111.1234n); //error
// console.log(81064793292668921111n - 2); //Cannot mix BigInt and other types 
// console.log(10n - BigInt(3)); //7n
// console.log(5n / 2n); // 2n

// 3 Math sin, cos, tg, ctg
// console.log(Math.E); // 2.718281828459045
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.sqrt(25)); // 5 squareRoot
// console.log(Math.pow(5, 3)); // 125
// console.log(Math.abs(-42)); // 42 
// console.log(Math.max(11, 36, 63, 9, 422)); // 422
// console.log(Math.min(11, 36, 63, 9, 422)); // 9
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.9)); // 5
// console.log(Math.round(4.9)); // 5
// console.log(Math.trunc(4.9123423)); // 4
// console.log(Math.random()); // каждый раз новое число

// 4 Example 
function getRandomBetween (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomBetween(10, 42));






























