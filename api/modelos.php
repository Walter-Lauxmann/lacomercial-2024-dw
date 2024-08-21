<?php
    require_once('config.php'); // Requerimos el archivo de las constantes

    /**
     * Clase principal
     * Esta clase es para conectarse
     * a la Base de Datos
     */
    class Conexion {
        // Propiedades
        protected $db; // propiedad de la conexión

        // Creamos el constructor con la conexión a la BD
        public function __construct() {
            $this->db = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
            // Si se produce un error de conexión, muestra un mensaje
            if($this->db->connect_errno) {
                echo "Fallo al conectar a MySQL: ".$this->db->connect_error;
                return;
            }
            // Establecemos el conjunto de caracteres a utf8
            $this->db->set_charset(DB_CHARSET);
            $this->db->query("SET NAMES 'utf8'");
        }
    }
    /* Fin de la clase principal */

    /**
     * Clase Modelo basada en la clase Conexion
     */
    class Modelo extends Conexion {
        // Propiedades
        private $tabla; // Nombre de la tabla
        private $id = 0; // id del registro
        private $criterio = ''; // Criterio para las consultas
        private $campos = '*'; // Lista de campos
        private $orden = 'id'; // Campos de ordenamiento
        private $limite = 0; // Cantidad de registros

        /**
         * Método constructor
         * @param t la tabla de la Base de Datos
         */
        public function __construct($t) {
            parent::__construct(); // Ejecutamos el constructor padre
            $this->tabla = $t; // Asignamos a la propiedad $tabla el valor de $t
        }

        /* Getter */
        public function get_tabla() {
            return $this->tabla;
        }
        public function get_id() {
            return $this->id;
        }
        public function get_criterio() {
            return $this->criterio;
        }
        public function get_campos() {
            return $this->campos;
        }
        public function get_orden() {
            return $this->orden;
        }
        public function get_limite() {
            return $this->limite;
        }

        /* Setter */
        public function set_tabla($tabla) {
            $this->tabla = $tabla;
        }
        public function set_id($id) {
            $this->id = $id;
        }
        public function set_criterio($criterio) {
            $this->criterio = $criterio;
        }
        public function set_campos($campos) {
            $this->campos = $campos;
        }
        public function set_orden($orden) {
            $this->orden = $orden;
        }
        public function set_limite($limite) {
            $this->limite = $limite;
        }

        /**
         * Método de Selección
         * Selecciona los registros de una tabla
         * y los devuelve en formato JSON
         * @return datos los datos en formato JSON
         */
        public function seleccionar() {
            // SELECT * FROM productos WHERE id=4 ORDER BY id LIMIT 10
            $sql = "SELECT $this->campos FROM $this->tabla";
            // Si el criterio NO es igual a NADA
            if($this->criterio != '') {
                $sql .= " WHERE $this->criterio"; // Agregamos el criterio
            }
            // Agregamos el orden
            $sql .= " ORDER BY $this->orden";
            // Si el limite es mayor que cero
            if($this->limite > 0) {
                $sql .= " LIMIT $this->limite"; // Agregamos el límite
            }

            // echo $sql; // Mostramos la instrucción SQL

            // Ejecutamos la consulta y la guardamos en $resultado
            $resultado = $this->db->query($sql);

            // Obtenemos los resultados en un array asociativo 
            $datos = $resultado->fetch_all(MYSQLI_ASSOC);

            // Convertimos los datos a JSON
            $datos_json = json_encode($datos);

            // devolvemos los datos
            return $datos_json;
        }

    }

?>