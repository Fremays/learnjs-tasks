function getLocalDay(date) {
    let result = date.getDay();
    if (result === 0) {
        return 7;
    }
    return result
}

let date = new Date(2012, 0, 3)
alert( getWeekDay(date) );