let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(obj) {
    let salaries = 0
    let result = null
    for (let [key, value] of Object.entries(obj)) {
        if (value >= salaries) {
            salaries = value;
            result = key;
        }
    }
    return result
}