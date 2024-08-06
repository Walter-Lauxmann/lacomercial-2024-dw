<?php
    require_once('config.php'); // Requerimos el archivo de las constantes

    /**
     * Clase principal
     * Esta clase es para conectarse
     * a la Base de Datos
     */
    class Modelo {
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
?>