function calcular() {
  /* Objetos del DOM */

  const codigos = document.getElementsByName("spancodigo");  
  const nombres = document.getElementsByName("spannombre");
  const precios = document.getElementsByName("spanprecio");
  const cantidades = document.getElementsByName("inputcantidad");

  // Variables
  let importes = [];
  let total = 0;

  // Inicio del bucle
  for(let i=0; i < cantidades.length; i++) {
    if(cantidades[i].value > 0) {
        importes[i] = cantidades[i].value * precios[i].innerHTML;
        total += importes[i]; // total = total + importes[i]
    }
  }
  // Fin del bucle

  // Mostrar los resultados en la tabla
  document.getElementById('detalle').innerHTML = '';
  for(let i=0; i < importes.length; i++) {
    if(importes[i]) {
        document.getElementById('detalle').innerHTML += `
              <tr>
                <td>${codigos[i].innerHTML}</td>
                <td>${nombres[i].innerHTML}</td>
                <td>${cantidades[i].value}</td>
                <td>${precios[i].innerHTML}</td>
                <td>${importes[i]}</td>
              </tr>    
    `
    }
    
  }

  document.getElementById("total").innerHTML = total;
}
