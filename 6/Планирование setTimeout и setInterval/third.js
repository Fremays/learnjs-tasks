function debounce(func, ms) {
    let cooldown = false;
    return function() {
        if (cooldown) return;
        func.apply(this, arguments);
        cooldown = true;
        setTimeout(() => cooldown = false, ms);
    };

}