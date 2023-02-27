let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    let result = new Map()

    for (let item of arr) {
        let sorted = item.toLowerCase().split("").sort().join("");
        result.set(sorted, item);
    }
    return Array.from(result.values())
}

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"