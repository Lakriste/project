var hamb = document.querySelector('#hamb');
var popup = document.querySelector('#popup');
var menu = document.querySelector('#menu').cloneNode(1);
var body = document.body;

hamb.addEventListener('click',hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle('noscroll');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

var links  = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener('click', closeOnClick);
})

function closeOnClick(){
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}

 // Получаем видимую часть слайда
if (document.getElementById('slider__viewport')) {
  let viewport = document.getElementById('slider__viewport').offsetWidth;
}
 // Получаем кнопку вперёд
if (document.getElementById("slider__control-next")) {
  let btnNext = document.getElementById("slider__control-next");
}
 
 // Получаем кнопку назад
 if (document.getElementById("slider__control-prev")) {
  let btnPrev = document.getElementById("slider__control-prev");
}
 
 // Получаем элемент со всеми слайдами
 if (document.querySelector("div.slider")) {
 let slider = document.querySelector("div.slider");
}
 
 // Получаем элементы показа слайда
 if (document.querySelectorAll(".viewSlide")) {
  let viewSliders = document.querySelectorAll(".viewSlide");
}
 
if (document.getElementById('slider__viewport')) {

 // Объявляем переменную номера слайда
 let viewSlide = 0;
  
 // Назначаем цвет индикатор слайда зелёный
 viewSliders[0].style.backgroundColor = "red";
 // viewSliders[0].classList.add("active");

 // Обработка клика на кнопку вперёд
 btnNext.addEventListener("click", function () {
     // Делаем индикатор слайда красный
     // viewSliders[viewSlide].classList.remove("active");
     viewSliders[viewSlide].style.backgroundColor = "orange";
     // Условие, если номер слайда меньше четырёх
     if (viewSlide < 4) { // Если верно то
         // Увеличиваем номер слайда на один
         viewSlide++;
     } else { // Иначе
         // Номер слайда равен нулю
         viewSlide = 0;
     }
     // Закрашиваем индикатор слайда в зелёный
     viewSliders[viewSlide].style.backgroundColor = "red";
     // viewSliders[viewSlide].classList.remove("active");
     // Меняем позицию всего слайда
     slider.style.left = -viewSlide * viewport + "px";
 });
  
 // Обработка клика на кнопку назад
 btnPrev.addEventListener("click", function () {
     // Делаем индикатор слайда красный
     viewSliders[viewSlide].style.backgroundColor = "orange";
     // Условие, если номер слайда больше нуля
     if (viewSlide > 0) { // Если верно то
         // Уменьшаем номер слайда
         viewSlide--; 
     } else { // Иначе
         // Номер слайда равен четырём
         viewSlide = 4; 
     }
     // Закрашиваем индикатор слайда в зелёный
     viewSliders[viewSlide].style.backgroundColor = "red";
     // viewSliders[viewSlide].classList.remove("active");
     // Меняем позицию всего слайда
     slider.style.left = -viewSlide * viewport + "px";
 });

}




if (document.getElementById('square')) {
  let square = document.getElementById('square');
}
if (document.getElementById('floor')) {
  let floor = document.getElementById('floor');
}
if (document.getElementById('materialType')) {
  let materialType = document.getElementById('materialType');
}



let cost = 0;

function calculateCost(){
    console.log('calc cost')
    switch(Number(document.getElementById('materialType').value)) {
        case 0: cost = 0; break;
        case 1: cost = 1000; break;
        case 2: cost = 2000; break;
        case 3: cost = 3000; break;
        case 4: cost = 4000; break;
    }
    console.log('cost => ' + cost )

    function makeMoney(n) {
        return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
    }

    totalCost = cost*(Number(document.getElementById('square').value))*(Number(document.getElementById('floor').value))
    console.log('totalCost => ' + totalCost )

    document.getElementById('totalCost').innerHTML = makeMoney(totalCost);;

}



















// //видимая часть слайдера (800px)
// let viewport = document.getElementById('slider__viewport').offsetWidth;
// //кнопка вперед 
// let btnNext = document.getElementById('slider__control-next');
// //кнопка назад 
// let btnPrev = document.getElementById('slider__control-prev');
// //сам слайдер со слайдами, в которых картинки 
// let slider = document.querySelector('div.slider');
// // получаем элементы для показа слайда
// let viewSliders = document.querySelectorAll('.viewSlide');
// // объявляем переменную для номера слайда и инициализации (запуска)
// let viewSlide = 0;

// viewSliders[0].style.backgroundColor="red";

// btnNext.addEventListener('click',function(){
//     console.log('btnNext');
//     // viewSliders[viewSlide].style.backgroundColor = 'orange';

//     console.log('viewSlider => ' + viewSlider);

//     if (viewSlider < 4) {
//         viewSlider++;
//     } else {
//         viewSliders = 0;
//     }

//     // viewSliders[viewSlide].style.backgroundColor = 'red';
//     slider.style.left=-viewSlide * viewport + 'px';

// });



// btnPrev.addEventListener('click',function(){
//     console.log('btnPrev');
//     // viewSliders[viewSlide].style.backgroundColor = 'orange';

//     console.log('viewSlider => ' + viewSlider);

//     if (viewSlide > 0) {
//         viewSlide--;
//     } else {
//         viewSlide = 4;
//     }

//     // viewSliders[viewSlide].style.backgroundColor = 'red';
//     slider.style.left=-viewSlide * viewport + 'px';

// });