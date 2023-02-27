let map = new Map();

map.set("name", "John");

let keys = map.keys(); // Array.map(map.keys()) что бы заработал

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");