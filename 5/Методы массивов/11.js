let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let result = arr.reduce((sum, user) => sum + user.age, 0);
    return result / arr.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28