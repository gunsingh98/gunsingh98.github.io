$(document).ready(function(){

    $(".mobile-menu").click(function(){
        $("header").toggleClass("active");
        $("li.bread-right").toggleClass("active");
        $("li.bread-left").toggleClass("active");
        $("ul.larger").toggleClass("active");

        $("li.bread-up").toggle();
        $("li.bread-down").toggle();

        // $("ul.larger").show();
    });
  
  });