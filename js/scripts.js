//what we do
$(document).ready(function(){
  $("#design-img").click(function(){
    $(".p1").hide().toggle();
    $("#design-img").slideUp();
  });
    $(".p1").click(function(){
      $("#design-img").slideDown();
      $(".p1").hide();
    });

    $("#dev-img").click(function(){
      $(".p2").hide().toggle();
      $("#dev-img").slideUp();
    });
      $(".p2").click(function(){
        $("#dev-img").slideDown();
        $(".p2").hide();
      });
  
      $("#prd-img").click(function(){
        $(".p3").hide().toggle();
        $("#design-img").slideUp();
      });
        $(".p3").click(function(){
          $("#d-img").slideDown();
          $(".p3").hide();
        });
});

// portfolio
$(document).ready(function(){
  $(".mm1").mouseover(function(){
    $(".one1").show();
   });
   $(".mm1").mouseout(function(){
    $(".one1").hide();
   });

   $(".mm2").mouseover(function(){
    $(".one2").show();
   });
   $(".mm2").mouseout(function(){
    $(".one2").hide();
   });

   $(".mm3").mouseover(function(){
    $(".one3").show();
   });
   $(".mm3").mouseout(function(){
    $(".one3").hide();
   });

   $(".mm4").mouseover(function(){
    $(".one4").show();
   });
   $(".mm4").mouseout(function(){
    $(".one4").hide();
   });

   $(".mm5").mouseover(function(){
    $(".one5").show();
   });
   $(".mm5").mouseout(function(){
    $(".one5").hide();
   });
  
   $(".mm6").mouseover(function(){
    $(".one6").show();
   });
   $(".mm6").mouseout(function(){
    $(".one6").hide();
   });
   $(".mm7").mouseover(function(){
      $(".one7").show();
   });
   $(".mm7").mouseout(function(){
    $(".one7").hide();
   });

   $(".mm8").mouseover(function(){
    $(".one8").show();
   });
   $(".mm8").mouseout(function(){
    $(".one8").hide();
   });

});
// contact us
$(document).ready(function(){
  $("#form1").submit(function(event){

    var name= $("#n").val();
    var email= $("#m").val();
    var comment= $("#comment").val();
    alert(name + ", we have received your message.Thank you for reaching out to us.")
  })
})






// function response(){
//  event.preventDefault()
//   var name= parseInt(document.getElementById("n").value);
//   var email=(document.getElementById)("em").value;
//   alert("Hello"  +  "name" + "your message was received thank you")
// };