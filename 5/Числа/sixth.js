// function randomInteger(min, max) {
//     return Math.round(min + Math.random() * (max - min));
// }

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}