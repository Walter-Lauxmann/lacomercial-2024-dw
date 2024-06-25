function calcular() {
/* Objetos del DOM */
// Códigos
const codigo1 = document.getElementById('spancodigo1');
const codigo2 = document.getElementById('spancodigo2');
const codigo3 = document.getElementById('spancodigo3');
const codigo4 = document.getElementById('spancodigo4');

// Nombres
const nombre1 = document.getElementById('spannombre1');
const nombre2 = document.getElementById('spannombre2');
const nombre3 = document.getElementById('spannombre3');
const nombre4 = document.getElementById('spannombre4');

// Precios
const precio1 = document.getElementById('spanprecio1');
const precio2 = document.getElementById('spanprecio2');
const precio3 = document.getElementById('spanprecio3');
const precio4 = document.getElementById('spanprecio4');

// Cantidades
const cantidad1 = document.getElementById('inputcantidad1');
const cantidad2 = document.getElementById('inputcantidad2');
const cantidad3 = document.getElementById('inputcantidad3');
const cantidad4 = document.getElementById('inputcantidad4');

// Variables
let importe1 = precio1.innerHTML * cantidad1.value;
let importe2 = precio2.innerHTML * cantidad2.value;
let importe3 = precio3.innerHTML * cantidad3.value;
let importe4 = precio4.innerHTML * cantidad4.value;

let total = importe1 + importe2 + importe3 + importe4;

// Mostrar los resultados en la tabla
document.getElementById('codigo1').innerHTML = codigo1.innerHTML;
document.getElementById('codigo2').innerHTML = codigo2.innerHTML;
document.getElementById('codigo3').innerHTML = codigo3.innerHTML;
document.getElementById('codigo4').innerHTML = codigo4.innerHTML;

document.getElementById('nombre1').innerHTML = nombre1.innerHTML;
document.getElementById('nombre2').innerHTML = nombre2.innerHTML;
document.getElementById('nombre3').innerHTML = nombre3.innerHTML;
document.getElementById('nombre4').innerHTML = nombre4.innerHTML;

document.getElementById('cantidad1').innerHTML = cantidad1.value;
document.getElementById('cantidad2').innerHTML = cantidad2.value;
document.getElementById('cantidad3').innerHTML = cantidad3.value;
document.getElementById('cantidad4').innerHTML = cantidad4.value;

document.getElementById('precio1').innerHTML = precio1.innerHTML;
document.getElementById('precio2').innerHTML = precio2.innerHTML;
document.getElementById('precio3').innerHTML = precio3.innerHTML;
document.getElementById('precio4').innerHTML = precio4.innerHTML;

document.getElementById('importe1').innerHTML = importe1;
document.getElementById('importe2').innerHTML = importe2;
document.getElementById('importe3').innerHTML = importe3;
document.getElementById('importe4').innerHTML = importe4;

document.getElementById('total').innerHTML = total;

}