function sumTo(num) {
    let sum = 0
    for (let i = num; i >= 1; i--){
        sum += i;
    }
    return sum;
}

function sumTo(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumTo(n - 1);
}

function sumTo(n) {
    return n * (n + 1) / 2;
}

//Самый быстрый по формуле, самый медленный через рекурсии, sumTo(100000) через рекурсию превысит 100000 и не сработает