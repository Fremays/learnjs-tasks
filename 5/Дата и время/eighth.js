function formatDate(date) {
    let result = (new Date() - date)/1000;

    if (result < 1) {
        return 'прямо сейчас';
    }
    if (result < Math.floor(60)) {
        return result + ' сек. назад';
    }
    let minutes = Math.floor(result/60);
    if (minutes < 60) {
        return minutes + ' мин. назад';
    }
    result = date;
    result = ['0' + result.getDate(),
        '0' + (result.getMonth() + 1),
        '' + result.getFullYear(),
        '0' + result.getHours(),
        '0' + result.getMinutes()
    ].map(component => component.slice(-2));
    return result.slice(0, 3).join('.') + ' ' + result.slice(3).join(':');
}