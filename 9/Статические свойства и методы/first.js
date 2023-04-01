class Rabbit {
    constructor(name) {
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true




class Rabbit extends Object {
    constructor(name) {
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // Ошибка