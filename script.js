

// DETAIL.HTML obtenemos la info de los buzos del json

// Obtenemos el ID del buzo de la URL
const urlParams = new URLSearchParams(window.location.search);
const buzoId = urlParams.get('id');

// Cargamos los datos de los buzos
fetch('buzos.json')
  .then(response => response.json())
  .then(data => {
    const buzo = data.find(item => item.id == buzoId);  // Pedir a chatgpt que te explique este codigo...

    if(buzo){
      document.getElementById('buzo-nombre').textContent = buzo.nombre;
      document.getElementById('buzo-precio').textContent = buzo.precio;
      document.getElementById('buzo-descripcion').textContent = buzo.descripcion;
      document.getElementById('buzo-imagen').src = buzo.imagen;
    }
  })

  var imagen = document.getElementById('imagen1');

/* function nuevaPestania(){
  //  window.open('detail.html'); // Se abrira en una nueva pestaña
     window.location.href = 'detail.html?id=1'; // Se abre en la misma pestaña
}

imagen.addEventListener("click", nuevaPestania); */

// Para no hacer esto 12 veces, hacemos lo siguiente...

const imagenes = document.querySelectorAll('.buzo-imagen');

imagenes.forEach(imagen =>{
  imagen.addEventListener('click', function(){
    const buzoId = this.getAttribute('data-id'); // Obtenemos el data-id del buzo 
    window.location.href = `detail.html?id=${buzoId}`;
  });
});