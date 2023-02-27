alert( ((6.35 * 10).toFixed())/10 )




function readNumber() {
    num = prompt("Введите число");
    if (num === null || num === '') {
        return null;
    } else if (!isNan(num)) {

    } else if (typeof +num === "number") {
        return +num;
    } else {
        readNumber();
    }
}