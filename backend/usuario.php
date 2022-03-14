<?php
//Damos acceso a las peticiones que venien fuera del puerto del servicio y a los metodos get, post y put
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

//Desactivamos los warnings
error_reporting(0);

//Incluimos la clase conexion
include './conexion.php';
include './validate.php';
$pdo = new Conexion();


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $pdo = $GLOBALS['pdo'];
    $username = $_GET['username'];
    $password = $_GET['password'];
    $email = $_GET['email'];

    if (validateEmail($email) && validatePassword($password) && validateUsername($username)) {
        $sql = "INSERT INTO usuarios (username, password, email) VALUES (:username, :password, :email)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $id = $pdo->lastInsertId();
        if ($id) {
            header("HTTP/1.1 200 Ok");
            echo json_encode($id);
            exit;
        } else {
            header("HTTP/1.1 500 Internal Server Error");
            exit;
        }
    } else {
        header("HTTP/1.1 400 Bad Request");
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

    $pdo = $GLOBALS['pdo'];
    $id = $_GET['id_usuario'];
    $username = $_GET['username'];
    $password = $_GET['password'];
    $email = $_GET['email'];

    if (validateEmail($email) && validatePassword($password) && validateUsername($username)) {
        $sql = "UPDATE usuarios SET username = :username, password = :password, email = :email WHERE id_usuario = :id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        header("HTTP/1.1 200 Ok");
        exit();
    } else {
        header("HTTP/1.1 400 Bad Request");
        exit();
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    $pdo = $GLOBALS['pdo'];
    $id = $_GET['id'];
    $sql = "DELETE FROM usuarios WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    header("HTTP/1.1 200 Ok");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $pdo = $GLOBALS['pdo'];
    $username = $_GET['username'];
    $password = $_GET['password'];
    $id_usuario = $_GET['id_usuario'];


    if (isset($id_usuario)) {
        $sql = "SELECT * FROM usuarios WHERE id_usuario = :id_usuario";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':id_usuario', $id_usuario);
        $stmt->execute();
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
        header("HTTP/1.1 200 Ok");
        echo json_encode($usuario);
        exit();
    } else if (isset($username) && isset($password)) {
        if (validateUsername($username) && validatePassword($password)) {
            $sql = "SELECT id_usuario FROM usuarios WHERE username = :username AND password = :password";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':password', $password);
            $stmt->execute();

            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($usuario) {
                session_start();
                $_SESSION['id'] = $usuario['id_usuario'];
                header("HTTP/1.1 200 Ok");
                echo json_encode($usuario);
                exit();
            } else {
                //header("HTTP/1.1 404 Not Found");
                header("HTTP/1.1 200 Ok");
                echo json_encode(false);
                exit();
            }
        }
    }


    //echo json_encode($usuario);
}
