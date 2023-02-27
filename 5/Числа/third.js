function readNumber() {
    let num;

    do {
        num = prompt("Введите число");
    } while (!isFinite(num));

    if (num === '' || num === null) return null;

    return +num;
}
// let num;
// function readNumber() {
//     num = prompt("Введите число");
//     if (num === null || num === '') {
//         return null;
//     } else if (Number.isNaN(+num)) {
//         readNumber();
//         return num;
//     } else if (typeof +num === "number") {
//         return +num;
//     }   
// }
//   alert(`Число: ${readNumber()}`);