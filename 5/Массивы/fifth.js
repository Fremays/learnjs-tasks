function getMaxSubSum(arr) {
    let sum = 0
    let maxSum = 0
    for (let item of arr) {
        sum += item;
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum
}