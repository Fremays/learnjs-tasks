let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    let sum = 0
    for (let value of Object.values(obj)) {
        sum += 1;
    }
    return sum
}

alert( count(user) ); // 2