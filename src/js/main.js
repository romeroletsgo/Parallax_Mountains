$(document).ready(function () {
    //Слушаем скролл
    $(window).scroll(function (event) {
        let s = $(this).scrollTop(); //Получаем пиксели, которые прокручены в окне браузера
        let w = $(this).outerWidth(); //Получаем ширину окна
        let h = $('.content').outerHeight(); //Получаем высоту контентной части
        let h_b = $('.parallax').outerHeight(); //Высота вверхнего  блока
        let p = s / h * 100; //Вычисление процентов прокрутки всей контентной части
        let p_b = s / h_b * 100; //Проценты прокрутки только вверхней части
        let o = 1 - 1 / 100 * p_b; //Вычисляем непрозрачность

        //Обращаемся к туману
        let z_1 = 1 + (w / 10000 * p_b); //Создаём переменную зума
        $('.parallax__fog').css('transform', 'scale(' + z_1 + ')'); //Делаем зум
        $('.parallax__fog').css('opacity', o); //Убираем дымку от тумана, делаем его прозрачным в зависимости от прокрученного текста

        //Фоновая гора
        let z_2 = 1 + (w / 5000000 * p);
        $('.parallax__mountain-1').css('transform', 'scale(' + z_2 + ')');

        //Правая гора
        let hr = w / 2000 * p_b;
        let z_3 = 1 + (w * 0.000005 * p_b);
        $('.parallax__mountain-2').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_3 + ')')

        //Левая гора
        let hr_2 = w / 1500 * p_b;
        let z_4 = 1 + (w * 0.00001 * p_b);
        $('.parallax__mountain-3').css('transform', 'translate3d(' + hr_2 + 'px,0,0) scale(' + z_4 + ')')
    });
});