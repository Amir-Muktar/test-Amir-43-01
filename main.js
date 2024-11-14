//
// function rotateBody(s) {
//     return /^\d+$/.test(s);
// }
//
// console.log(rotateBody("12345"));
// console.log(rotateBody("123a45"));
// console.log(rotateBody(""));
//
// function square() {
//     setInterval(() => {
//         console.log("Прошла секунда");
//     }, 1000);
// };
//
// rotateBody();
//
// function printNumbers() {
//     let number = 1;
//     const intervalId = setInterval(() => {
//         console.log(number);
//         number++;
//         if (number > 10) {
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }
//
// printNumbers();
const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("click", function() {
    if (colorBox.style.backgroundColor === "lightblue") {
        colorBox.style.backgroundColor = ""; // Убрать цвет
    } else {
        colorBox.style.backgroundColor = "lightblue"; // Установить цвет
    }
});

//
// const xhr = new XMLHttpRequest();
// xhr.open("GET","main.json");
//
// xhr.onload = function () {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// };
// xhr.send();