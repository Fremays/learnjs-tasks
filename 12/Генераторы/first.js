function* pseudoRandom(num) {
    let value = num;

    while(true) {
        value = value * 16807 % 2147483647
        yield value;
    }
}