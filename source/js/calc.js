//let sum = 0, days = 0;
//
//function calc(){
//
//let site = prompt("Какой тип сайта? 1 - Сайт визитка 2 - Интернет магазин 3 - Корпоративный");
//    
//    if( site == "1"){
//    sum += 3000;
//        days += 2;
//} else if( site == "2"){
//    sum += 6000;
//    days += 4;}
//    else if( site == "3"){
//        sum += 4000;
//        days += 3;
//    }
//    else{
//    alert("Вы ввели не верно!");
//    calc();
//}
//    
//let design = prompt("Какой тип дизайна? 1 - Шаблон 2 - Уникальный 3 - WOW - дизайн");
//    
//    if( design == "1"){
//    sum += 3000;
//        days += 3;
//} else if( design == "2"){
//    sum += 5000;
//    days += 3;}
//    else if( design == "3"){
//        sum += 3000;
//        days += 4;
//    }
//    else{
//    alert("Вы ввели не верно!");
//    calc();
//}
//    
//let adaptive = prompt("Какой тип адаптивности? 1 - Только ПК 2 - Только мобильный 3 - ПК+Мобильный");
//    
//    if( adaptive == "1"){
//    sum += 2000;
//        days += 2;
//} else if( adaptive == "2"){
//    sum += 2000;
//    days += 3;}
//    else if( adaptive == "3"){
//        sum += 4000;
//        days += 3;
//    }
//    else{
//    alert("Вы ввели не верно!");
//    calc();
//}
//
//    
//    alert("Сроки: " + days + " Стоимость: " + sum);
//}
//calc();


--

//let site, design, adaptive;
//
//let calculator ={
//    price: [
//        [3000, 6000, 4000],
//        [3000, 5000, 3000],
//        [2000, 2000, 4000],
//    ],
//    days: [
//    [2, 4, 3],
//    [3, 3, 4],
//    [2, 3, 3],
//    ],
//    run(siteType, designType, adaptiveType){
//    let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][designType-1]) + parseInt(calculator.price [2][adaptiveType-1]);
//    let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][designType-1]) + parseInt(calculator.days [2][adaptiveType-1]);
//    alert("Сроки: "+ days + " Стоимость: "+ sum);
//}
//}
//
//function getAnswers() {
//site = prompt("Введите тип сайта: \n1 - Визитка, \n2 - Корпоративный, \n3 - Интернет-магазин");
//    if(site != 1 && site != 2 && site != 3){
//        alert("Такого варианты нет");
//        getAnswers();
//        return;
//    }
//design = prompt("Выберите дизайн: \n1 - Шаблонный, \n2 - Уникальный, \n3 - WOW-Дизайн");
//    if(design != 1 && design != 2 && design != 3){
//        alert("Такого варианты нет");
//        getAnswers();
//        return;
//    }
//adaptive = prompt("Адаптивность: \n1 - Только ПК, \n2 - Только Мобильная версия, \n3 - ПК + Мобильный");
//        if(design != 1 && design != 2 && design != 3){
//        alert("Такого варианты нет");
//        getAnswers();
//        return;
//    }
//        calculator.run(site, design, adaptive);
//}
//getAnswers();