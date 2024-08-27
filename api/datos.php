<?php
// Requerimos el archivo modelos.php donde se encuentra la clase Modelo
require_once 'modelos.php';

$mensaje = '';

if(isset($_GET['tabla'])) { // Si está seteado $_GET['tabla]
    $tabla = new Modelo($_GET['tabla']); // Creamos el objeto tabla

    if(isset($_GET['id'])) { // Si está seteado el atributo id
        $tabla->set_criterio("id=".$_GET['id']); // Establecemos el criterio
    }

    if(isset($_GET['accion'])) { // Si está seteado el atributo accion
        // Si la acción es insertar O actualizar
        if($_GET['accion'] == 'insertar' || $_GET['accion'] == 'actualizar') {
            $valores = $_POST; // Tomamos los datos que vienen por POST
        }

        // Según la acción
        switch($_GET['accion']) {
            case 'seleccionar': // En caso que sea seleccionar
                $datos = $tabla->seleccionar(); // Ejecutamos el método seleccionar()
                print_r($datos); // Mostramos los datos
                break;
            case 'insertar': // En caso que sea insertar
                $tabla->insertar($valores); // Ejecutamos el método insertar
                $mensaje = 'Datos guardados'; // Creamos un mensaje
                echo json_encode($mensaje); // Devolvemos el mensaje en formato JSON
                break;
            case 'actualizar': // En caso que sea actualizar
                $tabla->actualizar($valores); // Ejecutamos el método actualizar
                $mensaje = 'Datos actualizados';
                echo json_encode($mensaje);
                break;
            case 'eliminar': // En caso que sea eliminar
                $tabla->eliminar(); // Ejecutamos el método eliminar
                $mensaje = 'Dato eliminado';
                echo json_encode($mensaje);
                break;
        }

        
    }
    
}
?>