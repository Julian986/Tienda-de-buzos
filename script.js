var imagen = document.getElementById('imagen1');

function nuevaPestania(){
  //  window.open('detail.html'); // Se abrira en una nueva pestaña
     window.location.href = 'detail.html'; // Se abre en la misma pestaña
}

imagen.addEventListener("click", nuevaPestania);