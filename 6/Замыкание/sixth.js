function byField(num) {
    return (a, b) => a[num] > b[num] ? 1 : -1;
}