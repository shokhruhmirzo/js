var h1 = document.querySelector('h1')
function tekshirQoldiq() {
    var son = prompt("Istalgan sonni kiriting:");

    son = parseFloat(son);

    if (isNaN(son)) {
        h1.textContent = "tekshirib qaytadan urining"
    } else {
        var qoldiq = son % 2;

        if (qoldiq === 0) {
            h1.textContent = "Qoldiq yo'q"
        } else {
            h1.textContent = "Qoldiq mavjud"
        }
    }
}

tekshirQoldiq();
