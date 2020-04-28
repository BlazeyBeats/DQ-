$(document).ready(function(){
    var elementClicked = 0;
    $("#close-notify").click(function(){
        $("#notify").hide();
        document.getElementById("main").style.marginTop = "0px";
        window.onscroll = function() {
          if (window.pageYOffset >= 70){
              jQuery('.sidenav-fixed').css({position: 'fixed', left: '0', top: '0'});
          }
          else {
              jQuery('.sidenav-fixed').css({position: 'fixed', left: '', top: ''});
          }
      };
        return elementClicked = 1;
    }); 
    if( elementClicked === 1 ) {
      jQuery('.sidenav-fixed').css({position: 'fixed', left: '0', top: '0'});
    }else {
      window.onscroll = function() {
        if (window.pageYOffset >= 70){
            jQuery('.sidenav-fixed').css({position: 'fixed', left: '0', top: '0'});
        }
        else {
            jQuery('.sidenav-fixed').css({position: 'relative', left: '', top: ''});
        }
    };
    
      
    }
  
});





// var elementClicked;
// $("element").click(function(){
//    elementClicked = true;
// });
// if( elementClicked != true ) {
//     alert("element not clicked");
// }else{
//     alert("element clicked");
// }



// jQuery(document).ready(function(){
//   window.onscroll = function() {
//       if (window.pageYOffset >= 70){
//           jQuery('.sidenav-fixed').css({position: 'fixed', left: '0', top: '0'});
//       }
//       else {
//           jQuery('.sidenav-fixed').css({position: 'relative', left: '', top: ''});
//       }
//   }
// });




function openNav() {
    document.getElementById("mySidenav-fixed").style.display = "none";
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("main").style.marginLeft = "230px";
    document.getElementById("main").style.width = "calc(100% - 230px)";
    
}

  function closeNav() {
    document.getElementById("mySidenav-fixed").style.display = "block";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("main").style.marginLeft = "50px";
    document.getElementById("main").style.width = "calc(100% - 50px)";
    
  }

  