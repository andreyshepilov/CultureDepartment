import 'slick-carousel/slick/slick.min';
import 'slicknav/dist/jquery.slicknav.min';

jQuery(function(){

    if(window.matchMedia('(max-width: 480px)').matches) {
        jQuery('.search').addClass('search--collapsed');
    } else {
        jQuery('.search').removeClass('search--collapsed');
    }

    jQuery('.hero').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        swipe: true,
        responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
    });

    let slickNav = $('.header__nav-wrapper .nav-main');

    slickNav.slicknav({
        prependTo: '.nav-main',
        label: '',
        closeOnClick: true
    });

    jQuery('.header__nav-wrapper .nav-main .slicknav_btn').on('click', function() {
        if(window.matchMedia('(max-width: 480px)').matches) {
            jQuery('.search').addClass('search--collapsed');
        }
    });

    jQuery('.search .search__button').on('click', function() {
        slickNav.slicknav('close');
        if(window.matchMedia('(max-width: 480px)').matches) {
            jQuery('.search').removeClass('search--collapsed');
        }
    });
});