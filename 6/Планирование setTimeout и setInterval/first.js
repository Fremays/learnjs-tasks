function printNumbers(from, to) {
    let tempNum = from;

    let timerId = setInterval(function() {
        alert(tempNum);
        if (tempNum === to) {
            clearInterval(timerId);
        }
        tempNum++;
    }, 1000);
}

function printNumbers(from, to) {
    let tempNum = from;

    setTimeout(function run() {
        alert(tempNum);
        if(tempNum < to) {
            setTimeout(run, 1000);
        }
        tempNum++;
    }, 1000);
}
