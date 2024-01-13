jQuery(document).ready(function() {
    //jQuery(".search-popup").hide(),

    /*jQuery(".search-close").hide(),
    jQuery(".site-header .searchbar a").click(function() {
      jQuery(".search-filter").addClass("search-active");
      jQuery(".search-filter"), jQuery(".search-close").show(), jQuery(".search-btn").hide();
    }),
    jQuery(".search-close").click(function() {
      jQuery(".search-filter").removeClass("search-active");
      jQuery(".search-popup"), jQuery(".search-btn").show(), jQuery(".search-close").hide();
    });*/

    jQuery(function() {
        jQuery(".site-header .searchbar a").on("click", function(e) {
            jQuery(".search-filter").addClass("search-active");
            e.stopPropagation()
        });
        jQuery(document).on("click", function(e) {
            var container = jQuery(".search-filter");
            if (!container.is(event.target) && !container.has(event.target).length) {
                jQuery('.search-filter').removeClass('search-active');
            }
        });
    });

    let residentsSlider1 = jQuery(".box-slides");
    residentsSlider1.slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    jQuery(".slider-arrow-style1").on("click", ".slick-arrow", function(event) {
        event.preventDefault();
        / Act on the event /
        if (jQuery(this).hasClass("Slick-Prev")) {
            residentsSlider1.slick("slickPrev");
        } else {
            residentsSlider1.slick("slickNext");
        }
    });


    let residentsSlider2 = jQuery(".testi-quotes");
    residentsSlider2.slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    jQuery(".slider-arrow-style2").on("click", ".slick-arrow1", function(event) {
        event.preventDefault();
        / Act on the event /
        if (jQuery(this).hasClass("Slick-Prev")) {
            residentsSlider2.slick("slickPrev");
        } else {
            residentsSlider2.slick("slickNext");
        }
    });
});