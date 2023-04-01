function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
// у А и В протатип одинаковый, а инстан проверяет прототип