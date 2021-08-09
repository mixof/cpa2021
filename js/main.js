jQuery(document).ready(function() {

    let is_mobile_device=false;

    if (window.matchMedia("(max-width: 992px)").matches) {
        is_mobile_device=true;
        jQuery('.search-form').removeClass('opened');
        jQuery('.search-form').addClass('closed');
    } else {
        is_mobile_device=false;
    }

    jQuery('.hamburger').on('click',function (e){
        jQuery('.white-overlay, .hamburger, .main-menu').toggleClass('active');
        jQuery('.hamburger').toggleClass('is-active');
    });

    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 992px)").matches) {
            is_mobile_device=true;
            jQuery('.search-form').removeClass('opened').addClass('closed');

        } else {
           is_mobile_device=false;
            jQuery('.search-form').removeClass('opened');
            jQuery('.search-form').removeClass('closed');
        }
    });

    jQuery('.search-form.closed').on('click',function (e){
       if(is_mobile_device) {
          jQuery('.search-form').addClass('opened');
           jQuery('.search-form').removeClass('closed');
       }
    });

    jQuery('body').on('click',function (e){
        if(jQuery(e.target).closest('.search-form').length == 0 ) {

            jQuery('.search-form').removeClass('opened');
            jQuery('.search-form').addClass('closed');

        }

    });
});

