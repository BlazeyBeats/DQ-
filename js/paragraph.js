$(document).ready(function(){
    
    $("#close-notify").click(function(){
        $("#notify").hide();
    });  
  
});



function openNav() {
    document.getElementById("mySidenav-fixed").style.display = "none";
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("main").style.marginLeft = "230px";
    
   }

  function closeNav() {
    document.getElementById("mySidenav-fixed").style.display = "block";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("main").style.marginLeft = "0";
    
  }



