function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

alert( counter.up() ); // 0
alert( counter.up() ); // 1
alert( counter.down() ); // 2