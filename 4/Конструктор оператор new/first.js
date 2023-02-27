function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true

// Возможно если функции возвращают один и тот же объект

let objectNew = {}

function A() {
    return objectNew;
}

function B() {
    return objectNew;
}

let a = new A();
let b = new B();

alert( a == b ); // true
