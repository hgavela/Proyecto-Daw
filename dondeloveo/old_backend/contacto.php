<?php

if($_SERVER['get']){
    $email = $_GET['email'];
    $nombre = $_GET['nombre'];
    $mensaje = $_GET['mensaje'];
    $mensaje = str_replace("\n.", "\n..", $mensaje);

    //mail($email, "Mensaje de $nombre", $mensaje);
 
    if(mail($email, "Mensaje de $nombre", $mensaje)){
        header("HTTP/1.1 200 Ok");
        exit();
    }else{
        header("HTTP/1.1 500 Internal Server Error");
        exit();
    }
}

?>