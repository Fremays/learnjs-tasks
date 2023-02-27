function sumInput() {

    let numbers = [];

    while (true) {
        let value = prompt("Введите число");
        if (!isFinite(value) || value === null || value === "") break;
        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}