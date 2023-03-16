function f() {
    alert( this ); // ?
}

let user = {
    g: f.bind(null)
};

user.g(); // null с use strict, [object Window] без