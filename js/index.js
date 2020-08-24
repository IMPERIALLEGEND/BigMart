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






  