<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//Incluimos la clase conexion
include './conexion.php';
$pdo = new Conexion();


if($_SERVER['REQUEST_METHOD'] == 'POST') {

    $username = $_GET['username'];
    $password = $_GET['password'];
    $email = $_GET['email'];

    $sql = "INSERT INTO usuarios (username, password, email) VALUES (:username, :password, :email)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $id = $pdo->lastInsertId();
    if($id){
        header("HTTP/1.1 200 Ok");
        echo json_encode($id);
        exit;
    }
    header("HTTP/1.1 200 Ok");
    exit();
}

if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    $id = $_GET['id'];
    $username = $_GET['username'];
    $password = $_GET['password'];
    $email = $_GET['email'];

    $sql = "UPDATE usuarios SET username = :username, password = :password, email = :email WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    header("HTTP/1.1 200 Ok");
    exit();
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
    $id = $_GET['id'];

    $sql = "DELETE FROM usuarios WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    header("HTTP/1.1 200 Ok");
    exit();
}

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $username = $_GET['username'];
    $password = $_GET['password'];

    $sql = "SELECT * FROM usuarios WHERE username = :username AND password = :password";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
    if($usuario){
        session_start();
        $_SESSION['username'] = $usuario['username'];
        $_SESSION['email'] = $usuario['email'];
        $_SESSION['id'] = $usuario['id_usuario'];
        echo 'true';
        header("HTTP/1.1 200 Ok");
        exit;
    } else {
        header("HTTP/1.1 404 Not Found");
        exit();
    }
    //echo json_encode($usuario);
}

?>