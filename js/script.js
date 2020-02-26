var link = document.querySelector(".login");              // нашел "логин"
var popup = document.querySelector(".hidden-login");     // "нашел окно логина"
var close = document.querySelector(".cross-login");      // "нашел крестик логина"
var form = popup.querySelector("form");                   // нашел форму логина для заполнения "Логин\пароль"
var login = popup.querySelector("[name=login]");          // строчка с логином
var password = popup.querySelector("[name=password]");    // строчка с паролем
var storage = localStorage.getItem("login");               //локалСторидж позволяет вызвать, авто заполнение логина


link.addEventListener("click", function (evt) {           //  нажатие на "Логин"
    evt.preventDefault();                                     // снял дефолт
    popup.classList.add("show-login");                        // добавил класс окно, для ПОКАЗА
    if (storage) {                                            //авто добавление логина
        login.value = storage;                                    // логин = ранее вписаный логин
        password.focus();                                         //фокус на пароль
    } else {                                                  //если 
        login.focus();                                             // строка логина заполнинна
    }
});


close.addEventListener("click", function (evt) {       // нажатие на крестик "для закрытие окна"
    evt.preventDefault();                                  //  снял дефолт
    popup.classList.remove("show-login");                  //снял класс окна, для ПОКАЗА
    popup.classList.remove("modal-error");                 //// снял клаа окна, ерор ввода
});


form.addEventListener("submit", function (evt) {      // клик/ентер на отправку "формы" 
    if (!login.value || !password.value) {               //проверяет вписан логин или пароль
        evt.preventDefault();                                   //    снял дефолт
        popup.classList.remove("modal-error");                   //добавили ерор   
        void popup.offsetWidth
        popup.classList.add("modal-error");                   //добавили ерор            
    } else {                                                 //если
        localStorage.setItem("login", login.value);               //авто заполнение логина
    }
});


window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
    if (evt.keyCode === 27) {                              //  "Esc"
        if (popup.classList.contains("show-login")) {             // убеждаемся что окно открыто
            popup.classList.remove("show-login");                    //тогда при нажатие Esc, удалиться класс     
            popup.classList.remove("modal-error");                   //ерор
        }
    }
});



//map

var mapLink = document.querySelector(".map");              // нашел "логин"
var mapPopup = document.querySelector(".hidden-map");     // "нашел окно логина"
var mapClose = document.querySelector(".cross-map");        // "нашел крестик логина"

mapLink.addEventListener("click", function (evt) {           //  нажатие на "Логин"
    evt.preventDefault();                                     // снял дефолт
    mapPopup.classList.add("show-map");                        // добавил класс окно, для ПОКАЗА
});


mapClose.addEventListener("click", function (evt) {       // нажатие на крестик "для закрытие окна"
    evt.preventDefault();                                  //  снял дефолт
    mapPopup.classList.remove("show-map");                  //снял класс окна, для ПОКАЗА
});




window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
    if (evt.keyCode === 27) {                              //  "Esc"
        if (mapPopup.classList.contains("show-map")) {             // убеждаемся что окно открыто
            mapPopup.classList.remove("show-map");                    //тогда при нажатие Esc, удалиться класс     
        }
    }
});