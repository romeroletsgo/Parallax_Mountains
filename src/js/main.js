$(document).ready(function () {
    //Слушаем скролл
    $(window).scroll(function (event) {
        //Получаем пиксели, которые прокручены в окне браузера
        let scrolledPixels = $(this).scrollTop();

        //Получаем ширину окна
        let widthOfWindow = $(this).outerWidth();

        //Получаем высоту контентной части
        let heightOfContent = $('.content').outerHeight();

        //Высота вверхнего  блока
        let heightTopBlock = $('.parallax').outerHeight();

        //Вычисление процентов прокрутки всей контентной части
        let percentScrolledContent = scrolledPixels /
            heightOfContent * 100;

        //Проценты прокрутки только вверхней части
        let percentScrolledTopContent = scrolledPixels /
            heightTopBlock *
            100;

        //Вычисляем непрозрачность
        let o = 1 - 1 / 100 * percentScrolledTopContent;

        //Обращаемся к туману
        let z_1 = 1 + (widthOfWindow / 10000 * percentScrolledTopContent); //Создаём переменную зума
        $('.parallax__fog').css('transform', 'scale(' + z_1 + ')'); //Делаем зум
        $('.parallax__fog').css('opacity', o); //Убираем дымку от тумана, делаем его прозрачным в зависимости от прокрученного текста

        //Фоновая гора
        let z_2 = 1 + (widthOfWindow / 5000000 * percentScrolledContent);
        $('.parallax__mountain-1').css('transform', 'scale(' + z_2 + ')');

        //Правая гора
        let hr = widthOfWindow / 2000 * percentScrolledTopContent;
        let z_3 = 1 + (widthOfWindow * 0.000005 * percentScrolledTopContent);
        $('.parallax__mountain-2').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_3 + ')')

        //Левая гора
        let hr_2 = widthOfWindow / 1500 * percentScrolledTopContent;
        let z_4 = 1 + (widthOfWindow * 0.00001 * percentScrolledTopContent);
        $('.parallax__mountain-3').css('transform', 'translate3d(' + hr_2 + 'px,0,0) scale(' + z_4 + ')')
    });
});