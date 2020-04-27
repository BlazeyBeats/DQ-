$(document).ready(function(){
    
    $("#close-notify").click(function(){
        $("#notify").hide();
    });  
  
});



function openNav() {
    document.getElementById("mySidenav-fixed").style.visibility = "hidden";
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
    document.getElementById("main").style.paddingLeft = "50px";
   }

  function closeNav() {
    document.getElementById("mySidenav-fixed").style.visibility = "visible";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.paddingLeft = "100px";
    
  }



