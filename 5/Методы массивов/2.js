function filterRange(arr, min, max) {
    return arr.filter(i => {
        if (i <= max && i >= min) {
            return i
        }
    })
}