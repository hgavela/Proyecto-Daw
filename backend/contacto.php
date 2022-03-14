<?php

//Servicio web de tipo get que envia un correo a la cuenta de admin del dominio y otro al email del formulario de aviso de mail recibido

//TODO - Hacer que el mail no se envie como span

include './validate.php';

if($_SERVER['REQUEST_METHOD'] == 'GET') {
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $nombre = $_GET['nombre'];
    $from = $_GET['email'];
    $to = "hugogavela@estudiante.edib.es";
    $subject = "Mensaje de $nombre";
    $message = $_GET['mensaje'];
    $headers = "From:" . $from;


    //Validamos el formato de email y username
    if(validateEmail($email) && validateUsername($username)) {
        if(mail($to,$subject,$message, $headers)){
            $headers = "From: $to";
            mail($from, "Gracias por contactar", "Gracias por contactar con nosotros, en breve nos pondremos en contacto contigo.", $headers);
            header("HTTP/1.1 200 Ok");
            exit();
        }else{
            header("HTTP/1.1 500 Internal Server Error");
            exit();
        }
    } else {
        header("HTTP/1.1 500 Format failed");
            exit();
    }


    
}

?>