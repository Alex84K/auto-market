document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}



document.getElementById("price-action").onclick = function () {
    if (document.getElementById('name').value === "") {
        alert('Заполните правильно форму ИМЯ !');
    } else if (document.getElementById('phone').value === "") {
        alert('Заполните правильно форму НОМЕР ТЕЛЕФОНА !');
    }else if (document.getElementById('car').value === "") {
        alert('Заполните правильно форму Автомобиль который вас интересует!');
    } else {
        alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время!");
    }
}





var buttons = document.getElementById("car-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}


