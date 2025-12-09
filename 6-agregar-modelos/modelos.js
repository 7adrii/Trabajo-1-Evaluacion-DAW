document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const contenedorTarjetas = document.getElementById('tarjetas');
    formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const potencia = document.getElementById('potencia').value;
    const precio = document.getElementById('precio').value;
    const fechaLanzamiento = document.getElementById('fechaLanzamiento').value;
    const transmision = document.querySelector('input[name="modo-opcion"]:checked').id;
    const imagen = document.getElementById('imagen').value;
    const color = document.getElementById('color').value;
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.innerHTML = `
        <img src="${imagen}" alt="${marca}" class="tarjeta-imagen" onerror="this.src='https://via.placeholder.com/280x200?text=Imagen+no+disponible'">
        <div class="tarjeta-contenido">
            <div class="tarjeta-titulo">${marca} ${modelo}</div>
            <div class="tarjeta-detalles">Potencia: ${potencia}</div>
            <div class="tarjeta-detalles">Precio: ${precio}</div>
            <div class="tarjeta-detalles">Fecha de lanzamiento: ${fechaLanzamiento}</div>
            <div class="tarjeta-detalles">Transmisión: ${transmision}</div>
            <div class="tarjeta-detalles">Color: ${color}</div>
            <button class="tarjeta-eliminar">Eliminar</button>
        </div>
    `;
        tarjeta.querySelector('.tarjeta-eliminar').addEventListener('click', function() {
            tarjeta.remove();
        });
        contenedorTarjetas.appendChild(tarjeta);
        formulario.reset();
        });
});



