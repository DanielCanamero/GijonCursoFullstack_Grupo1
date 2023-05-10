<?php

$nombres = isset($_POST["txt_nombres"]) ? $_POST["txt_nombres"] : "";
$apellidos = isset($_POST["txt_apellidos"]) ? $_POST["txt_apellidos"] : "";
$username = isset($_POST["txt_username"]) ? $_POST["txt_username"] : "";

try {
    
    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=enredando", "enredando", "enredando");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion-> prepare("INSERT INTO users(nombres, apellidos, username) VALUE(?,?,?)");
    $pdo->bindParam(1, $nombres);
    $pdo->bindParam(2, $apellidos);
    $pdo->bindParam(3, $username);
    $pdo->execute() or die(print($pdo->errorInfo()));
    
    echo json_encode("true");
} catch (PDOException $error) {
    echo $error->getMessage();
    die();
}
