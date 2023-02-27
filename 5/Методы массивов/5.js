function copySorted(arr) {
    let result = arr.slice()
    return result.sort()
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );