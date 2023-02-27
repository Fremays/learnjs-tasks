let password
let login = prompt("Каков ваш логин?")

 if (login === "" || login === null) {
     alert("Отменено")
 } else if (login !== "Админ") {
     alert("Я вас не знаю")
 } else {
     password = prompt("Пароль?")
     if (password === "" || password === null){
         alert("Отменено")
     } else if (password !== "Я главный"){
         alert("Неверный пароль")
     } else {
         alert("Здравствуйте")
     }
 }