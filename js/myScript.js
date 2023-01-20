$(document).ready(function(){
    
        //Включаем WOW
     new WOW().init();
    
//Маска номера телефона
    $("#inputTel").mask("+7 (999) 999-9999");
    
    $('form').submit(function(){
        
        if ($("#inputTel").val() == "" || $("#inputEmail3").val() == ""){
            event.preventDefault();
            alert("Неверный ввод данных, попробуйте снова");
        }
    });
        
    $('form').submit(function(event){
                     event.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).serialize()
    }).done(function (){
        $(this).find("input").val("");
        alert("Успешно отправлено!");
        $("form").trigger("reset");
    });
    return false;
        
});
    
    
    $("#exampleModal").on("click", function(){
    let site = $("#selectSite option:selected").text()
    let design = $("#selectDesign option:selected").text()
    let adaptive = $("#selectAdaptive option:selected").text()
    $("input[name='attribute1']").val(site);
    $("input[name='attribute2']").val(design);
    $("input[name='attribute3']").val(adaptive);
}); 

    $("#modal-footer").on("click", function(){
    event.preventDefault();

$.ajax({
type: "POST",
url: "",
data: $(this).serialize()
}).done(function (){
$(this).find("input").val("");
alert("Успешно отправлено!");
$("form").trigger("reset");
});
return false;
});
    
    
    
    $('#selectSite').val();
/* или */
$('selectSite[name=type]').val();

    
    setTimeout(function(){$(".loaderArea").css("display", "none")}, 3000);
    
    //Калькулятор    
    function calculate(){
       let sum = parseInt($("#selectSite option:selected").val()) + parseInt($("#selectDesign option:selected").val()) + parseInt($("#selectAdaptive option:selected").val());
       let days = parseInt($("#selectSite option:selected").attr("days")) + parseInt($("#selectDesign option:selected").attr("days")) + parseInt($("#selectAdaptive option:selected").attr("days"));
        $(".price .digit").text(sum);
        $(".days .digit").text(days);
    }
    calculate();
    $("select").on("change", function(){
       calculate();
    });
    
    //Плавный скроллинг к якорным ссылкам
      $("a[href^='#']").click(function(){
                let _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    
    //Анимация активных ссылок в меню 
           $(window).scroll(() => {
               let scrollDistance = $(window).scrollTop();


               $('.section').each((i, el) => {

                   if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                       $('nav a').each((i, el) => {
                           if ($(el).hasClass('active')) {
                               $(el).removeClass('active');
                           }
                       });

                       $('nav li:eq(' + i + ')').find('a').addClass('active');
                   }

               });
           });
    
    //Отложенная Анимации при скролле
        let options = {
            threshold: [0.5]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation');

        elements.each((i, el) => {
            observer.observe(el);
        });


        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }
    
    //Загрузка картинок при скролле
         let optionsImg = {
            threshold: [0.5]
        };
        let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
        let elementsImg = $('.lazy_image');

        elementsImg.each((i, el) => {
            observerImg.observe(el);
        });


        function onEntryImg(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.src = change.target.dataset.src;
                }
            });
        }
    
    //Бегающие цифры статистики
     let optionsStat = {
            threshold: [0.5]
        };
        let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
        let elementsStat = $('.statAnimation');

        elementsStat.each((i, el) => {
            observerStat.observe(el);
        });


        function onEntryStat(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(!$('.statAnimation').hasClass("done")){
                        $('.statAnimation').addClass("done");
                        $('.statAnimation').spincrement({
                         thousandSeparator: "",
                         duration: 3000
                    });
                  }
                }
            });
        }
    
    //Модальные окна в кейсах
    $('.image-link').magnificPopup({
        type: 'image'
    });

    //Модальное окно акции по таймеру
        setTimeout(function () {
           const myModal = new bootstrap.Modal('#myModal', {
                keyboard: false
            });
            modalToggle = document.getElementById('toggleMyModal'); 
            myModal.show(modalToggle);

        }, 1000);
    });


