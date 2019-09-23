
// Хеадер меню
//Кликаем по hide-nav происходит событие
$(document).on('click', '.hide-nav', function () {

    //вставляем в переменную hide-nav
    let hideNav = $('.hide-nav');

    //вставляем в переменную меню которое будет искать
    let nav = $('.rightblock-column');

    //При нажатие на hide-nav добавляется класс active
    $(hideNav).toggleClass('active');

    // Делаем условие : if=если меню не видно и оно скрыто то при нажатие будет вскрываться
    if (nav.is(':visible')) {
        nav.slideUp();
        
        // в противном случае оно будет прятаться 
    } else {
        nav.slideDown();
    }
})
