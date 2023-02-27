function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();
let r = prompt()
alert( user.ref.name ); // Каким будет результат?
// Ошибка