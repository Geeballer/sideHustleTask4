
   var yel =  document.querySelector(".speedyQuadsView");
   var yelo =  document.querySelector(".info");
document.getElementById("yellow").addEventListener("click", function(){
     
    yel.style.backgroundColor = "#FBEC06";

    var x = document.querySelectorAll("p, h2, a, .colorTitle, .selectTitle");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "black";
    }
})
    

    var blu =  document.querySelector(".speedyQuadsView");
    var blue =  document.querySelector(".info");
 document.getElementById("blue").addEventListener("click", function(){
      
     blu.style.backgroundColor = "#0392BF";

     var x = document.querySelectorAll("p, h2, a, .colorTitle, .selectTitle");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "#B3D4E0";
    }
     
 })

 var pin =  document.querySelector(".speedyQuadsView");
    var pink =  document.querySelector(".info");
 document.getElementById("pink").addEventListener("click", function(){
      
     pin.style.backgroundColor = "#ED48BA";

     var x = document.querySelectorAll("p, h2, a, .colorTitle, .selectTitle");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "white";
    }

 })

 var gra =  document.querySelector(".speedyQuadsView");
    var gray =  document.querySelector(".info");
 document.getElementById("gray").addEventListener("click", function(){
      
     gra.style.backgroundColor = "#B3D4E0";

     var x = document.querySelectorAll("p, h2, a, .colorTitle, .selectTitle");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "black";
    }
 })
 
 /*   
   // document.getElementById("model").style.color = "black";
   // document.getElementById("sn").style.color = "black";
    document.getElementsByTagName("p").style.color = "black";
});

document.getElementById("blue").addEventListener("click", function(){
     
    cha.style.backgroundColor = "#0392BF";
});

document.getElementById("pink").addEventListener("click", function(){
     
    cha.style.backgroundColor = "#ED48BA";
});

document.getElementById("gray").addEventListener("click", function(){
    cha.style.backgroundColor = "#B3D4E0";
});
*/