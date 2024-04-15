  // read more  one
  $(document).ready(function() {
      $("#toggle").click(function() {
          let elem = $("#toggle").text();
          if (elem == "Read More") {
              $("#toggle").text("Read Less");
              $("#moreText").slideDown();
          } else {
              $("#toggle").text("Read More");
              $("#moreText").slideUp();
          }


      });
  });
  // read more  two
  $(document).ready(function() {
      $("#toggle2").click(function() {
          let elem = $("#toggle2").text();
          if (elem == "Read More") {
              $("#toggle2").text("Read Less");
              $("#moreText2").slideDown();
          } else {
              $("#toggle2").text("Read More");
              $("#moreText2").slideUp();
          }


      });
  });
  // read more  three
  $(document).ready(function() {
      $("#toggle3").click(function() {
          let elem = $("#toggle3").text();
          if (elem == "Read More") {
              $("#toggle3").text("Read Less");
              $("#moreText3").slideDown();
          } else {
              $("#toggle3").text("Read More");
              $("#moreText3").slideUp();
          }


      });
  });


  // menu

  $(document).ready(function() {
      $('ul li a').click(function() {
          $('li a').removeClass("active");
          $(this).addClass("active");
      });
  });

  //Scrolling Effect
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('.header').addClass('black');
      } else {
          $('.header').removeClass('black');
      }
  });

  function openDaySchedule(url) {
      // See all options https://dayschedule.com/widget
      daySchedule.initPopupWidget({
          url: url,
          color: {
              primary: '#232325',
              secondary: '#adadad',
          },
      });
  }

  new WOW().init();