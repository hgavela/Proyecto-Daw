<?php
class Conexion extends PDO{
    private $host = 'bbdd.wherejustwatch.com';
    private $dbname = 'ddb183957';
    private $user = 'ddb183957';
    private $pass = '.dA%28,ijhD:';

    public function __construct()
    {
        try {
            parent::__construct('mysql:host='.$this->host.';dbname='.$this->dbname.';charset=utf8', $this->user, $this->pass, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            //echo "Conexion realizada con exito";
            
        } catch (PDOException $e) {
            echo 'Ha surgido un error y no se puede conectar a la base de datos. Detalle: ' . $e->getMessage();
            exit;
        }
    }
}
