function getSecondsToday() {
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return Math.round((date - today)/1000);
}