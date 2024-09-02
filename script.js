var imagen = document.querySelectorAll('img');

function nuevaPestania(){
    window.open('detail.html');
}

imagen.addEventListenner('click', nuevaPestania());