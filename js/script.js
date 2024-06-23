(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('header').offset().top > 10) {
            $('.top-header').addClass('hide');
            $('.navigation').addClass('nav-bg');
        } else {
            $('.top-header').removeClass('hide');
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    //Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        arrows: true,
        fade: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
        dots: true
    });
    $('.hero-slider').slickAnimation();

    // venobox popup
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    
    // mixitup filter
    var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
    var mixer;
    if (containerEl) {
        mixer = mixitup(containerEl, {
            selectors: {
                target: '[data-ref~="mixitup-target"]'
            }
        });
    }

    //  Count Up
    function counter() {
        var oTop;
        if ($('.count').length !== 0) {
            oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    $(window).on('scroll', function () {
        counter();
    });

})(jQuery);


//   teachers

let teachers = [
    { name:"أ.م.د/بهاء طاهر",position:"دكتور",img:"img/teachers/بهاء طاهر.jfif",dataFilter:".law"},
    { name:"د.هبة محمد عبدالمجيد",position:"دكتور",img:"img/teachers/هبة محمد.jfif",dataFilter:".law"},
    { name:"د.سعد عوض",position:"دكتور",img:"img/teachers/سعد عوض.jfif",dataFilter:".law"},
    { name:"د.محمد الخمري",position:"دكتور",img:"img/teachers/محمد الخمري.jfif",dataFilter:".law"},
    { name:"د.جمال العناني",position:"دكتور",img:"img/teachers/ف.jfif",dataFilter:".law"},
    { name:"د.سهير عفيفي",position:"دكتور",img:"img/teachers/ف.jfif",dataFilter:".law"},
    { name:"د.اميرة عبدالمنعم",position:"دكتور",img:"img/teachers/ف.jfif",dataFilter:".law"},
    { name:"د.آيه سالم",position:"دكتور",img:"img/teachers/آية سالم.jfif",dataFilter:".law"},
    { name:"د.سمية الدسوقي",position:"دكتور",img:"img/teachers/ف.jfif",dataFilter:".law"},
    { name:"د.وليد صلاح",position:"دكتور",img:"img/teachers/ف.jfif",dataFilter:".law"},
    { name:"د.عماد الشيخ",position:"دكتور",img:"img/teachers/ف.jfif",dataFilter:".law"},
    { name:"د.اسماء اسامة",position:"معيد",img:"img/teachers/اسماء اسامة.jfif",dataFilter:".pharmacy"},
    { name:"د. مي زكريا",position:"معيد",img:"img/teachers/ف.jfif",dataFilter:".pharmacy"},
    { name:"د.محمد صلاح",position:"معيد",img:"img/teachers/محمد صلاح.jfif",dataFilter:".pharmacy"},
    { name:"د.اسماء اسامة",position:"معيد",img:"img/teachers/ف.jfif",dataFilter:".pharmacy"},
    { name:"د.عبير عبدالمجيد",position:"معيد",img:"img/teachers/ف.jfif",dataFilter:".pharmacy"},
    { name:"د.علياء اسماعيل عبد القادر",position:"معيد",img:"img/teachers/ف.jfif",dataFilter:".pharmacy"},
    { name:"د.ياسمين مصطفى",position:"معيد",img:"img/teachers/ف.jfif",dataFilter:".pharmacy"},
    { name:"د.نهلة حافظ",position:"معيد",img:"img/teachers/ف.jfif",dataFilter:".pharmacy"},
    { name:"د.ألاء جمال",position:"معيد",img:"img/teachers/ف.jfif",dataFilter:".pharmacy"},
    { name:"د.سعيد مغاوري",position:"علاقات عامة",img:"img/teachers/سعيد مغاوري.jfif",dataFilter:".science"},
    { name:"أ.محمد رشيد",position:"اشراف",img:"img/teachers/محمد رشيد.jfif",dataFilter:".social-science"},
    { name:"أ.بسمة",position:"مديره مكتب رئيس مجلس الاداره",img:"img/teachers/بسمة.jfif",dataFilter:".social-science"},
   
]

let teacherList = document.querySelector(".teacher-list");


teachers.map((key) => {
    let result = `
      <div style="text-align:center" data-ref="mixitup-target" class="col-lg-4 col-sm-6 mb-5 mix ${key.dataFilter}" data-filter="${key.dataFilter}">
        <div class="card border-0 rounded-0 hover-shadow">
          <img style="max-height: 350px;" class="card-img-top rounded-0" src="${key.img}" alt="teacher">
          <div class="card-body">
            <a href="#">
              <h4 class="card-title">${key.name}</h4>
            </a>
            <p>${key.position}</p>
            
          </div>
        </div>
      </div>
    `;
  
    teacherList.innerHTML += result;
  });
