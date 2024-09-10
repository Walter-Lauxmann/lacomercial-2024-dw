import { obtenerArticulos, insertarArticulos } from "../modelos/articulos.js";

const listado = document.querySelector("#listado");

// Formulario
const formulario = document.querySelector('#formulario');
const formularioModal = new bootstrap.Modal(document.querySelector('#formularioModal'));
const btnNuevo = document.querySelector('#btnNuevo');

// Inputs
const inputCodigo = document.querySelector('#codigo');
const inputNombre = document.querySelector('#nombre');
const inputDescripcion = document.querySelector('#descripcion');
const inputPrecio = document.querySelector('#precio');

document.addEventListener('DOMContentLoaded', ()=> {
  mostrarArticulos();
})

async function mostrarArticulos() {
  const articulos = await obtenerArticulos();

  articulos.map((articulo) => {
    listado.innerHTML += `
    <div class="col">
            <div class="card" style="width: 18rem">
              <img
                src="./imagenes/productos/${articulo.imagen}"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  <span name="spancodigo">${articulo.codigo}</span> -
                  <span name="spannombre">${articulo.nombre}</span>
                </h5>
                <p class="card-text">
                  Procesador: ${articulo.descripcion.procesador} <br />
                  Almacenamiento: ${articulo.descripcion.almacenamiento} <br />
                  Cámaras: ${articulo.descripcion.camaras} <br />
                  Pantalla: ${articulo.descripcion.pantalla}
                </p>
                <h5>$ <span name="spanprecio">${articulo.precio}</span>.-</h5>
                <input
                  type="number"
                  name="inputcantidad"
                  class="form-control"
                  value="0"
                  min="0"
                  max="30"
                  onchange="calcular()"
                />
              </div>
            </div>
          </div>
    
    `;
  });
}

/**
 * Ejecuta el evento click del botón Nuevo
 */
btnNuevo.addEventListener('click', () => {
  // Limpiamos los inputs
  inputCodigo.value = null;
  inputNombre.value = null;
  inputDescripcion.value = null;
  inputPrecio.value = null;  

  // Mostramos el formulario Modal
  formularioModal.show();
})

/**
 * Ejecuta el evento submit del formulario
 */
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Previene la acción por defecto

  const datos = new FormData(formulario); // Guardamos los datos del formulario

  insertarArticulos(datos); // Ejecutamos el método insertarArticulos del modelo

  mostrarArticulos(); // Mostramos los artículos

})

