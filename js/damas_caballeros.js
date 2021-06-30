
const miTitulo = document.getElementById('aceptoModificado');


function acepto() {
    alert('Bienvenido a mi equipo');
}

function noAcepto() {
    /*miTitulo.innerHTML = 'Si';*/
    var miTitulo = document.querySelector(".button-bird-text");
    miTitulo.innerHTML = 'Si';
}

document.addEventListener("DOMContentLoaded", function(){
    var el = document.querySelector(".button-bird");
    var text = document.querySelector(".button-bird__text");
        el.addEventListener('click', function() {
          el.classList.toggle('active');

          if(el.classList.contains('active')){
              console.log('true');
              text.innerHTML = 'Ahora eres parte de mi equipo';
              document.getElementById("noAcepto").style.display = "none";
              setTimeout ("redireccionar()", 5000);
          }else{
              text.innerHTML = 'Si';
          }
      });
});

function redireccionar(){
    window.location="https://api.whatsapp.com/send?phone=+593982900737";
} 
  



