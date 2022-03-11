<?php

if($_SERVER['REQUEST_METHOD'] == 'GET') {
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $nombre = $_GET['nombre'];
    $from = $_GET['email'];
    $to = "hugogavela@estudiante.edib.es";
    $subject = "Mensaje de $nombre";
    $message = $_GET['mensaje'];
    $headers = "From:" . $from;

    //mail($to,$subject,$message, $headers);
    //echo "The email message was sent.";
    //mail($email, "Mensaje de $nombre", $mensaje);
 
    if(mail($to,$subject,$message, $headers)){
        $headers = "From: $to";
        mail($from, "Gracias por contactar", "Gracias por contactar con nosotros, en breve nos pondremos en contacto contigo.", $headers);
        header("HTTP/1.1 200 Ok");
        exit();
    }else{
        header("HTTP/1.1 500 Internal Server Error");
        exit();
    }
    
}

?>