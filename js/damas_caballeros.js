
document.addEventListener("DOMContentLoaded", function(){
    var el = document.querySelector(".button-bird");
    var text = document.querySelector(".button-bird__text");
        el.addEventListener('click', function() {
          el.classList.toggle('active');

          if(el.classList.contains('active')){
              console.log('true');
              //var text = document.getElementById("span");
              text.innerHTML = 'Ahora eres parte de mi equipo';
              document.getElementById("noAcepto").style.display = "none";
              text.style.fontSize = "25px";
              text.style.fontFamily = "fontweedingsub";
              text.style.transform = "translateY(-30%)";
              setTimeout ("redireccionar()", 5000);
          }else{
              text.innerHTML = 'Si';
          }
      });
});


function redireccionar(){
    window.location="https://chat.whatsapp.com/K4IIPrfwI1QDPs3L8Rur6d";
}
  



