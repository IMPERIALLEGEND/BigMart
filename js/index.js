//js file
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.visibility = "hidden";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.visibility = "visible";
    document.body.style.backgroundColor = "white";
  }


  // Scroll to top btn

  $(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
  });
 






  