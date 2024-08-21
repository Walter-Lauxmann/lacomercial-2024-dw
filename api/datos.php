<?php
// Requerimos el archivo modelos.php donde se encuentra la clase Modelo
require_once 'modelos.php';

if(isset($_GET['tabla'])) { // Si está seteado $_GET['tabla]
    $tabla = new Modelo($_GET['tabla']); // Creamos el objeto tabla

    $datos = $tabla->seleccionar(); // Ejecutamos el método seleccionar()
    print_r($datos); // Mostramos los datos
}
?>