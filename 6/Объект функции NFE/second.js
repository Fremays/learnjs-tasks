function sum(num) {

    let sum = num;

    function plus(numNext) {
        sum += numNext;
        return plus;
    }

    plus.toString = function() {
        return sum;
    };

    return plus;
}