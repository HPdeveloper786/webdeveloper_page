
    (function() {
      'use strict';
      $(document).ready(function() {
        $('#wstoggle').on('click', function() {
          $('body').toggleClass('wsfopen');
          return false;
        });

        // Dropdown toggle for Services
        $('.submenu > a').on('click', function(e) {
          e.preventDefault();
          $(this).next('.dropdown').slideToggle();
          $(this).parent().siblings().find('.dropdown').slideUp();
        });
      });
    }());
  