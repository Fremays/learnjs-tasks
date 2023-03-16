function inBetween(a, b) {
    return function(num) {
        return num >= a && num <= b;
    };
}

function inArray(arr) {
    return function(num) {
        return arr.includes(num);
    };
}