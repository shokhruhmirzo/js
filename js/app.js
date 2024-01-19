var h1 = document.querySelector("h1")
var son = prompt("Istalgan son kiriting :")
var qoldiq = son % 2;


if (isNaN(son)) {
    h1.textContent = "ERROR 404 FOUND :("
} else {
    if (qoldiq === 0) {
        h1.textContent = "Qoldiq yo'q"
    } else {
        h1.textContent = "Qoldiq mavjud"
    }
}